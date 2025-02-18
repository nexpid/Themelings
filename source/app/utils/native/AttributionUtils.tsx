// app/utils/native/AttributionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        entity = argBaz;
        var _closure1_slot1 = entity;
        var _closure1_slot2 = oscard;
        entity = global;
        option = entity.Object;
        golfie = option.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(option)(zuuluu, entity, michal);
        entity = 0;
        michal = oscard[entity];
        entity = undefined;
        michal = report.bind(entity)(michal);
        michal = michal.AnalyticEvents;
        var _closure1_slot3 = michal;
        golfie = 1;
        michal = oscard[golfie];
        option = report.bind(entity)(michal);
        michal = option.isAndroid;
        option = michal.bind(option)();
        michal = 'c5d61fi6aark';
        if(!option) { _fun00002_ip = 116; continue _fun00001 }
 110:
        michal = 'd8fcx8xdmrr4';
 116:
        var _closure1_slot4 = michal;
        michal = {};
        option = oscard[golfie];
        verify = report.bind(entity)(option);
        option = verify.isAndroid;
        verify = option.bind(verify)();
        option = 'ymrsnx';
        if(!verify) { _fun00002_ip = 155; continue _fun00001 }
 149:
        option = 'ctt5aq';
 155:
        michal['LOGIN'] = option;
        golfie = oscard[golfie];
        option = report.bind(entity)(golfie);
        golfie = option.isAndroid;
        option = golfie.bind(option)();
        golfie = 'o3436p';
        if(!option) { _fun00002_ip = 193; continue _fun00001 }
 187:
        golfie = 'ebn8ke';
 193:
        michal['REGISTER'] = golfie;
        var _closure1_slot5 = michal;
        michal = {};
        golfie = function() { // Original name: initializeAttribution
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 2;
            oscard = report[michal];
            entity = undefined;
            oscard = zuuluu.bind(entity)(oscard);
            oscard = oscard.AdjustConfig;
            verify = oscard.EnvironmentProduction;
            oscard = report[michal];
            oscard = zuuluu.bind(entity)(oscard);
            golfie = oscard.AdjustConfig;
            offset = _closure1_slot4;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            yankee = oscard;
            tangon = new yankee[golfie](offset, verify, option);
            tangon = tangon instanceof Object ? tangon : oscard;
            golfie = tangon.setAttributionCallbackListener;
            oscard = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    entity = null;
                    if(!(entity != report)) { _fun00004_ip = 165; continue _fun00003 }
 12:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.track;
                    entity = _closure1_slot3;
                    michal = entity.USER_ATTRIBUTION_RECEIVED;
                    entity = {};
                    oscard = report.trackerToken;
                    entity['adjust_tracker_token'] = oscard;
                    oscard = report.trackerName;
                    entity['adjust_tracker_name'] = oscard;
                    oscard = report.adid;
                    entity['adjust_adid'] = oscard;
                    oscard = report.network;
                    entity['attribution_network'] = oscard;
                    oscard = report.campaign;
                    entity['attribution_campaign'] = oscard;
                    oscard = report.adgroup;
                    entity['attribution_adgroup'] = oscard;
                    report = report.creative;
                    entity['attribution_creative'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 165:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = golfie.bind(tangon)(oscard);
            michal = report[michal];
            michal = zuuluu.bind(entity)(michal);
            zuuluu = michal.Adjust;
            michal = zuuluu.create;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        };
        michal['initializeAttribution'] = golfie;
        golfie = function() { // Original name: trackLogin
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 2;
            zuuluu = golfie[report];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            tangon = zuuluu.Adjust;
            zuuluu = tangon.trackEvent;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            oscard = report.AdjustEvent;
            michal = _closure1_slot5;
            option = michal.LOGIN;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            verify = report;
            michal = new verify[oscard](option, golfie);
            michal = michal instanceof Object ? michal : report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal['trackLogin'] = golfie;
        golfie = function() { // Original name: trackRegister
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 2;
            zuuluu = golfie[report];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            tangon = zuuluu.Adjust;
            zuuluu = tangon.trackEvent;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            oscard = report.AdjustEvent;
            michal = _closure1_slot5;
            option = michal.REGISTER;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            verify = report;
            michal = new verify[oscard](option, golfie);
            michal = michal instanceof Object ? michal : report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal['trackRegister'] = golfie;
        tangon = function() { // Original name: componentWillUnmount
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            zuuluu = michal.Adjust;
            michal = zuuluu.componentWillUnmount;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        michal['componentWillUnmount'] = tangon;
        tangon = 4;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'utils/native/AttributionUtils.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();