// app/modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SuggestedFriendSource;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSuggestedFriends
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = null;
            if(!(tangon == michal)) { _fun00002_ip = 13; continue _fun00001 }
 11:
            michal = {};
 13:
            golfie = michal.isConnected;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            verify = undefined;
            option = report.bind(verify)(michal);
            oscard = option.useStateFromStoresArray;
            michal = _closure1_slot5;
            report = new Array(1);
            report[0] = michal;
            michal = function() {
                michal = _closure1_slot5;
                entity = michal.getSuggestions;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = oscard.bind(option)(report, michal);
            var _closure2_slot0 = michal;
            option = _closure1_slot4;
            oscard = option.useState;
            report = new Array(0);
            option = oscard.bind(option)(report);
            oscard = _closure1_slot3;
            report = 2;
            option = oscard.bind(verify)(option, report);
            report = 0;
            oscard = option[report];
            var _closure2_slot1 = oscard;
            report = 1;
            report = option[report];
            tangon = tangon == golfie;
            if(tangon) { _fun00002_ip = 137; continue _fun00001 }
 134:
            tangon = golfie;
 137:
            var _closure2_slot2 = tangon;
            option = _closure1_slot4;
            golfie = option.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = oscard;
            zuuluu[1] = michal;
            zuuluu[2] = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    if(zuuluu) { _fun00004_ip = 18; continue _fun00003 }
 12:
                    zuuluu = new Array(0);
                    return zuuluu;
 18:
                    report = _closure2_slot1;
                    tangon = report.filter;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        michal = entity.source;
                        entity = _closure1_slot6;
                        entity = entity.USER_SUGGESTIONS;
                        entity = michal === entity;
                        return entity;
                    };
                    oscard = tangon.bind(report)(zuuluu);
                    tangon = _closure2_slot0;
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            michal = argFoo;
                            entity = {};
                            zuuluu = michal.user;
                            entity['user'] = zuuluu;
                            tangon = michal.name;
                            zuuluu = null;
                            report = zuuluu != tangon;
                            zuuluu = undefined;
                            if(!report) { _fun00006_ip = 33; continue _fun00005 }
 30:
                            zuuluu = tangon;
 33:
                            entity['friendSuggestionName'] = zuuluu;
                            zuuluu = _closure1_slot6;
                            zuuluu = zuuluu.USER_SUGGESTIONS;
                            entity['source'] = zuuluu;
                            michal = michal.contactNames;
                            entity['contactNames'] = michal;
                            return entity;
                        }
                    };
                    report = zuuluu.bind(tangon)(michal);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.unionBy;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.user;
                        entity = entity.id;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(oscard, report, michal);
                    michal = zuuluu.sort;
                    entity = function(argFoo, argBar) {
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        entity = 6;
                        michal = oscard[entity];
                        tangon = undefined;
                        golfie = report.bind(tangon)(michal);
                        zuuluu = golfie.getName;
                        michal = argFoo;
                        michal = michal.user;
                        zuuluu = zuuluu.bind(golfie)(michal);
                        michal = zuuluu.localeCompare;
                        entity = oscard[entity];
                        report = report.bind(tangon)(entity);
                        tangon = report.getName;
                        entity = argBar;
                        entity = entity.user;
                        entity = tangon.bind(report)(entity);
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            zuuluu = golfie.bind(option)(entity, zuuluu);
            entity = {};
            entity['added'] = oscard;
            entity['setAdded'] = report;
            entity['friendSuggestions'] = zuuluu;
            if(tangon) { _fun00002_ip = 206; continue _fun00001 }
 199:
            michal = michal.length;
            _fun00002_ip = 211; continue _fun00001;
 206:
            michal = zuuluu.length;
 211:
            entity['numFriendSuggestions'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();