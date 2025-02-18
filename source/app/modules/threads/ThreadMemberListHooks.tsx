// app/modules/threads/ThreadMemberListHooks.tsx
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StatusTypes;
    var _closure1_slot6 = tangon;
    tangon = new Array(0);
    var _closure1_slot7 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/threads/ThreadMemberListHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useThreadMemberListSections
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argBar;
            michal = argFoo;
            var _closure2_slot0 = michal;
            var _closure2_slot1 = report;
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 4;
            zuuluu = golfie[zuuluu];
            oscard = undefined;
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    tangon = null;
                    report = tangon == entity;
                    entity = undefined;
                    zuuluu = undefined;
                    if(report) { _fun00004_ip = 29; continue _fun00003 }
 20:
                    report = _closure2_slot1;
                    zuuluu = report.id;
 29:
                    if(!(tangon != zuuluu)) { _fun00004_ip = 100; continue _fun00003 }
 33:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = option[zuuluu];
                    oscard = golfie.bind(entity)(zuuluu);
                    report = oscard.subscribeChannel;
                    zuuluu = _closure2_slot1;
                    tangon = zuuluu.id;
                    zuuluu = _closure2_slot0;
                    michal = 6;
                    michal = option[michal];
                    michal = golfie.bind(entity)(michal);
                    michal = michal.DEFAULT_RANGES;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
 100:
                    return entity;
                }
            };
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = 7;
            option = golfie[zuuluu];
            yankee = tangon.bind(oscard)(option);
            offset = yankee.useStateFromStores;
            option = _closure1_slot4;
            verify = new Array(1);
            verify[0] = option;
            option = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    entity = undefined;
                    if(!zuuluu) { _fun00006_ip = 45; continue _fun00005 }
 18:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getRoles;
                    michal = _closure2_slot1;
                    michal = michal.id;
                    entity = zuuluu.bind(tangon)(michal);
 45:
                    return entity;
                }
            };
            offset = offset.bind(yankee)(verify, option);
            var _closure2_slot2 = offset;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(oscard)(zuuluu);
            oscard = golfie.useStateFromStoresObject;
            zuuluu = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                entity = {};
                tangon = _closure1_slot5;
                michal = tangon.getMemberListVersion;
                zuuluu = _closure2_slot0;
                michal = michal.bind(tangon)(zuuluu);
                entity['version'] = michal;
                michal = tangon.getMemberListSections;
                michal = michal.bind(tangon)(zuuluu);
                entity['members'] = michal;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            verify = zuuluu.version;
            tangon = zuuluu.members;
            var _closure2_slot3 = tangon;
            zuuluu = null;
            option = zuuluu == report;
            var _closure2_slot4 = option;
            golfie = _closure1_slot3;
            oscard = golfie.useMemo;
            report = new Array(4);
            report[0] = offset;
            report[1] = tangon;
            report[2] = verify;
            report[3] = option;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure2_slot4;
                    if(tangon) { _fun00008_ip = 175; continue _fun00007 }
 18:
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    tangon = 8;
                    tangon = report[tangon];
                    report = undefined;
                    tangon = oscard.bind(report)(tangon);
                    zuuluu = _closure2_slot2;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.values;
                    report = zuuluu.bind(tangon)();
                    tangon = report.filter;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.hoist;
                        return entity;
                    };
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.sortBy;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.position;
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.reverse;
                    report = zuuluu.bind(tangon)();
                    tangon = report.map;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.value;
                    tangon = zuuluu.bind(tangon)();
                    oscard = tangon.push;
                    zuuluu = _closure1_slot6;
                    report = zuuluu.ONLINE;
                    zuuluu = zuuluu.OFFLINE;
                    zuuluu = oscard.bind(tangon)(report, zuuluu);
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            michal = argFoo;
                            entity = {};
                            zuuluu = _closure1_slot6;
                            zuuluu = zuuluu.ONLINE;
                            if(!(michal !== zuuluu)) { _fun00010_ip = 154; continue _fun00009 }
 25:
                            zuuluu = _closure1_slot6;
                            zuuluu = zuuluu.OFFLINE;
                            if(!(michal !== zuuluu)) { _fun00010_ip = 95; continue _fun00009 }
 39:
                            report = _closure2_slot2;
                            zuuluu = null;
                            golfie = zuuluu == report;
                            report = undefined;
                            if(golfie) { _fun00010_ip = 79; continue _fun00009 }
 57:
                            oscard = _closure2_slot2;
                            oscard = oscard[michal];
                            golfie = zuuluu == oscard;
                            report = undefined;
                            if(golfie) { _fun00010_ip = 79; continue _fun00009 }
 74:
                            report = oscard.name;
 79:
                            oscard = zuuluu != report;
                            zuuluu = '';
                            if(!oscard) { _fun00010_ip = 93; continue _fun00009 }
 90:
                            zuuluu = report;
 93:
                            _fun00010_ip = 152; continue _fun00009;
 95:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            report = 9;
                            oscard = offset[report];
                            option = undefined;
                            oscard = verify.bind(option)(oscard);
                            golfie = oscard.intl;
                            oscard = golfie.string;
                            report = offset[report];
                            report = verify.bind(option)(report);
                            report = report.t;
                            report = report.Vv0abG;
                            zuuluu = oscard.bind(golfie)(report);
 152:
                            _fun00010_ip = 211; continue _fun00009;
 154:
                            option = _closure1_slot0;
                            verify = _closure1_slot2;
                            tangon = 9;
                            report = verify[tangon];
                            golfie = undefined;
                            report = option.bind(golfie)(report);
                            oscard = report.intl;
                            report = oscard.string;
                            tangon = verify[tangon];
                            tangon = option.bind(golfie)(tangon);
                            tangon = tangon.t;
                            tangon = tangon.WbGtnJ;
                            zuuluu = report.bind(oscard)(tangon);
 211:
                            entity['label'] = zuuluu;
                            zuuluu = _closure2_slot3;
                            tangon = null;
                            oscard = tangon == zuuluu;
                            zuuluu = undefined;
                            if(oscard) { _fun00010_ip = 256; continue _fun00009 }
 233:
                            report = _closure2_slot3;
                            report = report[michal];
                            oscard = tangon == report;
                            zuuluu = undefined;
                            if(oscard) { _fun00010_ip = 256; continue _fun00009 }
 250:
                            zuuluu = report.userIds;
 256:
                            if(!(tangon == zuuluu)) { _fun00010_ip = 264; continue _fun00009 }
 260:
                            zuuluu = new Array(0);
 264:
                            entity['userIds'] = zuuluu;
                            entity['id'] = michal;
                            entity['roleId'] = michal;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return michal;
 175:
                    entity = _closure1_slot7;
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(entity, report);
            if(!(zuuluu == tangon)) { _fun00002_ip = 219; continue _fun00001 }
 215:
            entity = _closure1_slot7;
 219:
            return entity;
        }
    };
    zuuluu['useThreadMemberListSections'] = michal;
    return entity;
})();