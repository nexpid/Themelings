// app/modules/dismissible_content/useSelectedDismissibleContentShared.tsx
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ContentDismissActionType;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/dismissible_content/useSelectedDismissibleContentShared.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useSelectedDismissibleContentShared
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            golfie = argBar;
            zuuluu = arguments[2];
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = golfie;
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 27; continue _fun00001 }
 25:
            zuuluu = false;
 27:
            var _closure2_slot2 = entity;
            option = !zuuluu;
            if(!option) { _fun00002_ip = 43; continue _fun00001 }
 37:
            zuuluu = null;
            option = zuuluu != oscard;
 43:
            if(!option) { _fun00002_ip = 88; continue _fun00001 }
 46:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            zuuluu = tangon.has;
            zuuluu = zuuluu.bind(tangon)(oscard);
            option = !zuuluu;
 88:
            _closure2_slot2 = option;
            report = _closure1_slot2;
            tangon = report.useEffect;
            zuuluu = new Array(3);
            zuuluu[0] = option;
            zuuluu[1] = golfie;
            zuuluu[2] = oscard;
            michal = function() {
                entity = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = _closure2_slot2;
                        if(!michal) { _fun00004_ip = 74; continue _fun00003 }
 10:
                        zuuluu = _closure1_slot3;
                        report = zuuluu.lastDCDismissed;
                        zuuluu = _closure2_slot0;
                        zuuluu = report !== zuuluu;
                        if(zuuluu) { _fun00004_ip = 71; continue _fun00003 }
 34:
                        oscard = _closure1_slot0;
                        report = _closure1_slot1;
                        tangon = 4;
                        report = report[tangon];
                        tangon = undefined;
                        oscard = oscard.bind(tangon)(report);
                        report = oscard.isSingleUseGuildDismissibleContent;
                        tangon = _closure2_slot0;
                        zuuluu = report.bind(oscard)(tangon);
 71:
                        michal = zuuluu;
 74:
                        if(!michal) { _fun00004_ip = 104; continue _fun00003 }
 77:
                        tangon = _closure2_slot1;
                        entity = _closure1_slot4;
                        zuuluu = entity.AUTO_DISMISS;
                        michal = undefined;
                        entity = true;
                        entity = tangon.bind(michal)(zuuluu, entity);
 104:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['useSelectedDismissibleContentShared'] = michal;
    return entity;
})();