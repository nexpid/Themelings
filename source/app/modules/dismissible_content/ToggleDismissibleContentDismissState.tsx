// app/modules/dismissible_content/ToggleDismissibleContentDismissState.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 5;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/dismissible_content/ToggleDismissibleContentDismissState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: toggleDismissibleContentDismissState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot0;
            entity = _closure1_slot1;
            option = 3;
            entity = entity[option];
            tangon = undefined;
            entity = oscard.bind(tangon)(entity);
            oscard = entity.versionedDismissibleContents;
            entity = oscard.indexOf;
            entity = entity.bind(oscard)(report);
            oscard = -1;
            if(!(oscard === entity)) { _fun00002_ip = 125; continue _fun00001 }
 56:
            golfie = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[option];
            entity = golfie.bind(tangon)(entity);
            golfie = entity.timeRecurringDismissibleContents;
            entity = golfie.indexOf;
            entity = entity.bind(golfie)(report);
            if(!(oscard === entity)) { _fun00002_ip = 111; continue _fun00001 }
 93:
            oscard = function(argFoo, argBar) { // Original name: toggleSingleUseDismissibleContent
                report = argFoo;
                var _closure3_slot0 = report;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 2;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.hasBit;
                entity = argBar;
                zuuluu = zuuluu.bind(tangon)(entity, report);
                var _closure3_slot1 = zuuluu;
                entity = {};
                entity['isDismissed'] = zuuluu;
                michal = function() { // Original name: handleToggleDismissState
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure3_slot1;
                        report = _closure1_slot0;
                        tangon = _closure1_slot1;
                        entity = 1;
                        tangon = tangon[entity];
                        entity = undefined;
                        tangon = report.bind(entity)(tangon);
                        if(zuuluu) { _fun00004_ip = 52; continue _fun00003 }
 35:
                        report = tangon.addDismissedContent;
                        zuuluu = _closure3_slot0;
                        zuuluu = report.bind(tangon)(zuuluu);
                        _fun00004_ip = 67; continue _fun00003;
 52:
                        zuuluu = tangon.removeDismissedContent;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(tangon)(michal);
 67:
                        return entity;
                    }
                };
                entity['handleToggleDismissState'] = michal;
                michal = null;
                entity['recurringDismissibleContentInfo'] = michal;
                return entity;
            };
            entity = argBar;
            entity = oscard.bind(tangon)(report, entity);
            _fun00002_ip = 123; continue _fun00001;
 111:
            oscard = function(argFoo) { // Original name: toggleTimeRecurringDismissibleContent
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    entity = 0;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    tangon = tangon.bind(zuuluu)(entity);
                    entity = tangon.isTimeRecurringDismissibleContentDismissed;
                    entity = entity.bind(tangon)(report);
                    report = entity.isDismissed;
                    var _closure3_slot1 = report;
                    tangon = entity.lastDismissedAtMs;
                    entity = {};
                    entity['isDismissed'] = report;
                    michal = function() { // Original name: handleToggleDismissState
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            zuuluu = _closure3_slot1;
                            report = _closure1_slot0;
                            tangon = _closure1_slot1;
                            entity = 1;
                            tangon = tangon[entity];
                            entity = undefined;
                            tangon = report.bind(entity)(tangon);
                            if(zuuluu) { _fun00008_ip = 52; continue _fun00007 }
 35:
                            report = tangon.addTimeRecurringDismissedContent;
                            zuuluu = _closure3_slot0;
                            zuuluu = report.bind(tangon)(zuuluu);
                            _fun00008_ip = 67; continue _fun00007;
 52:
                            zuuluu = tangon.removeDismissedRecurringContent;
                            michal = _closure3_slot0;
                            michal = zuuluu.bind(tangon)(michal);
 67:
                            return entity;
                        }
                    };
                    entity['handleToggleDismissState'] = michal;
                    michal = {};
                    michal['lastDismissedVersion'] = zuuluu;
                    report = null;
                    report = report != tangon;
                    if(!report) { _fun00006_ip = 98; continue _fun00005 }
 95:
                    zuuluu = tangon;
 98:
                    michal['lastDismissedAtMs'] = zuuluu;
                    entity['recurringDismissibleContentInfo'] = michal;
                    return entity;
                }
            };
            entity = oscard.bind(tangon)(report);
 123:
            _fun00002_ip = 169; continue _fun00001;
 125:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 4;
            zuuluu = golfie[zuuluu];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.getVersionedDismissibleContentCurrentVersion;
            zuuluu = zuuluu.bind(oscard)(report);
            michal = function(argFoo, argBar) { // Original name: toggleVersionedDismissibleContent
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    entity = argBar;
                    var _closure3_slot1 = entity;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    entity = 0;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    tangon = tangon.bind(zuuluu)(entity);
                    entity = tangon.isVersionedDismissibleContentDismissed;
                    entity = entity.bind(tangon)(report);
                    tangon = entity.isDismissed;
                    var _closure3_slot2 = tangon;
                    report = entity.lastDismissedVersion;
                    entity = {};
                    entity['isDismissed'] = tangon;
                    michal = function() { // Original name: handleToggleDismissState
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zuuluu = _closure3_slot2;
                            report = _closure1_slot0;
                            tangon = _closure1_slot1;
                            entity = 1;
                            tangon = tangon[entity];
                            entity = undefined;
                            tangon = report.bind(entity)(tangon);
                            if(zuuluu) { _fun00012_ip = 57; continue _fun00011 }
 35:
                            oscard = tangon.addVersionedDismissedContent;
                            report = _closure3_slot0;
                            zuuluu = _closure3_slot1;
                            zuuluu = oscard.bind(tangon)(report, zuuluu);
                            _fun00012_ip = 72; continue _fun00011;
 57:
                            zuuluu = tangon.removeDismissedRecurringContent;
                            michal = _closure3_slot0;
                            michal = zuuluu.bind(tangon)(michal);
 72:
                            return entity;
                        }
                    };
                    entity['handleToggleDismissState'] = michal;
                    michal = {};
                    tangon = null;
                    oscard = tangon != report;
                    tangon = undefined;
                    if(!oscard) { _fun00010_ip = 102; continue _fun00009 }
 99:
                    tangon = report;
 102:
                    michal['lastDismissedVersion'] = tangon;
                    michal['lastDismissedAtMs'] = zuuluu;
                    entity['recurringDismissibleContentInfo'] = michal;
                    return entity;
                }
            };
            entity = michal.bind(tangon)(report, zuuluu);
 169:
            return entity;
        }
    };
    zuuluu['toggleDismissibleContentDismissState'] = michal;
    return entity;
})();