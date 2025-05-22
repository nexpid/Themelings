// app/modules/search_v2/native/hooks/useChannelSearchTab.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: searchChannels
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.queryChannels;
        michal = {'query': null, 'guildId': null, 'limit': 1000, 'allowEmptyQueries': true, 'type': null, 'fuzzy': false};
        report = argFoo;
        michal['query'] = report;
        report = argBar;
        michal['guildId'] = report;
        report = argBaz;
        michal['type'] = report;
        report = function() { // Original name: filter
            entity = true;
            return entity;
        };
        michal['filter'] = report;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.record;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    tangon = global;
    offset = tangon.Object;
    option = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    option = oscard[entity];
    golfie = argCor;
    entity = undefined;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.createZustandStore;
    option = 2;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot4 = offset;
    option = option.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = verify.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = report.bind(entity)(option);
    verify = option.getIsAutocompleteVisible;
    var _closure1_slot7 = verify;
    option = option.subscribeTextInputValue;
    var _closure1_slot8 = option;
    verify = tangon.Object;
    option = verify.freeze;
    tangon = {};
    offset = new Array(0);
    tangon['textChannels'] = offset;
    offset = new Array(0);
    tangon['voiceChannels'] = offset;
    offset = null;
    tangon['count'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot9 = tangon;
    tangon = function() {
        entity = _closure1_slot9;
        return entity;
    };
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/hooks/useChannelSearchTab.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useChannelSearchTabCount
        option = argFoo;
        zuuluu = argBar;
        var _closure2_slot0 = option;
        var _closure2_slot1 = zuuluu;
        report = _closure1_slot3;
        golfie = report.useCallback;
        oscard = new Array(1);
        oscard[0] = option;
        tangon = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                option = argFoo;
                oscard = _closure1_slot7;
                report = _closure2_slot0;
                entity = undefined;
                report = oscard.bind(entity)(report);
                if(report) { _fun00002_ip = 239; continue _fun00001 }
 32:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 6;
                report = golfie[report];
                oscard = oscard.bind(entity)(report);
                report = oscard.getGuildIdFromSearchContext;
                tangon = _closure2_slot0;
                golfie = report.bind(oscard)(tangon);
                tangon = null;
                if(!(tangon != golfie)) { _fun00002_ip = 239; continue _fun00001 }
 76:
                report = _closure1_slot11;
                tangon = _closure1_slot4;
                oscard = report.bind(entity)(option, golfie, tangon);
                tangon = _closure1_slot5;
                golfie = report.bind(entity)(option, golfie, tangon);
                report = oscard.map;
                tangon = function(argFoo) {
                    entity = {};
                    michal = argFoo;
                    entity['channel'] = michal;
                    return entity;
                };
                oscard = report.bind(oscard)(tangon);
                report = _closure1_slot0;
                option = _closure1_slot2;
                tangon = 7;
                tangon = option[tangon];
                report = report.bind(entity)(tangon);
                tangon = report.chain;
                golfie = tangon.bind(report)(golfie);
                report = golfie.map;
                tangon = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = argFoo;
                        entity = {};
                        entity['channel'] = zuuluu;
                        report = _closure1_slot6;
                        tangon = report.lastMessageId;
                        michal = zuuluu.id;
                        michal = tangon.bind(report)(michal);
                        tangon = null;
                        if(!(tangon == michal)) { _fun00004_ip = 44; continue _fun00003 }
 38:
                        michal = zuuluu.lastMessageId;
 44:
                        entity['lastMessageId'] = michal;
                        return entity;
                    }
                };
                report = report.bind(golfie)(tangon);
                tangon = report.sort;
                zuuluu = function(argFoo, argBar) {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 8;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.compare;
                    entity = argBar;
                    michal = entity.lastMessageId;
                    entity = argFoo;
                    entity = entity.lastMessageId;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.value;
                golfie = zuuluu.bind(tangon)();
                tangon = oscard.length;
                zuuluu = golfie.length;
                report = tangon + zuuluu;
                tangon = _closure1_slot10;
                zuuluu = tangon.setState;
                michal = {};
                michal['textChannels'] = golfie;
                michal['voiceChannels'] = oscard;
                michal['count'] = report;
                michal = zuuluu.bind(tangon)(michal);
 239:
                return entity;
            }
        };
        golfie = golfie.bind(report)(tangon, oscard);
        var _closure2_slot2 = golfie;
        oscard = report.useEffect;
        tangon = new Array(3);
        tangon[0] = option;
        tangon[1] = golfie;
        tangon[2] = zuuluu;
        zuuluu = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00006_ip = 73; continue _fun00005 }
 10:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 7;
                zuuluu = report[zuuluu];
                report = undefined;
                golfie = tangon.bind(report)(zuuluu);
                oscard = golfie.debounce;
                tangon = _closure2_slot2;
                zuuluu = 250;
                tangon = oscard.bind(golfie)(tangon, zuuluu);
                zuuluu = _closure1_slot8;
                michal = _closure2_slot0;
                entity = true;
                entity = zuuluu.bind(report)(michal, tangon, entity);
                return entity;
 73:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = oscard.bind(report)(zuuluu, tangon);
        tangon = report.useEffect;
        zuuluu = function() {
            entity = function() {
                michal = _closure1_slot10;
                entity = michal.resetState;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        zuuluu = _closure1_slot10;
        michal = zuuluu.useField;
        entity = 'count';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    tangon = function() { // Original name: useTextChannelSearchResults
        zuuluu = _closure1_slot10;
        michal = zuuluu.useField;
        entity = 'textChannels';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useTextChannelSearchResults'] = tangon;
    michal = function() { // Original name: useVoiceChannelSearchResults
        zuuluu = _closure1_slot10;
        michal = zuuluu.useField;
        entity = 'voiceChannels';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useVoiceChannelSearchResults'] = michal;
    return entity;
})();