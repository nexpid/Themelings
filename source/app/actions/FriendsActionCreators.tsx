// app/actions/FriendsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    golfie = function(argFoo) { // Original name: setSection
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'FRIENDS_SET_SECTION';
        michal['type'] = report;
        report = argFoo;
        michal['section'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot4 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    michal = michal.Routes;
    var _closure1_slot3 = michal;
    michal = {};
    option = function(argFoo) { // Original name: transitionToSection
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            michal = {};
 14:
            zuuluu = michal.explicit;
            if(!(zuuluu === entity)) { _fun00002_ip = 26; continue _fun00001 }
 24:
            zuuluu = false;
 26:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            golfie = 2;
            report = report[golfie];
            oscard = oscard.bind(entity)(report);
            report = oscard.getHistory;
            report = report.bind(oscard)();
            report = report.location;
            oscard = report.pathname;
            report = _closure1_slot3;
            report = report.FRIENDS;
            if(!(oscard !== report)) { _fun00002_ip = 122; continue _fun00001 }
 84:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golfie];
            golfie = oscard.bind(entity)(report);
            oscard = golfie.transitionTo;
            report = _closure1_slot3;
            report = report.FRIENDS;
            report = oscard.bind(golfie)(report);
 122:
            report = _closure1_slot4;
            report = report.bind(entity)(tangon);
            if(!zuuluu) { _fun00002_ip = 166; continue _fun00001 }
 134:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 3;
            michal = report[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = {};
            michal['tab_opened'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 166:
            return entity;
        }
    };
    michal['transitionToSection'] = option;
    michal['setSection'] = golfie;
    tangon = function(argFoo) { // Original name: setInitialSection
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'FRIENDS_SET_INITIAL_SECTION';
        michal['type'] = report;
        report = argFoo;
        michal['section'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setInitialSection'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/FriendsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();