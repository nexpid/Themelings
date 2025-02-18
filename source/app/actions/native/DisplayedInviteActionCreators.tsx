// app/actions/native/DisplayedInviteActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 3;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/native/DisplayedInviteActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz) { // Original name: showInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = argBaz;
            michal = null;
            if(!(michal == entity)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            entity = {};
 14:
            verify = entity.deeplinkAttemptId;
            tangon = entity.location;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 0;
            zuuluu = oscard[entity];
            entity = undefined;
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = _closure1_slot1;
            michal = 1;
            michal = oscard[michal];
            option = zuuluu.bind(entity)(michal);
            golfie = option.dispatch;
            michal = {};
            offset = 'DISPLAYED_INVITE_SHOW';
            michal['type'] = offset;
            michal['code'] = report;
            offset = argBar;
            michal['username'] = offset;
            michal['deeplinkAttemptId'] = verify;
            michal = golfie.bind(option)(michal);
            michal = 2;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.resolveInvite;
            michal = michal.bind(zuuluu)(report, tangon);
            return entity;
        }
    };
    zuuluu['showInvite'] = tangon;
    michal = function() { // Original name: clearDisplayedInvite
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'DISPLAYED_INVITE_CLEAR';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearDisplayedInvite'] = michal;
    return entity;
})();