// app/modules/search_v2/native/hooks/useMemberSearchTab.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    var _closure1_slot3 = oscard;
    tangon = global;
    yankee = tangon.Object;
    offset = yankee.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.createZustandStore;
    option = 2;
    option = oscard[option];
    option = verify.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = report.bind(entity)(option);
    verify = option.getIsAutocompleteVisible;
    var _closure1_slot6 = verify;
    verify = option.subscribeTextInputValue;
    var _closure1_slot7 = verify;
    option = option.useSearchTagsChannelIds;
    var _closure1_slot8 = option;
    option = 4;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.Permissions;
    var _closure1_slot9 = option;
    option = 5;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.AutocompleterResultTypes;
    var _closure1_slot10 = option;
    offset = new Array(0);
    var _closure1_slot11 = offset;
    verify = tangon.Object;
    option = verify.freeze;
    tangon = {'searchResultsQuery': '', 'data': null, 'isFetching': false, 'count': null};
    tangon['data'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot12 = tangon;
    tangon = function() {
        entity = _closure1_slot12;
        return entity;
    };
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/hooks/useMemberSearchTab.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useMemberSearchTabCount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            report = _closure1_slot0;
            oscard = _closure1_slot3;
            zuuluu = 6;
            zuuluu = oscard[zuuluu];
            oscard = undefined;
            report = report.bind(oscard)(zuuluu);
            zuuluu = report.useIsMembersTabVisible;
            zuuluu = zuuluu.bind(report)(tangon);
            var _closure2_slot1 = zuuluu;
            report = _closure1_slot8;
            offset = report.bind(oscard)(tangon);
            golfie = offset.size;
            option = 0;
            report = null;
            if(!(option !== golfie)) { _fun00002_ip = 110; continue _fun00001 }
 71:
            verify = offset.size;
            golfie = 1;
            oscard = null;
            if(!(golfie === verify)) { _fun00002_ip = 107; continue _fun00001 }
 85:
            golfie = global;
            verify = golfie.Array;
            golfie = verify.from;
            golfie = golfie.bind(verify)(offset);
            oscard = golfie[option];
 107:
            report = oscard;
 110:
            var _closure2_slot2 = report;
            oscard = _closure1_slot4;
            option = oscard.useCallback;
            golfie = new Array(1);
            golfie[0] = report;
            report = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    oscard = _closure1_slot13;
                    tangon = oscard.getField;
                    zuuluu = 'searchResultsQuery';
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = argBar;
                    if(!(tangon === zuuluu)) { _fun00004_ip = 121; continue _fun00003 }
 34:
                    tangon = new Array(0);
                    var _closure3_slot0 = tangon;
                    golfie = _closure1_slot5;
                    oscard = golfie.getChannel;
                    zuuluu = _closure2_slot2;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    var _closure3_slot1 = zuuluu;
                    zuuluu = report.forEach;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            zuuluu = argFoo;
                            michal = zuuluu.type;
                            entity = _closure1_slot10;
                            entity = entity.USER;
                            if(!(michal === entity)) { _fun00006_ip = 125; continue _fun00005 }
 25:
                            tangon = _closure3_slot1;
                            michal = null;
                            if(!(michal != tangon)) { _fun00006_ip = 111; continue _fun00005 }
 38:
                            report = _closure1_slot2;
                            tangon = _closure1_slot3;
                            michal = 7;
                            tangon = tangon[michal];
                            michal = undefined;
                            oscard = report.bind(michal)(tangon);
                            report = oscard.can;
                            tangon = {};
                            golfie = _closure1_slot9;
                            golfie = golfie.VIEW_CHANNEL;
                            tangon['permission'] = golfie;
                            golfie = zuuluu.record;
                            tangon['user'] = golfie;
                            golfie = _closure3_slot1;
                            tangon['context'] = golfie;
                            tangon = report.bind(oscard)(tangon);
                            if(tangon) { _fun00006_ip = 111; continue _fun00005 }
 109:
                            return michal;
 111:
                            michal = _closure3_slot0;
                            entity = michal.push;
                            entity = entity.bind(michal)(zuuluu);
 125:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(report)(michal);
                    zuuluu = _closure1_slot13;
                    michal = zuuluu.setState;
                    entity = {};
                    report = false;
                    entity['isFetching'] = report;
                    entity['data'] = tangon;
                    tangon = tangon.length;
                    entity['count'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 121:
                    entity = undefined;
                    return entity;
                }
            };
            report = option.bind(oscard)(report, golfie);
            var _closure2_slot3 = report;
            option = oscard.useMemo;
            golfie = new Array(2);
            golfie[0] = report;
            report = tangon.guildId;
            golfie[1] = report;
            report = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 8;
                zuuluu = zuuluu[michal];
                michal = undefined;
                oscard = tangon.bind(michal)(zuuluu);
                offset = _closure2_slot3;
                entity = _closure1_slot10;
                entity = entity.USER;
                tangon = new Array(1);
                tangon[0] = entity;
                zuuluu = {};
                entity = {};
                michal = _closure2_slot0;
                michal = michal.guildId;
                entity['guild'] = michal;
                michal = true;
                entity['strict'] = michal;
                zuuluu['userFilters'] = entity;
                entity = oscard.prototype;
                michal = Object.create(entity, {constructor: {value: oscard}});
                option = 50;
                yankee = michal;
                verify = tangon;
                golfie = zuuluu;
                entity = new yankee[oscard](offset, verify, option, golfie, oscard);
                entity = entity instanceof Object ? entity : michal;
                michal = entity.createSearchContext;
                michal = michal.bind(entity)();
                return entity;
            };
            golfie = option.bind(oscard)(report, golfie);
            var _closure2_slot4 = golfie;
            verify = oscard.useCallback;
            option = new Array(2);
            option[0] = golfie;
            option[1] = tangon;
            report = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argFoo;
                    oscard = _closure1_slot6;
                    tangon = _closure2_slot0;
                    entity = undefined;
                    tangon = oscard.bind(entity)(tangon);
                    if(tangon) { _fun00008_ip = 168; continue _fun00007 }
 30:
                    tangon = report.trim;
                    oscard = tangon.bind(report)();
                    tangon = '';
                    if(!(tangon !== oscard)) { _fun00008_ip = 154; continue _fun00007 }
 48:
                    golfie = _closure1_slot13;
                    oscard = golfie.setState;
                    tangon = {'isFetching': true, 'data': null, 'count': 0};
                    option = _closure1_slot11;
                    tangon['data'] = option;
                    tangon['searchResultsQuery'] = report;
                    tangon = oscard.bind(golfie)(tangon);
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 9;
                    tangon = golfie[tangon];
                    option = oscard.bind(entity)(tangon);
                    golfie = option.requestMembers;
                    tangon = _closure2_slot0;
                    oscard = tangon.guildId;
                    tangon = 50;
                    tangon = golfie.bind(option)(oscard, report, tangon);
                    tangon = _closure2_slot4;
                    zuuluu = tangon.search;
                    zuuluu = zuuluu.bind(tangon)(report);
                    _fun00008_ip = 168; continue _fun00007;
 154:
                    zuuluu = _closure1_slot13;
                    michal = zuuluu.resetState;
                    michal = michal.bind(zuuluu)();
 168:
                    return entity;
                }
            };
            verify = verify.bind(oscard)(report, option);
            var _closure2_slot5 = verify;
            option = oscard.useEffect;
            report = new Array(4);
            report[0] = golfie;
            report[1] = zuuluu;
            report[2] = verify;
            report[3] = tangon;
            tangon = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot1;
                    if(michal) { _fun00010_ip = 14; continue _fun00009 }
 10:
                    michal = undefined;
                    return michal;
 14:
                    report = _closure1_slot0;
                    tangon = _closure1_slot3;
                    zuuluu = 10;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    golfie = report.bind(tangon)(zuuluu);
                    oscard = golfie.debounce;
                    report = _closure2_slot5;
                    zuuluu = 250;
                    zuuluu = oscard.bind(golfie)(report, zuuluu);
                    michal = _closure1_slot7;
                    entity = _closure2_slot0;
                    entity = michal.bind(tangon)(entity, zuuluu);
                    return entity;
                }
            };
            tangon = option.bind(oscard)(tangon, report);
            report = oscard.useEffect;
            tangon = new Array(1);
            tangon[0] = golfie;
            michal = function() {
                entity = function() {
                    michal = _closure2_slot4;
                    entity = michal.clean;
                    entity = entity.bind(michal)();
                    michal = _closure1_slot13;
                    entity = michal.resetState;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            michal = report.bind(oscard)(michal, tangon);
            tangon = _closure1_slot13;
            michal = tangon.useField;
            entity = 'count';
            michal = michal.bind(tangon)(entity);
            entity = new Array(2);
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    tangon = function() { // Original name: useIsMemberSearchTabFetching
        zuuluu = _closure1_slot13;
        michal = zuuluu.useField;
        entity = 'isFetching';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useIsMemberSearchTabFetching'] = tangon;
    michal = function() { // Original name: useMemberSearchTabResults
        zuuluu = _closure1_slot13;
        michal = zuuluu.useField;
        entity = 'data';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useMemberSearchTabResults'] = michal;
    return entity;
})();