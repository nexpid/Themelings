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
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo) {
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.queryChannels;
            zuuluu = {'query': null, 'guildId': null, 'limit': 1000, 'allowEmptyQueries': true, 'type': null, 'fuzzy': false};
            golfie = _closure2_slot0;
            zuuluu['query'] = golfie;
            golfie = _closure2_slot1;
            zuuluu['guildId'] = golfie;
            oscard = _closure2_slot2;
            zuuluu['type'] = oscard;
            oscard = function() { // Original name: filter
                entity = true;
                return entity;
            };
            zuuluu['filter'] = oscard;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = argFoo;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    var _closure1_slot14 = entity;
    tangon = global;
    offset = tangon.Object;
    option = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    option = oscard[golfie];
    golfie = argCor;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.createZustandStore;
    option = 3;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot5 = offset;
    option = option.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = verify.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = report.bind(entity)(option);
    verify = option.getIsAutocompleteVisible;
    var _closure1_slot8 = verify;
    option = option.subscribeTextInputValue;
    var _closure1_slot9 = option;
    yankee = new Array(0);
    var _closure1_slot10 = yankee;
    offset = new Array(0);
    var _closure1_slot11 = offset;
    verify = tangon.Object;
    option = verify.freeze;
    tangon = {};
    tangon['textChannels'] = yankee;
    tangon['voiceChannels'] = offset;
    offset = null;
    tangon['count'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot12 = tangon;
    tangon = function() {
        entity = _closure1_slot12;
        return entity;
    };
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/hooks/useChannelSearchTab.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useChannelSearchTabCount
        option = argFoo;
        var _closure2_slot0 = option;
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        zuuluu = 7;
        zuuluu = report[zuuluu];
        report = undefined;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.useIsChannelsTabVisible;
        zuuluu = zuuluu.bind(tangon)(option);
        var _closure2_slot1 = zuuluu;
        oscard = _closure1_slot4;
        golfie = oscard.useCallback;
        tangon = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00002_ip = 321; continue _fun00001 }
 12:
                        option = argFoo;
                        michal = undefined;
                        golfie = undefined;
                        verify = _closure1_slot8;
                        zuuluu = _closure2_slot0;
                        zuuluu = verify.bind(michal)(zuuluu);
                        if(zuuluu) { _fun00002_ip = 318; continue _fun00001 }
 44: // try_start_0
                        yankee = _closure1_slot14;
                        offset = option;
                        zuuluu = _closure2_slot0;
                        verify = zuuluu.guildId;
                        zuuluu = _closure1_slot5;
                        zuuluu = yankee.bind(michal)(offset, verify, zuuluu);
                        SaveGenerator(address=75);
 73:
                        return zuuluu;
 75:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                        if(verify) { _fun00002_ip = 272; continue _fun00001 }
 84:
                        golfie = zuuluu;
                        offset = _closure1_slot14;
                        verify = option;
                        tangon = _closure2_slot0;
                        option = tangon.guildId;
                        tangon = _closure1_slot6;
                        tangon = offset.bind(michal)(verify, option, tangon);
                        SaveGenerator(address=118);
 116:
                        return tangon;
 118:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(option) { _fun00002_ip = 269; continue _fun00001 }
 127:
                        verify = golfie;
                        option = verify.map;
                        golfie = function(argFoo) {
                            entity = {};
                            michal = argFoo;
                            entity['channel'] = michal;
                            return entity;
                        };
                        offset = option.bind(verify)(golfie);
                        option = _closure1_slot0;
                        verify = _closure1_slot2;
                        golfie = 8;
                        golfie = verify[golfie];
                        option = option.bind(michal)(golfie);
                        golfie = option.chain;
                        verify = golfie.bind(option)(tangon);
                        option = verify.map;
                        golfie = function(argFoo) {
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                zuuluu = argFoo;
                                entity = {};
                                entity['channel'] = zuuluu;
                                report = _closure1_slot7;
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
                        option = option.bind(verify)(golfie);
                        golfie = option.sort;
                        report = function(argFoo, argBar) {
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 9;
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
                        golfie = golfie.bind(option)(report);
                        report = golfie.value;
                        yankee = report.bind(golfie)();
                        golfie = offset.length;
                        report = yankee.length;
                        verify = golfie + report;
                        option = _closure1_slot13;
                        golfie = option.setState;
                        report = {};
                        report['textChannels'] = yankee;
                        report['voiceChannels'] = offset;
                        report['count'] = verify;
                        report = golfie.bind(option)(report);
 267: // try_end0
                        _fun00002_ip = 318; continue _fun00001;
 269:
                        return tangon;
 272:
                        return zuuluu;
 275: // catch_target0
                        CatchBlockStart(arg_register=2);
                        report = _closure1_slot13;
                        tangon = report.setState;
                        zuuluu = {};
                        golfie = _closure1_slot10;
                        zuuluu['textChannels'] = golfie;
                        oscard = _closure1_slot11;
                        zuuluu['voiceChannels'] = oscard;
                        oscard = 0;
                        zuuluu['count'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
 318:
                        return michal;
 321:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        report = tangon.bind(report)();
        tangon = new Array(1);
        tangon[0] = option;
        tangon = golfie.bind(oscard)(report, tangon);
        var _closure2_slot2 = tangon;
        golfie = oscard.useEffect;
        report = new Array(3);
        report[0] = option;
        report[1] = tangon;
        report[2] = zuuluu;
        tangon = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00006_ip = 14; continue _fun00005 }
 10:
                michal = undefined;
                return michal;
 14:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 8;
                zuuluu = report[zuuluu];
                report = undefined;
                golfie = tangon.bind(report)(zuuluu);
                oscard = golfie.debounce;
                tangon = _closure2_slot2;
                zuuluu = 250;
                tangon = oscard.bind(golfie)(tangon, zuuluu);
                zuuluu = _closure1_slot9;
                michal = _closure2_slot0;
                entity = true;
                entity = zuuluu.bind(report)(michal, tangon, entity);
                return entity;
            }
        };
        tangon = golfie.bind(oscard)(tangon, report);
        report = oscard.useEffect;
        tangon = function() {
            entity = function() {
                michal = _closure1_slot13;
                entity = michal.resetState;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        michal = new Array(0);
        michal = report.bind(oscard)(tangon, michal);
        tangon = _closure1_slot13;
        michal = tangon.useField;
        entity = 'count';
        michal = michal.bind(tangon)(entity);
        entity = new Array(2);
        entity[0] = zuuluu;
        entity[1] = michal;
        return entity;
    };
    zuuluu['default'] = tangon;
    tangon = function() { // Original name: useTextChannelSearchResults
        zuuluu = _closure1_slot13;
        michal = zuuluu.useField;
        entity = 'textChannels';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useTextChannelSearchResults'] = tangon;
    michal = function() { // Original name: useVoiceChannelSearchResults
        zuuluu = _closure1_slot13;
        michal = zuuluu.useField;
        entity = 'voiceChannels';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useVoiceChannelSearchResults'] = michal;
    return entity;
})();