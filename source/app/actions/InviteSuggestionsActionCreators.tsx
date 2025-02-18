// app/actions/InviteSuggestionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/InviteSuggestionsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: loadInviteSuggestions
        michal = argFoo;
        zuuluu = michal.omitUserIds;
        var _closure2_slot0 = zuuluu;
        zuuluu = michal.guild;
        var _closure2_slot1 = zuuluu;
        zuuluu = michal.channel;
        var _closure2_slot2 = zuuluu;
        zuuluu = michal.applicationId;
        var _closure2_slot3 = zuuluu;
        michal = michal.inviteTargetType;
        var _closure2_slot4 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 1;
        zuuluu = zuuluu[michal];
        michal = undefined;
        zuuluu = tangon.bind(michal)(zuuluu);
        michal = zuuluu.fetchUserAffinities;
        zuuluu = michal.bind(zuuluu)();
        michal = zuuluu.then;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'LOAD_INVITE_SUGGESTIONS';
                michal['type'] = report;
                golfie = _closure2_slot0;
                oscard = null;
                if(!(oscard == golfie)) { _fun00002_ip = 85; continue _fun00001 }
 55:
                oscard = global;
                oscard = oscard.Set;
                golfie = oscard.prototype;
                golfie = Object.create(golfie, {constructor: {value: oscard}});
                verify = golfie;
                oscard = new verify[oscard](option);
                oscard = oscard instanceof Object ? oscard : golfie;
                _fun00002_ip = 89; continue _fun00001;
 85:
                oscard = _closure2_slot0;
 89:
                michal['omitUserIds'] = oscard;
                oscard = _closure2_slot1;
                michal['guild'] = oscard;
                oscard = _closure2_slot2;
                michal['channel'] = oscard;
                oscard = _closure2_slot3;
                michal['applicationId'] = oscard;
                report = _closure2_slot4;
                michal['inviteTargetType'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['loadInviteSuggestions'] = tangon;
    michal = function(argFoo) { // Original name: searchInviteSuggestions
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'INVITE_SUGGESTIONS_SEARCH';
        michal['type'] = report;
        report = argFoo;
        michal['query'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['searchInviteSuggestions'] = michal;
    return entity;
})();