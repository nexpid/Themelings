// app/modules/app_launcher/hooks/useSortedSectionCommands.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CommandListSortOrder;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/hooks/useSortedSectionCommands.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSortedSectionCommands
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.sectionId;
            var _closure2_slot0 = verify;
            entity = entity.commandsByActiveSection;
            var _closure2_slot1 = entity;
            yankee = _closure1_slot4;
            zuuluu = yankee.useState;
            golfie = _closure1_slot5;
            michal = golfie.ALPHABETICAL;
            tangon = zuuluu.bind(yankee)(michal);
            zuuluu = _closure1_slot3;
            offset = undefined;
            michal = 2;
            zuuluu = zuuluu.bind(offset)(tangon, michal);
            michal = 0;
            report = zuuluu[michal];
            michal = 1;
            tangon = zuuluu[michal];
            var _closure2_slot2 = tangon;
            zuuluu = yankee.useMemo;
            michal = new Array(2);
            michal[0] = entity;
            michal[1] = verify;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.section;
                        michal = entity.id;
                        entity = _closure2_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = null;
                    tangon = michal == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00004_ip = 42; continue _fun00003 }
 37:
                    entity = zuuluu.data;
 42:
                    if(!(michal == entity)) { _fun00004_ip = 50; continue _fun00003 }
 46:
                    entity = new Array(0);
 50:
                    return entity;
                }
            };
            entity = zuuluu.bind(yankee)(entity, michal);
            zuuluu = {};
            zuuluu['alphabeticalSortedCommands'] = entity;
            michal = function(argFoo) { // Original name: usePopularSortedCommands
                michal = argFoo;
                report = michal.alphabeticalSortedCommands;
                var _closure3_slot0 = report;
                tangon = _closure1_slot4;
                zuuluu = tangon.useMemo;
                michal = new Array(1);
                michal[0] = report;
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = _closure3_slot0;
                        zuuluu = entity.length;
                        entity = 1;
                        if(!(!(zuuluu <= entity))) { _fun00006_ip = 128; continue _fun00005 }
 21:
                        entity = false;
                        var _closure4_slot0 = entity;
                        oscard = _closure3_slot0;
                        report = oscard.map;
                        zuuluu = function(argFoo, argBar) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                michal = argFoo;
                                entity = _closure4_slot0;
                                if(entity) { _fun00008_ip = 25; continue _fun00007 }
 13:
                                report = michal.global_popularity_rank;
                                tangon = null;
                                entity = tangon != report;
 25:
                                _closure4_slot0 = entity;
                                entity = {};
                                entity['command'] = michal;
                                michal = argBar;
                                entity['alphabeticalSortIndex'] = michal;
                                return entity;
                            }
                        };
                        oscard = report.bind(oscard)(zuuluu);
                        report = _closure4_slot0;
                        zuuluu = {};
                        if(report) { _fun00006_ip = 76; continue _fun00005 }
 57:
                        report = _closure3_slot0;
                        zuuluu['popularSortedCommands'] = report;
                        zuuluu['canSort'] = entity;
                        entity = zuuluu;
                        _fun00006_ip = 126; continue _fun00005;
 76:
                        golfie = oscard.sort;
                        report = function(argFoo, argBar) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                tangon = argFoo;
                                zuuluu = argBar;
                                entity = tangon.command;
                                michal = entity.global_popularity_rank;
                                entity = zuuluu.command;
                                entity = entity.global_popularity_rank;
                                report = null;
                                if(!(report != michal)) { _fun00010_ip = 40; continue _fun00009 }
 36:
                                if(!(report == entity)) { _fun00010_ip = 61; continue _fun00009 }
 40:
                                if(!(report == michal)) { _fun00010_ip = 53; continue _fun00009 }
 44:
                                if(!(report != entity)) { _fun00010_ip = 65; continue _fun00009 }
 48:
                                report = 1;
                                return report;
 53:
                                report = -1;
                                return report;
 61:
                                if(!(michal === entity)) { _fun00010_ip = 83; continue _fun00009 }
 65:
                                tangon = tangon.alphabeticalSortIndex;
                                zuuluu = zuuluu.alphabeticalSortIndex;
                                zuuluu = tangon - zuuluu;
                                return zuuluu;
 83:
                                entity = michal - entity;
                                return entity;
                            }
                        };
                        report = golfie.bind(oscard)(report);
                        report = oscard.map;
                        tangon = function(argFoo) {
                            entity = argFoo;
                            entity = entity.command;
                            return entity;
                        };
                        tangon = report.bind(oscard)(tangon);
                        zuuluu['popularSortedCommands'] = tangon;
                        tangon = true;
                        zuuluu['canSort'] = tangon;
                        entity = zuuluu;
 126:
                        return entity;
 128:
                        entity = {};
                        michal = _closure3_slot0;
                        entity['popularSortedCommands'] = michal;
                        michal = false;
                        entity['canSort'] = michal;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            michal = michal.bind(offset)(zuuluu);
            zuuluu = michal.popularSortedCommands;
            michal = michal.canSort;
            var _closure2_slot3 = michal;
            romeon = yankee.useEffect;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                zuuluu = _closure1_slot1;
                option = _closure1_slot2;
                entity = 3;
                michal = option[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.getApplication;
                zuuluu = _closure2_slot0;
                michal = {};
                golfie = _closure1_slot0;
                oscard = 4;
                oscard = option[oscard];
                oscard = golfie.bind(entity)(oscard);
                oscard = oscard.Millis;
                oscard = oscard.DAY;
                michal['dontRefetchMs'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            verify = romeon.bind(yankee)(verify, offset);
            offset = yankee.useLayoutEffect;
            verify = new Array(1);
            verify[0] = michal;
            option = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00012_ip = 34; continue _fun00011 }
 10:
                    zuuluu = _closure2_slot2;
                    entity = _closure1_slot5;
                    michal = entity.POPULAR;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 34:
                    entity = undefined;
                    return entity;
                }
            };
            option = offset.bind(yankee)(option, verify);
            golfie = golfie.POPULAR;
            if(!(golfie !== report)) { _fun00002_ip = 225; continue _fun00001 }
 212:
            oscard = _closure1_slot5;
            oscard = oscard.ALPHABETICAL;
            zuuluu = entity;
 225:
            entity = {};
            entity['sortOrder'] = report;
            entity['setSortOrder'] = tangon;
            entity['commands'] = zuuluu;
            entity['canSort'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();