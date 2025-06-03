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
    var _closure1_slot10 = entity;
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
    option = verify.bind(entity)(option);
    var _closure1_slot7 = option;
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
    var _closure1_slot8 = tangon;
    tangon = function() {
        entity = _closure1_slot8;
        return entity;
    };
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
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
                golfie = _closure1_slot7;
                oscard = golfie.getState;
                report = _closure2_slot0;
                tangon = function(argFoo) {
                    michal = argFoo;
                    entity = michal.isAutocompleteVisible;
                    entity = entity.bind(michal)();
                    return entity;
                };
                tangon = oscard.bind(golfie)(report, tangon);
                if(tangon) { _fun00002_ip = 253; continue _fun00001 }
 44:
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                tangon = 6;
                tangon = oscard[tangon];
                golfie = undefined;
                report = report.bind(golfie)(tangon);
                tangon = report.getGuildIdFromSearchContext;
                zuuluu = _closure2_slot0;
                oscard = tangon.bind(report)(zuuluu);
                zuuluu = null;
                if(!(zuuluu != oscard)) { _fun00002_ip = 253; continue _fun00001 }
 90:
                tangon = _closure1_slot10;
                zuuluu = _closure1_slot4;
                report = tangon.bind(golfie)(option, oscard, zuuluu);
                zuuluu = _closure1_slot5;
                oscard = tangon.bind(golfie)(option, oscard, zuuluu);
                tangon = report.map;
                zuuluu = function(argFoo) {
                    entity = {};
                    michal = argFoo;
                    entity['channel'] = michal;
                    return entity;
                };
                report = tangon.bind(report)(zuuluu);
                tangon = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 7;
                zuuluu = option[zuuluu];
                tangon = tangon.bind(golfie)(zuuluu);
                zuuluu = tangon.chain;
                oscard = zuuluu.bind(tangon)(oscard);
                tangon = oscard.map;
                zuuluu = function(argFoo) {
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
                tangon = tangon.bind(oscard)(zuuluu);
                zuuluu = tangon.sort;
                michal = function(argFoo, argBar) {
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
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.value;
                oscard = michal.bind(zuuluu)();
                zuuluu = report.length;
                michal = oscard.length;
                tangon = zuuluu + michal;
                zuuluu = _closure1_slot9;
                michal = zuuluu.setState;
                entity = {};
                entity['textChannels'] = oscard;
                entity['voiceChannels'] = report;
                entity['count'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 253:
                entity = undefined;
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
                if(michal) { _fun00006_ip = 86; continue _fun00005 }
 10:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 7;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                oscard = report.bind(zuuluu)(tangon);
                report = oscard.debounce;
                tangon = _closure2_slot2;
                zuuluu = 250;
                report = report.bind(oscard)(tangon, zuuluu);
                tangon = _closure1_slot7;
                zuuluu = tangon.subscribeTextInputValue;
                michal = _closure2_slot0;
                entity = {};
                oscard = true;
                entity['fireImmediately'] = oscard;
                entity = zuuluu.bind(tangon)(michal, report, entity);
                return entity;
 86:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = oscard.bind(report)(zuuluu, tangon);
        tangon = report.useEffect;
        zuuluu = function() {
            entity = function() {
                michal = _closure1_slot9;
                entity = michal.resetState;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        zuuluu = _closure1_slot9;
        michal = zuuluu.useField;
        entity = 'count';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    tangon = function() { // Original name: useTextChannelSearchResults
        zuuluu = _closure1_slot9;
        michal = zuuluu.useField;
        entity = 'textChannels';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useTextChannelSearchResults'] = tangon;
    michal = function() { // Original name: useVoiceChannelSearchResults
        zuuluu = _closure1_slot9;
        michal = zuuluu.useField;
        entity = 'voiceChannels';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useVoiceChannelSearchResults'] = michal;
    return entity;
})();