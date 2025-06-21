// app/modules/search_v2/native/hooks/useMemberSearchTab.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    option = argCor;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    var _closure1_slot3 = golfie;
    tangon = global;
    yankee = tangon.Object;
    offset = yankee.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.createZustandStore;
    option = 2;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.Permissions;
    var _closure1_slot7 = option;
    option = 5;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.AutocompleterResultTypes;
    var _closure1_slot8 = option;
    offset = new Array(0);
    var _closure1_slot9 = offset;
    verify = tangon.Object;
    option = verify.freeze;
    tangon = {'searchResultsQuery': '', 'data': null, 'isFetching': false, 'count': null};
    tangon['data'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot10 = tangon;
    tangon = function() {
        entity = _closure1_slot10;
        return entity;
    };
    tangon = report.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/search_v2/native/hooks/useMemberSearchTab.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: useMemberSearchTabCount
        zuuluu = argFoo;
        verify = argBar;
        var _closure2_slot0 = zuuluu;
        var _closure2_slot1 = verify;
        tangon = function(argFoo) { // Original name: useMemberSearchChannelId
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot6;
                zuuluu = tangon.useState;
                michal = argFoo;
                entity = function(argFoo) {
                    michal = argFoo;
                    entity = michal.getChannelIds;
                    entity = entity.bind(michal)();
                    return entity;
                };
                oscard = zuuluu.bind(tangon)(michal, entity);
                zuuluu = oscard.size;
                tangon = 0;
                entity = null;
                if(!(tangon !== zuuluu)) { _fun00002_ip = 82; continue _fun00001 }
 43:
                report = oscard.size;
                zuuluu = 1;
                michal = null;
                if(!(zuuluu === report)) { _fun00002_ip = 79; continue _fun00001 }
 57:
                zuuluu = global;
                report = zuuluu.Array;
                zuuluu = report.from;
                zuuluu = zuuluu.bind(report)(oscard);
                michal = zuuluu[tangon];
 79:
                entity = michal;
 82:
                return entity;
            }
        };
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        var _closure2_slot2 = tangon;
        report = _closure1_slot4;
        golfie = report.useCallback;
        oscard = new Array(1);
        oscard[0] = tangon;
        tangon = function(argFoo, argBar) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                oscard = _closure1_slot11;
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
                        entity = _closure1_slot8;
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
                        golfie = _closure1_slot7;
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
                zuuluu = _closure1_slot11;
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
                michal = _closure1_slot8;
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
                tangon = argFoo;
                golfie = _closure1_slot6;
                oscard = golfie.getState;
                report = _closure2_slot0;
                zuuluu = function(argFoo) {
                    michal = argFoo;
                    entity = michal.isAutocompleteVisible;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu = oscard.bind(golfie)(report, zuuluu);
                if(zuuluu) { _fun00010_ip = 224; continue _fun00009 }
 44:
                report = _closure1_slot0;
                oscard = _closure1_slot3;
                zuuluu = 7;
                zuuluu = oscard[zuuluu];
                oscard = undefined;
                golfie = report.bind(oscard)(zuuluu);
                report = golfie.getGuildIdFromSearchContext;
                zuuluu = _closure2_slot0;
                golfie = report.bind(golfie)(zuuluu);
                report = _closure2_slot4;
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00010_ip = 210; continue _fun00009 }
 91:
                report = tangon.trim;
                option = report.bind(tangon)();
                report = '';
                if(!(report !== option)) { _fun00010_ip = 210; continue _fun00009 }
 109:
                if(!(zuuluu != golfie)) { _fun00010_ip = 210; continue _fun00009 }
 113:
                option = _closure1_slot11;
                report = option.setState;
                zuuluu = {'isFetching': true, 'data': null, 'count': 0};
                verify = _closure1_slot9;
                zuuluu['data'] = verify;
                zuuluu['searchResultsQuery'] = tangon;
                zuuluu = report.bind(option)(zuuluu);
                report = _closure1_slot1;
                option = _closure1_slot3;
                zuuluu = 9;
                zuuluu = option[zuuluu];
                oscard = report.bind(oscard)(zuuluu);
                report = oscard.requestMembers;
                zuuluu = 50;
                zuuluu = report.bind(oscard)(golfie, tangon, zuuluu);
                zuuluu = _closure2_slot4;
                michal = zuuluu.search;
                michal = michal.bind(zuuluu)(tangon);
                _fun00010_ip = 224; continue _fun00009;
 210:
                michal = _closure1_slot11;
                entity = michal.resetState;
                entity = entity.bind(michal)();
 224:
                entity = undefined;
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
                if(michal) { _fun00012_ip = 76; continue _fun00011 }
 10:
                report = _closure1_slot0;
                tangon = _closure1_slot3;
                zuuluu = 10;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                oscard = report.bind(zuuluu)(tangon);
                report = oscard.debounce;
                tangon = _closure2_slot5;
                zuuluu = 250;
                tangon = report.bind(oscard)(tangon, zuuluu);
                zuuluu = _closure1_slot6;
                michal = zuuluu.subscribeTextInputValue;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
 76:
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
                    michal = _closure1_slot11;
                    entity = michal.resetState;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        zuuluu = _closure1_slot11;
        michal = zuuluu.useField;
        entity = 'count';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['default'] = report;
    zuuluu['MemberSearchTabStore'] = tangon;
    tangon = function() { // Original name: useIsMemberSearchTabFetching
        zuuluu = _closure1_slot11;
        michal = zuuluu.useField;
        entity = 'isFetching';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useIsMemberSearchTabFetching'] = tangon;
    michal = function() { // Original name: useMemberSearchTabResults
        zuuluu = _closure1_slot11;
        michal = zuuluu.useField;
        entity = 'data';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useMemberSearchTabResults'] = michal;
    return entity;
})();