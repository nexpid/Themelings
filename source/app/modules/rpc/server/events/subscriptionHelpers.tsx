// app/modules/rpc/server/events/subscriptionHelpers.tsx
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
    tangon = tangon.RPCEvents;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityLayoutMode;
    var _closure1_slot4 = golfie;
    tangon = tangon.ActivityScreenOrientation;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/events/subscriptionHelpers.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: getInitialSubscriptionPayload
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = argBar;
            michal = _closure1_slot3;
            michal = michal.ACTIVITY_PIP_MODE_UPDATE;
            if(!(michal !== tangon)) { _fun00002_ip = 325; continue _fun00001 }
 26:
            michal = _closure1_slot3;
            michal = michal.ACTIVITY_LAYOUT_MODE_UPDATE;
            if(!(michal !== tangon)) { _fun00002_ip = 259; continue _fun00001 }
 43:
            michal = _closure1_slot3;
            michal = michal.THERMAL_STATE_UPDATE;
            if(!(michal !== tangon)) { _fun00002_ip = 188; continue _fun00001 }
 60:
            michal = _closure1_slot3;
            michal = michal.ORIENTATION_UPDATE;
            if(!(michal !== tangon)) { _fun00002_ip = 126; continue _fun00001 }
 74:
            michal = _closure1_slot3;
            michal = michal.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
            if(!(michal !== tangon)) { _fun00002_ip = 92; continue _fun00001 }
 88:
            michal = null;
            return michal;
 92:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 5;
            tangon = tangon[michal];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            michal = tangon.activityInstanceConnectedParticipants;
            michal = michal.bind(tangon)();
            return michal;
 126:
            michal = {};
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 4;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            tangon = report.getIsScreenLandscape;
            tangon = tangon.bind(report)();
            report = _closure1_slot5;
            if(tangon) { _fun00002_ip = 175; continue _fun00001 }
 167:
            tangon = report.PORTRAIT;
            _fun00002_ip = 181; continue _fun00001;
 175:
            tangon = report.LANDSCAPE;
 181:
            michal['screen_orientation'] = tangon;
            return michal;
 188:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 3;
            report = golfie[michal];
            tangon = undefined;
            option = oscard.bind(tangon)(report);
            report = option.getThermalState;
            report = report.bind(option)();
            michal = golfie[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.ThermalStates;
            tangon = michal.UNHANDLED;
            michal = null;
            if(!(report !== tangon)) { _fun00002_ip = 257; continue _fun00001 }
 247:
            tangon = {};
            tangon['thermal_state'] = report;
            michal = tangon;
 257:
            return michal;
 259:
            tangon = entity.application;
            michal = null;
            report = michal == tangon;
            golfie = undefined;
            if(report) { _fun00002_ip = 280; continue _fun00001 }
 275:
            golfie = tangon.id;
 280:
            tangon = michal != golfie;
            report = null;
            if(!tangon) { _fun00002_ip = 304; continue _fun00001 }
 289:
            oscard = _closure1_slot2;
            tangon = oscard.getLayoutModeForApp;
            report = tangon.bind(oscard)(golfie);
 304:
            tangon = michal != report;
            michal = null;
            if(!tangon) { _fun00002_ip = 323; continue _fun00001 }
 313:
            tangon = {};
            tangon['layout_mode'] = report;
            michal = tangon;
 323:
            return michal;
 325:
            michal = entity.application;
            entity = null;
            tangon = entity == michal;
            oscard = undefined;
            if(tangon) { _fun00002_ip = 346; continue _fun00001 }
 341:
            oscard = michal.id;
 346:
            michal = entity != oscard;
            tangon = null;
            if(!michal) { _fun00002_ip = 370; continue _fun00001 }
 355:
            report = _closure1_slot2;
            michal = report.getLayoutModeForApp;
            tangon = michal.bind(report)(oscard);
 370:
            michal = entity != tangon;
            entity = null;
            if(!michal) { _fun00002_ip = 403; continue _fun00001 }
 379:
            michal = {};
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.FOCUSED;
            zuuluu = tangon !== zuuluu;
            michal['is_pip_mode'] = zuuluu;
            entity = michal;
 403:
            return entity;
        }
    };
    zuuluu['getInitialSubscriptionPayload'] = michal;
    return entity;
})();