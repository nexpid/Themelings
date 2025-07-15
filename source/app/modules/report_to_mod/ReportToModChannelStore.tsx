// app/modules/report_to_mod/ReportToModChannelStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    option = oscard.bind(entity)(tangon);
    report = option.create;
    tangon = 1;
    verify = golfie[tangon];
    yankee = oscard.bind(entity)(verify);
    offset = yankee.persist;
    verify = {};
    romeon = 'report-to-mod-channel-storage';
    verify['name'] = romeon;
    tangon = golfie[tangon];
    foxtra = oscard.bind(entity)(tangon);
    romeon = foxtra.createJSONStorage;
    tangon = function() {
        entity = global;
        entity = entity.localStorage;
        return entity;
    };
    tangon = romeon.bind(foxtra)(tangon);
    verify['storage'] = tangon;
    tangon = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        zuuluu = {};
        entity['channelShowResolvedFlags'] = zuuluu;
        zuuluu = function(argFoo, argBar) { // Original name: setShowResolvedFlags
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.batchUpdates;
            entity = function() {
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = function(argFoo) {
                    entity = {};
                    michal = {};
                    zuuluu = argFoo;
                    report = zuuluu.channelShowResolvedFlags;
                    oscard = michal;
                    zuuluu = copyDataProperties(oscard, report);
                    tangon = _closure3_slot0;
                    zuuluu = _closure3_slot1;
                    michal[tangon] = zuuluu;
                    entity['channelShowResolvedFlags'] = michal;
                    return entity;
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['setShowResolvedFlags'] = zuuluu;
        michal = function(argFoo) { // Original name: getShowResolvedFlags
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot1;
                entity = undefined;
                entity = michal.bind(entity)();
                michal = entity.channelShowResolvedFlags;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                entity = entity == michal;
                if(entity) { _fun00002_ip = 38; continue _fun00001 }
 35:
                entity = michal;
 38:
                return entity;
            }
        };
        entity['getShowResolvedFlags'] = michal;
        return entity;
    };
    tangon = offset.bind(yankee)(tangon, verify);
    tangon = report.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/report_to_mod/ReportToModChannelStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useReportToModChannelFiltersStore'] = tangon;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            michal = _closure1_slot2;
            entity = undefined;
            report = michal.bind(entity)();
            var _closure2_slot1 = report;
            michal = null;
            if(!(michal != oscard)) { _fun00004_ip = 74; continue _fun00003 }
 32:
            entity = {};
            tangon = report.getShowResolvedFlags;
            tangon = tangon.bind(report)(oscard);
            michal = michal == tangon;
            if(michal) { _fun00004_ip = 55; continue _fun00003 }
 52:
            michal = tangon;
 55:
            entity['showResolvedFlags'] = michal;
            michal = function(argFoo) { // Original name: setShowResolvedFlags
                tangon = _closure2_slot1;
                zuuluu = tangon.setShowResolvedFlags;
                michal = _closure2_slot0;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity['setShowResolvedFlags'] = michal;
            _fun00004_ip = 98; continue _fun00003;
 74:
            michal = {};
            tangon = true;
            michal['showResolvedFlags'] = tangon;
            zuuluu = function() { // Original name: setShowResolvedFlags
                entity = undefined;
                return entity;
            };
            michal['setShowResolvedFlags'] = zuuluu;
            entity = michal;
 98:
            return entity;
        }
    };
    zuuluu['useShouldShowResolvedFlagsForChannel'] = michal;
    return entity;
})();