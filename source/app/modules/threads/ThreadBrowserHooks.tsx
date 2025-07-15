// app/modules/threads/ThreadBrowserHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: useActiveThreadIds
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        tangon = 11;
        report = report[tangon];
        tangon = undefined;
        golfie = oscard.bind(tangon)(report);
        oscard = golfie.useStateFromStoresArray;
        tangon = _closure1_slot7;
        report = new Array(3);
        report[0] = tangon;
        tangon = _closure1_slot9;
        report[1] = tangon;
        tangon = _closure1_slot6;
        report[2] = tangon;
        option = zuuluu.guild_id;
        tangon = new Array(2);
        tangon[0] = option;
        zuuluu = zuuluu.id;
        tangon[1] = zuuluu;
        zuuluu = function() {
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 12;
            zuuluu = golfie[zuuluu];
            oscard = undefined;
            tangon = tangon.bind(oscard)(zuuluu);
            verify = _closure1_slot9;
            option = verify.getThreadsForParent;
            zuuluu = _closure2_slot0;
            report = zuuluu.guild_id;
            zuuluu = zuuluu.id;
            zuuluu = option.bind(verify)(report, zuuluu);
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.values;
            report = zuuluu.bind(tangon)();
            tangon = report.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.id;
                michal = _closure1_slot6;
                entity = michal.getChannel;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.filter;
            report = _closure1_slot0;
            michal = 13;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.isNotNullish;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                tangon = _closure1_slot7;
                zuuluu = tangon.can;
                entity = _closure1_slot12;
                michal = entity.VIEW_CHANNEL;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        };
        report = oscard.bind(golfie)(report, zuuluu, tangon);
        var _closure2_slot1 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 12;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = _closure2_slot1;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.sort;
            entity = function(argFoo, argBar) {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 14;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.compare;
                oscard = _closure1_slot8;
                report = oscard.lastMessageId;
                michal = argFoo;
                michal = report.bind(oscard)(michal);
                oscard = _closure1_slot8;
                report = oscard.lastMessageId;
                entity = argBar;
                entity = report.bind(oscard)(entity);
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = michal.reverse;
            michal = entity.bind(michal)();
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golfie[report];
    report = argCor;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.useShouldShowResolvedFlagsForChannel;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 9;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot12 = report;
    report = 17;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/threads/ThreadBrowserHooks.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: useTrackThreadBrowserTab
        tangon = _closure1_slot4;
        zuuluu = tangon.useEffect;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 10;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.trackThreadBrowserTab;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['useTrackThreadBrowserTab'] = report;
    zuuluu['useActiveThreadIds'] = tangon;
    tangon = function(argFoo) { // Original name: useActiveThreads
        report = _closure1_slot13;
        tangon = undefined;
        zuuluu = argFoo;
        yankee = report.bind(tangon)(zuuluu);
        var _closure2_slot0 = yankee;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        zuuluu = 11;
        report = offset[zuuluu];
        option = verify.bind(tangon)(report);
        golfie = option.useStateFromStores;
        report = _closure1_slot11;
        oscard = new Array(1);
        oscard[0] = report;
        report = new Array(1);
        report[0] = yankee;
        zuuluu = offset[zuuluu];
        zuuluu = verify.bind(tangon)(zuuluu);
        romeon = zuuluu.statesWillNeverBeEqual;
        backup = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.partition;
            michal = _closure2_slot0;
            entity = function(argFoo) {
                zuuluu = _closure1_slot11;
                michal = zuuluu.hasJoined;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        sizing = option;
        kiloes = oscard;
        foxtra = report;
        zuuluu = sizing[golfie](kiloes, backup, foxtra, romeon, yankee);
        michal = _closure1_slot3;
        entity = 2;
        zuuluu = michal.bind(tangon)(zuuluu, entity);
        entity = {};
        michal = 0;
        michal = zuuluu[michal];
        entity['joinedThreadIds'] = michal;
        michal = 1;
        michal = zuuluu[michal];
        entity['unjoinedThreadIds'] = michal;
        return entity;
    };
    zuuluu['useActiveThreads'] = tangon;
    tangon = function(argFoo) { // Original name: useActiveGuildThreads
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        tangon = 11;
        report = report[tangon];
        tangon = undefined;
        golfie = oscard.bind(tangon)(report);
        oscard = golfie.useStateFromStoresArray;
        tangon = _closure1_slot7;
        report = new Array(3);
        report[0] = tangon;
        tangon = _closure1_slot9;
        report[1] = tangon;
        tangon = _closure1_slot6;
        report[2] = tangon;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 12;
            zuuluu = golfie[zuuluu];
            oscard = undefined;
            tangon = tangon.bind(oscard)(zuuluu);
            option = _closure1_slot9;
            report = option.getThreadsForGuild;
            zuuluu = _closure2_slot0;
            zuuluu = report.bind(option)(zuuluu);
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.values;
            report = zuuluu.bind(tangon)();
            tangon = report.map;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.values;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.flatten;
            report = zuuluu.bind(tangon)();
            tangon = report.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.id;
                michal = _closure1_slot6;
                entity = michal.getChannel;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.filter;
            report = _closure1_slot0;
            michal = 13;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.isNotNullish;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                tangon = _closure1_slot7;
                zuuluu = tangon.can;
                entity = _closure1_slot12;
                michal = entity.VIEW_CHANNEL;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        };
        report = oscard.bind(golfie)(report, zuuluu, tangon);
        var _closure2_slot1 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 12;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = _closure2_slot1;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.sort;
            entity = function(argFoo, argBar) {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 14;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.compare;
                oscard = _closure1_slot8;
                report = oscard.lastMessageId;
                michal = argFoo;
                michal = report.bind(oscard)(michal);
                oscard = _closure1_slot8;
                report = oscard.lastMessageId;
                entity = argBar;
                entity = report.bind(oscard)(entity);
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = michal.reverse;
            michal = entity.bind(michal)();
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useActiveGuildThreads'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: useArchivedThreads
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            result = argBar;
            backup = argBaz;
            update = argCor;
            var _closure2_slot0 = entity;
            var _closure2_slot1 = result;
            var _closure2_slot2 = backup;
            var _closure2_slot3 = update;
            michal = entity.isModeratorReportChannel;
            michal = michal.bind(entity)();
            var _closure2_slot4 = michal;
            tangon = _closure1_slot5;
            zuuluu = entity.id;
            offset = undefined;
            zuuluu = tangon.bind(offset)(zuuluu);
            tangon = zuuluu.showResolvedFlags;
            var _closure2_slot5 = tangon;
            verify = _closure1_slot0;
            foxtra = _closure1_slot2;
            option = 11;
            zuuluu = foxtra[option];
            kiloes = verify.bind(offset)(zuuluu);
            oscard = kiloes.useStateFromStoresObject;
            romeon = _closure1_slot10;
            report = new Array(1);
            report[0] = romeon;
            zuuluu = function() {
                entity = {};
                michal = _closure1_slot10;
                golfie = michal.isLoading;
                tangon = _closure2_slot0;
                yankee = tangon.id;
                offset = _closure2_slot1;
                verify = _closure2_slot2;
                option = _closure2_slot3;
                romeon = michal;
                zuuluu = romeon[golfie](yankee, offset, verify, option, golfie);
                entity['loading'] = zuuluu;
                zuuluu = michal.isInitialLoad;
                entity['isInitialLoad'] = zuuluu;
                zuuluu = michal.canLoadMore;
                entity['canLoadMore'] = zuuluu;
                michal = michal.nextOffset;
                entity['nextOffset'] = michal;
                return entity;
            };
            report = oscard.bind(kiloes)(report, zuuluu);
            oscard = report.canLoadMore;
            zuuluu = report.loading;
            echoed = report.nextOffset;
            var _closure2_slot6 = echoed;
            report = report.isInitialLoad;
            var _closure2_slot7 = report;
            output = _closure1_slot4;
            sizing = output.useCallback;
            kiloes = new Array(7);
            kiloes[0] = entity;
            kiloes[1] = result;
            kiloes[2] = backup;
            kiloes[3] = update;
            kiloes[4] = echoed;
            kiloes[5] = tangon;
            kiloes[6] = michal;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = _closure1_slot7;
                    report = oscard.can;
                    michal = _closure1_slot12;
                    zuuluu = michal.READ_MESSAGE_HISTORY;
                    michal = _closure2_slot0;
                    michal = report.bind(oscard)(zuuluu, michal);
                    michal = !michal;
                    if(michal) { _fun00004_ip = 59; continue _fun00003 }
 42:
                    zuuluu = _closure2_slot4;
                    if(!zuuluu) { _fun00004_ip = 56; continue _fun00003 }
 49:
                    report = _closure2_slot5;
                    zuuluu = !report;
 56:
                    michal = zuuluu;
 59:
                    if(michal) { _fun00004_ip = 155; continue _fun00003 }
 62:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 15;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.loadArchivedThreads;
                    entity = {};
                    report = _closure2_slot0;
                    oscard = report.guild_id;
                    entity['guildId'] = oscard;
                    report = report.id;
                    entity['channelId'] = report;
                    report = _closure2_slot1;
                    entity['sortOrder'] = report;
                    report = _closure2_slot2;
                    entity['tagFilter'] = report;
                    report = _closure2_slot3;
                    entity['tagSetting'] = report;
                    tangon = _closure2_slot6;
                    entity['offset'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 155:
                    entity = undefined;
                    return entity;
                }
            };
            michal = sizing.bind(output)(michal, kiloes);
            var _closure2_slot8 = michal;
            sizing = _closure1_slot4;
            kiloes = sizing.useRef;
            kiloes = kiloes.bind(sizing)(michal);
            var _closure2_slot9 = kiloes;
            output = _closure1_slot4;
            sizing = output.useEffect;
            kiloes = function() {
                michal = _closure2_slot9;
                entity = _closure2_slot8;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            kiloes = sizing.bind(output)(kiloes);
            output = _closure1_slot4;
            sizing = output.useEffect;
            echoed = entity.id;
            kiloes = new Array(5);
            kiloes[0] = echoed;
            kiloes[1] = result;
            kiloes[2] = backup;
            kiloes[3] = report;
            kiloes[4] = tangon;
            backup = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot7;
                    if(!michal) { _fun00006_ip = 23; continue _fun00005 }
 10:
                    michal = _closure2_slot9;
                    entity = michal.current;
                    entity = entity.bind(michal)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            backup = sizing.bind(output)(backup, kiloes);
            sizing = _closure1_slot4;
            kiloes = sizing.useEffect;
            entity = entity.id;
            backup = new Array(2);
            backup[0] = entity;
            backup[1] = tangon;
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.resort;
                michal = _closure2_slot0;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = kiloes.bind(sizing)(entity, backup);
            entity = {};
            option = foxtra[option];
            offset = verify.bind(offset)(option);
            verify = offset.useStateFromStoresArray;
            option = new Array(3);
            option[0] = romeon;
            romeon = _closure1_slot6;
            option[1] = romeon;
            yankee = _closure1_slot7;
            option[2] = yankee;
            golfie = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 12;
                michal = zuuluu[michal];
                zuuluu = undefined;
                michal = tangon.bind(zuuluu)(michal);
                option = _closure1_slot10;
                golfie = option.getThreads;
                tangon = _closure2_slot0;
                romeon = tangon.id;
                yankee = _closure2_slot1;
                offset = _closure2_slot2;
                verify = _closure2_slot3;
                foxtra = option;
                entity = foxtra[golfie](romeon, yankee, offset, verify, option);
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = _closure2_slot4;
                        if(!michal) { _fun00008_ip = 21; continue _fun00007 }
 10:
                        entity = _closure2_slot5;
                        if(entity) { _fun00008_ip = 21; continue _fun00007 }
 17:
                        entity = false;
                        return entity;
 21:
                        tangon = _closure1_slot6;
                        zuuluu = tangon.getChannel;
                        entity = argFoo;
                        report = zuuluu.bind(tangon)(entity);
                        entity = null;
                        entity = entity != report;
                        if(!entity) { _fun00008_ip = 76; continue _fun00007 }
 50:
                        tangon = _closure1_slot7;
                        zuuluu = tangon.can;
                        michal = _closure1_slot12;
                        michal = michal.VIEW_CHANNEL;
                        entity = zuuluu.bind(tangon)(michal, report);
 76:
                        return entity;
                    }
                };
                michal = michal.bind(zuuluu)(entity);
                entity = michal.value;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = verify.bind(offset)(option, golfie);
            entity['threadIds'] = golfie;
            entity['canLoadMore'] = oscard;
            if(zuuluu) { _fun00002_ip = 413; continue _fun00001 }
 410:
            zuuluu = report;
 413:
            if(!zuuluu) { _fun00002_ip = 419; continue _fun00001 }
 416:
            zuuluu = tangon;
 419:
            entity['loading'] = zuuluu;
            entity['loadMore'] = michal;
            return entity;
        }
    };
    zuuluu['useArchivedThreads'] = michal;
    return entity;
})();