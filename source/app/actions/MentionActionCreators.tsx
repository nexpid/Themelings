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
            offset = argFoo;
            verify = arguments[1];
            option = arguments[2];
            golfie = arguments[3];
            oscard = arguments[4];
            var _closure2_slot0 = offset;
            tangon = undefined;
            if(!(verify === tangon)) { _fun00002_ip = 34; continue _fun00001 }
 27:
            verify = _closure1_slot4;
 34:
            if(!(option === tangon)) { _fun00002_ip = 40; continue _fun00001 }
 38:
            option = null;
 40:
            if(!(golfie === tangon)) { _fun00002_ip = 46; continue _fun00001 }
 44:
            golfie = true;
 46:
            if(!(oscard === tangon)) { _fun00002_ip = 52; continue _fun00001 }
 50:
            oscard = true;
 52:
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 1;
            michal = yankee[michal];
            romeon = zuuluu.bind(tangon)(michal);
            zuuluu = romeon.dispatch;
            michal = {};
            foxtra = 'LOAD_RECENT_MENTIONS';
            michal['type'] = foxtra;
            michal['guildId'] = option;
            michal = zuuluu.bind(romeon)(michal);
            zuuluu = _closure1_slot0;
            michal = 2;
            michal = yankee[michal];
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.get;
            michal = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
            report = _closure1_slot3;
            report = report.MENTIONS;
            michal['url'] = report;
            report = {};
            report['before'] = offset;
            report['limit'] = verify;
            report['guild_id'] = option;
            report['roles'] = golfie;
            report['everyone'] = oscard;
            michal['query'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
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
            entity = function() {
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
            entity = zuuluu.bind(tangon)(michal, entity);
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