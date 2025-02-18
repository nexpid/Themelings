// app/actions/MentionActionCreators.tsx
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
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.Endpoints;
    var _closure1_slot3 = golfie;
    michal = michal.MAX_MENTIONS_PER_FETCH;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: setGuildFilter
        entity = argFoo;
        golfie = entity.guildFilter;
        oscard = entity.roleFilter;
        report = entity.everyoneFilter;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        option = 'SET_RECENT_MENTIONS_FILTER';
        michal['type'] = option;
        michal['guildFilter'] = golfie;
        michal['roleFilter'] = oscard;
        michal['everyoneFilter'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setGuildFilter'] = golfie;
    golfie = function() { // Original name: clearMentions
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CLEAR_MENTIONS';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['clearMentions'] = golfie;
    golfie = function(argFoo) { // Original name: truncateMentions
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'TRUNCATE_MENTIONS';
        michal['type'] = report;
        report = argFoo;
        michal['size'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['truncateMentions'] = golfie;
    golfie = function(argFoo) { // Original name: fetchRecentMentions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            yankee = argFoo;
            offset = arguments[1];
            verify = arguments[2];
            option = arguments[3];
            golfie = arguments[4];
            var _closure2_slot0 = yankee;
            entity = undefined;
            if(!(offset === entity)) { _fun00002_ip = 34; continue _fun00001 }
 27:
            offset = _closure1_slot4;
 34:
            if(!(verify === entity)) { _fun00002_ip = 40; continue _fun00001 }
 38:
            verify = null;
 40:
            if(!(option === entity)) { _fun00002_ip = 46; continue _fun00001 }
 44:
            option = true;
 46:
            if(!(golfie === entity)) { _fun00002_ip = 52; continue _fun00001 }
 50:
            golfie = true;
 52:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            romeon = tangon.bind(entity)(zuuluu);
            tangon = romeon.dispatch;
            zuuluu = {};
            foxtra = 'LOAD_RECENT_MENTIONS';
            zuuluu['type'] = foxtra;
            zuuluu['guildId'] = verify;
            zuuluu = tangon.bind(romeon)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = 2;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            report = zuuluu.HTTP;
            tangon = report.get;
            zuuluu = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
            oscard = _closure1_slot3;
            oscard = oscard.MENTIONS;
            zuuluu['url'] = oscard;
            oscard = {};
            oscard['before'] = yankee;
            oscard['limit'] = offset;
            oscard['guild_id'] = verify;
            oscard['roles'] = option;
            oscard['everyone'] = golfie;
            zuuluu['query'] = oscard;
            report = tangon.bind(report)(zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                entity = argFoo;
                oscard = entity.body;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 1;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                golfie = 'LOAD_RECENT_MENTIONS_SUCCESS';
                michal['type'] = golfie;
                michal['messages'] = oscard;
                option = _closure2_slot0;
                golfie = null;
                golfie = golfie != option;
                michal['isAfter'] = golfie;
                oscard = oscard.length;
                report = _closure1_slot4;
                report = oscard >= report;
                michal['hasMoreAfter'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 1;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'LOAD_RECENT_MENTIONS_FAILURE';
                michal['type'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    michal['fetchRecentMentions'] = golfie;
    golfie = function(argFoo) { // Original name: deleteRecentMention
        report = argFoo;
        oscard = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 2;
        zuuluu = tangon[entity];
        entity = undefined;
        zuuluu = oscard.bind(entity)(zuuluu);
        golfie = zuuluu.HTTP;
        oscard = golfie.del;
        zuuluu = {'url': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
        verify = _closure1_slot3;
        option = verify.MENTIONS_MESSAGE_ID;
        option = option.bind(verify)(report);
        zuuluu['url'] = option;
        zuuluu = oscard.bind(golfie)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 1;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'RECENT_MENTION_DELETE';
        michal['type'] = oscard;
        michal['id'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['deleteRecentMention'] = golfie;
    tangon = function() { // Original name: setRecentMentionsStale
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SET_RECENT_MENTIONS_STALE';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setRecentMentionsStale'] = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/MentionActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();