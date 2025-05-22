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
    tangon = function(argFoo, argBar) { // Original name: useMemberSearchTabCount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            verify = argBar;
            var _closure2_slot0 = zuuluu;
            var _closure2_slot1 = verify;
            report = _closure1_slot8;
            tangon = undefined;
            offset = report.bind(tangon)(zuuluu);
            oscard = offset.size;
            golfie = 0;
            tangon = null;
            if(!(golfie !== oscard)) { _fun00002_ip = 82; continue _fun00001 }
 43:
            option = offset.size;
            oscard = 1;
            report = null;
            if(!(oscard === option)) { _fun00002_ip = 79; continue _fun00001 }
 57:
            oscard = global;
            option = oscard.Array;
            oscard = option.from;
            oscard = oscard.bind(option)(offset);
            report = oscard[golfie];
 79:
            tangon = report;
 82:
            var _closure2_slot2 = tangon;
            report = _closure1_slot4;
            golfie = report.useCallback;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function(argFoo, argBar) {
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
                            michal = 6;
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
            tangon = golfie.bind(report)(tangon, oscard);
            var _closure2_slot3 = tangon;
            golfie = report.useMemo;
            oscard = new Array(2);
            oscard[0] = tangon;
            oscard[1] = zuuluu;
            tangon = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    entity = 7;
                    entity = tangon[entity];
                    golfie = undefined;
                    report = zuuluu.bind(golfie)(entity);
                    zuuluu = report.getGuildIdFromSearchContext;
                    entity = _closure2_slot0;
                    zuuluu = zuuluu.bind(report)(entity);
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00008_ip = 152; continue _fun00007 }
 49:
                    oscard = _closure1_slot1;
                    option = _closure1_slot3;
                    report = 8;
                    report = option[report];
                    golfie = oscard.bind(golfie)(report);
                    romeon = _closure2_slot3;
                    michal = _closure1_slot10;
                    michal = michal.USER;
                    report = new Array(1);
                    report[0] = michal;
                    tangon = {};
                    michal = {};
                    michal['guild'] = zuuluu;
                    zuuluu = true;
                    michal['strict'] = zuuluu;
                    tangon['userFilters'] = michal;
                    michal = golfie.prototype;
                    zuuluu = Object.create(michal, {constructor: {value: golfie}});
                    offset = 50;
                    foxtra = zuuluu;
                    yankee = report;
                    verify = tangon;
                    michal = new foxtra[golfie](romeon, yankee, offset, verify, option);
                    michal = michal instanceof Object ? michal : zuuluu;
                    zuuluu = michal.createSearchContext;
                    zuuluu = zuuluu.bind(michal)();
                    return michal;
 152:
                    return entity;
                }
            };
            oscard = golfie.bind(report)(tangon, oscard);
            var _closure2_slot4 = oscard;
            option = report.useCallback;
            golfie = new Array(2);
            golfie[0] = oscard;
            golfie[1] = zuuluu;
            tangon = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    oscard = _closure1_slot6;
                    tangon = _closure2_slot0;
                    entity = undefined;
                    tangon = oscard.bind(entity)(tangon);
                    if(tangon) { _fun00010_ip = 208; continue _fun00009 }
 30:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot3;
                    tangon = 7;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(entity)(tangon);
                    oscard = golfie.getGuildIdFromSearchContext;
                    tangon = _closure2_slot0;
                    option = oscard.bind(golfie)(tangon);
                    oscard = _closure2_slot4;
                    tangon = null;
                    if(!(tangon != oscard)) { _fun00010_ip = 194; continue _fun00009 }
 75:
                    oscard = report.trim;
                    golfie = oscard.bind(report)();
                    oscard = '';
                    if(!(oscard !== golfie)) { _fun00010_ip = 194; continue _fun00009 }
 93:
                    if(!(tangon != option)) { _fun00010_ip = 194; continue _fun00009 }
 97:
                    golfie = _closure1_slot13;
                    oscard = golfie.setState;
                    tangon = {'isFetching': true, 'data': null, 'count': 0};
                    verify = _closure1_slot11;
                    tangon['data'] = verify;
                    tangon['searchResultsQuery'] = report;
                    tangon = oscard.bind(golfie)(tangon);
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 9;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(entity)(tangon);
                    oscard = golfie.requestMembers;
                    tangon = 50;
                    tangon = oscard.bind(golfie)(option, report, tangon);
                    tangon = _closure2_slot4;
                    zuuluu = tangon.search;
                    zuuluu = zuuluu.bind(tangon)(report);
                    _fun00010_ip = 208; continue _fun00009;
 194:
                    zuuluu = _closure1_slot13;
                    michal = zuuluu.resetState;
                    michal = michal.bind(zuuluu)();
 208:
                    return entity;
                }
            };
            option = option.bind(report)(tangon, golfie);
            var _closure2_slot5 = option;
            golfie = report.useEffect;
            tangon = new Array(4);
            tangon[0] = oscard;
            tangon[1] = verify;
            tangon[2] = option;
            tangon[3] = zuuluu;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot1;
                    if(michal) { _fun00012_ip = 70; continue _fun00011 }
 10:
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
 70:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = golfie.bind(report)(zuuluu, tangon);
            tangon = report.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                entity = function() {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zuuluu = _closure2_slot4;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00014_ip = 27; continue _fun00013 }
 13:
                        michal = _closure2_slot4;
                        entity = michal.clean;
                        entity = entity.bind(michal)();
 27:
                        michal = _closure1_slot13;
                        entity = michal.resetState;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            zuuluu = _closure1_slot13;
            michal = zuuluu.useField;
            entity = 'count';
            entity = michal.bind(zuuluu)(entity);
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