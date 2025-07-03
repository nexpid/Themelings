// app/modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AutoCompleteResultTypes;
    var _closure1_slot4 = golfie;
    tangon = tangon.ChannelTypes;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useHorizontalAutocompleteResults
        entity = argFoo;
        zuuluu = entity.channel;
        var _closure2_slot0 = zuuluu;
        michal = entity.selection;
        var _closure2_slot1 = michal;
        yankee = entity.text;
        var _closure2_slot2 = yankee;
        golfie = _closure1_slot3;
        oscard = golfie.useState;
        entity = new Array(0);
        entity = oscard.bind(golfie)(entity);
        romeon = _closure1_slot2;
        verify = undefined;
        oscard = 2;
        report = romeon.bind(verify)(entity, oscard);
        entity = 0;
        option = report[entity];
        var _closure2_slot3 = option;
        offset = 1;
        report = report[offset];
        var _closure2_slot4 = report;
        foxtra = golfie.useMemo;
        report = new Array(1);
        report[0] = zuuluu;
        zuuluu = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.getAutocompleteOptions;
            michal = _closure2_slot0;
            entity = false;
            entity = zuuluu.bind(tangon)(michal, entity, entity);
            return entity;
        };
        report = foxtra.bind(golfie)(zuuluu, report);
        var _closure2_slot5 = report;
        foxtra = golfie.useState;
        zuuluu = {};
        zuuluu['text'] = yankee;
        backup = michal.start;
        zuuluu['selectionStart'] = backup;
        backup = michal.end;
        zuuluu['selectionEnd'] = backup;
        zuuluu = foxtra.bind(golfie)(zuuluu);
        zuuluu = romeon.bind(verify)(zuuluu, oscard);
        oscard = zuuluu[entity];
        entity = oscard.text;
        var _closure2_slot6 = entity;
        verify = oscard.selectionStart;
        var _closure2_slot7 = verify;
        oscard = oscard.selectionEnd;
        var _closure2_slot8 = oscard;
        zuuluu = zuuluu[offset];
        var _closure2_slot9 = zuuluu;
        offset = golfie.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = yankee;
        zuuluu[1] = michal;
        michal = function() {
            michal = global;
            report = michal.setTimeout;
            tangon = undefined;
            zuuluu = function() {
                zuuluu = _closure2_slot9;
                michal = {};
                tangon = _closure2_slot2;
                michal['text'] = tangon;
                entity = _closure2_slot1;
                tangon = entity.start;
                michal['selectionStart'] = tangon;
                entity = entity.end;
                michal['selectionEnd'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = 16;
            michal = report.bind(tangon)(zuuluu, michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = global;
                zuuluu = entity.clearTimeout;
                michal = _closure3_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            return entity;
        };
        michal = offset.bind(golfie)(michal, zuuluu);
        zuuluu = golfie.useMemo;
        michal = new Array(4);
        michal[0] = verify;
        michal[1] = oscard;
        michal[2] = entity;
        michal[3] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                foxtra = _closure2_slot7;
                var _closure3_slot2 = foxtra;
                entity = _closure2_slot6;
                romeon = null;
                if(!(romeon != entity)) { _fun00002_ip = 347; continue _fun00001 }
 26:
                michal = _closure2_slot6;
                entity = michal.trim;
                entity = entity.bind(michal)();
                michal = entity.length;
                yankee = undefined;
                offset = 0;
                verify = 1;
                option = global;
                golfie = 4;
                oscard = undefined;
                entity = undefined;
                if(!(offset !== michal)) { _fun00002_ip = 347; continue _fun00001 }
 71:
                tangon = _closure1_slot0;
                michal = _closure1_slot1;
                michal = michal[golfie];
                michal = tangon.bind(yankee)(michal);
                report = michal.WHITESPACE_RE;
                tangon = report.test;
                sizing = _closure2_slot6;
                michal = foxtra - verify;
                michal = sizing[michal];
                michal = tangon.bind(report)(michal);
                if(!(offset !== foxtra)) { _fun00002_ip = 123; continue _fun00001 }
 120:
                if(!michal) { _fun00002_ip = 236; continue _fun00001 }
 123:
                report = _closure2_slot6;
                tangon = report.slice;
                sizing = _closure2_slot8;
                michal = foxtra;
                if(!(romeon != sizing)) { _fun00002_ip = 147; continue _fun00001 }
 143:
                michal = _closure2_slot8;
 147:
                tangon = tangon.bind(report)(foxtra, michal);
                michal = tangon[offset];
                var _closure3_slot0 = michal;
                michal = tangon.slice;
                tangon = michal.bind(tangon)(verify);
                michal = tangon.toLowerCase;
                michal = michal.bind(tangon)();
                var _closure3_slot1 = michal;
                sizing = option.Object;
                report = sizing.keys;
                tangon = _closure2_slot5;
                sizing = report.bind(sizing)(tangon);
                report = sizing.find;
                tangon = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = _closure2_slot5;
                        entity = argFoo;
                        oscard = michal[entity];
                        entity = _closure3_slot0;
                        tangon = undefined;
                        entity = tangon !== entity;
                        if(!entity) { _fun00004_ip = 38; continue _fun00003 }
 30:
                        zuuluu = _closure3_slot1;
                        entity = tangon !== zuuluu;
 38:
                        if(!entity) { _fun00004_ip = 66; continue _fun00003 }
 41:
                        report = oscard.matches;
                        tangon = _closure3_slot0;
                        zuuluu = _closure3_slot1;
                        michal = _closure3_slot2;
                        entity = report.bind(oscard)(tangon, zuuluu, michal);
 66:
                        return entity;
                    }
                };
                oscard = report.bind(sizing)(tangon);
                entity = michal;
                report = entity;
                michal = foxtra;
                tangon = oscard;
                if(!(romeon == tangon)) { _fun00002_ip = 262; continue _fun00001 }
 236:
                sizing = foxtra - 1;
                _closure3_slot2 = sizing;
                foxtra = sizing;
                tangon = oscard;
                report = entity;
                michal = foxtra;
                if(michal >= offset) { _fun00002_ip = 71; continue _fun00001 }
 262:
                entity = {};
                entity['query'] = report;
                entity['autocompleteType'] = tangon;
                entity['autocompleteSelectionStart'] = michal;
                michal = {};
                tangon = false;
                michal['includeEmojiPremiumUpsell'] = tangon;
                tangon = _closure1_slot5;
                report = tangon.GUILD_FORUM;
                zuuluu = new Array(4);
                zuuluu[0] = report;
                report = tangon.GUILD_MEDIA;
                zuuluu[1] = report;
                report = tangon.GUILD_TEXT;
                zuuluu[2] = report;
                tangon = tangon.GUILD_ANNOUNCEMENT;
                zuuluu[3] = tangon;
                michal['channelTypes'] = zuuluu;
                entity['queryOptions'] = michal;
                return entity;
 347:
                entity = {'query': null, 'autocompleteType': null, 'autocompleteSelectionStart': null};
                return entity;
            }
        };
        zuuluu = zuuluu.bind(golfie)(entity, michal);
        offset = zuuluu.autocompleteType;
        var _closure2_slot10 = offset;
        michal = zuuluu.query;
        var _closure2_slot11 = michal;
        entity = zuuluu.queryOptions;
        var _closure2_slot12 = entity;
        zuuluu = zuuluu.autocompleteSelectionStart;
        verify = golfie.useCallback;
        oscard = new Array(4);
        oscard[0] = offset;
        oscard[1] = michal;
        oscard[2] = entity;
        oscard[3] = report;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot10;
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00006_ip = 21; continue _fun00005 }
 13:
                michal = _closure2_slot11;
                if(!(zuuluu == michal)) { _fun00006_ip = 38; continue _fun00005 }
 21:
                tangon = _closure2_slot4;
                zuuluu = undefined;
                michal = new Array(0);
                michal = tangon.bind(zuuluu)(michal);
                _fun00006_ip = 85; continue _fun00005;
 38:
                zuuluu = _closure2_slot5;
                michal = _closure2_slot10;
                oscard = zuuluu[michal];
                zuuluu = _closure2_slot4;
                report = oscard.queryResults;
                tangon = _closure2_slot11;
                michal = _closure2_slot12;
                entity = argFoo;
                michal = report.bind(oscard)(tangon, michal, entity);
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 85:
                entity = undefined;
                return entity;
            }
        };
        entity = verify.bind(golfie)(entity, oscard);
        var _closure2_slot13 = entity;
        verify = golfie.useEffect;
        oscard = new Array(3);
        oscard[0] = offset;
        oscard[1] = entity;
        oscard[2] = report;
        report = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure2_slot10;
                michal = null;
                zuuluu = michal != zuuluu;
                report = null;
                if(!zuuluu) { _fun00008_ip = 54; continue _fun00007 }
 20:
                zuuluu = _closure2_slot5;
                oscard = michal == zuuluu;
                zuuluu = undefined;
                if(oscard) { _fun00008_ip = 51; continue _fun00007 }
 33:
                oscard = _closure2_slot5;
                tangon = _closure2_slot10;
                tangon = oscard[tangon];
                zuuluu = tangon.stores;
 51:
                report = zuuluu;
 54:
                if(!(michal == report)) { _fun00008_ip = 62; continue _fun00007 }
 58:
                michal = undefined;
                return michal;
 62:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 5;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                tangon = michal.BatchedStoreListener;
                michal = tangon.prototype;
                zuuluu = Object.create(michal, {constructor: {value: tangon}});
                golfie = function() {
                    zuuluu = _closure2_slot13;
                    michal = undefined;
                    entity = false;
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                verify = zuuluu;
                option = report;
                michal = new verify[tangon](option, golfie, oscard);
                tangon = michal instanceof Object ? michal : zuuluu;
                var _closure3_slot0 = tangon;
                zuuluu = tangon.attach;
                michal = 'useHorizontalAutocompleteResults';
                michal = zuuluu.bind(tangon)(michal);
                entity = function() {
                    michal = _closure3_slot0;
                    entity = michal.detach;
                    entity = entity.bind(michal)();
                    return entity;
                };
                return entity;
            }
        };
        report = verify.bind(golfie)(report, oscard);
        oscard = golfie.useEffect;
        report = new Array(1);
        report[0] = entity;
        entity = function() {
            zuuluu = _closure2_slot13;
            entity = undefined;
            michal = true;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = oscard.bind(golfie)(entity, report);
        entity = {};
        oscard = golfie.useMemo;
        report = new Array(1);
        report[0] = option;
        tangon = function() {
            zuuluu = _closure2_slot3;
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.type;
                    entity = _closure1_slot4;
                    entity = entity.USER;
                    entity = zuuluu === entity;
                    if(entity) { _fun00010_ip = 42; continue _fun00009 }
 28:
                    tangon = _closure1_slot4;
                    tangon = tangon.ROLE;
                    entity = zuuluu === tangon;
 42:
                    if(entity) { _fun00010_ip = 59; continue _fun00009 }
 45:
                    tangon = _closure1_slot4;
                    tangon = tangon.CHANNEL;
                    entity = zuuluu === tangon;
 59:
                    if(entity) { _fun00010_ip = 76; continue _fun00009 }
 62:
                    michal = _closure1_slot4;
                    michal = michal.EMOJI;
                    entity = zuuluu === michal;
 76:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        tangon = oscard.bind(golfie)(tangon, report);
        entity['results'] = tangon;
        entity['autocompleteSelectionStart'] = zuuluu;
        entity['query'] = michal;
        return entity;
    };
    zuuluu['useHorizontalAutocompleteResults'] = michal;
    return entity;
})();