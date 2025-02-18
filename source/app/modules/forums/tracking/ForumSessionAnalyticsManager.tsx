// app/modules/forums/tracking/ForumSessionAnalyticsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: createSessionData
        entity = {};
        michal = argFoo;
        entity['channelId'] = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        zuuluu = tangon.bind(michal)(zuuluu);
        michal = zuuluu.v4;
        michal = michal.bind(zuuluu)();
        entity['sessionId'] = michal;
        return entity;
    };
    var _closure1_slot4 = entity;
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
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: ForumSessionAnalyticsManager
            tangon = _closure1_slot2;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = this;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        report = 'getForumChannelSessionId';
        entity['key'] = report;
        michal = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                entity = this;
                zuuluu = entity.session;
                michal = null;
                if(!(michal == zuuluu)) { _fun00002_ip = 38; continue _fun00001 }
 18:
                zuuluu = _closure1_slot4;
                michal = undefined;
                michal = zuuluu.bind(michal)(tangon);
                entity['session'] = michal;
 38:
                michal = entity.session;
                michal = michal.channelId;
                if(!(michal !== tangon)) { _fun00002_ip = 73; continue _fun00001 }
 53:
                zuuluu = _closure1_slot4;
                michal = undefined;
                michal = zuuluu.bind(michal)(tangon);
                entity['session'] = michal;
 73:
                entity = entity.session;
                entity = entity.sessionId;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/tracking/ForumSessionAnalyticsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();