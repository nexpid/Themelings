// app/modules/expression_picker/ExpressionPickerStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    michal = global;
    golfie = michal.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    report = report.ExpressionPickerViewType;
    var _closure1_slot3 = report;
    oscard = michal.Object;
    report = oscard.freeze;
    michal = {'activeView': null, 'lastActiveView': null, 'activeViewType': null, 'searchQuery': '', 'isSearchSuggestion': false, 'pickerId': null, 'isNitroLockedSectionVisible': false, 'areOnlyNitroLockedSectionsVisible': false};
    golfie = 1;
    offset = verify[golfie];
    golfie = argBaz;
    offset = golfie.bind(entity)(offset);
    golfie = 'uid_';
    golfie = offset.bind(entity)(golfie);
    michal['pickerId'] = golfie;
    michal = report.bind(oscard)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = verify[michal];
    report = option.bind(entity)(michal);
    michal = report.createWithEqualityFn;
    report = michal.bind(report)();
    michal = 3;
    michal = verify[michal];
    offset = option.bind(entity)(michal);
    golfie = offset.persist;
    oscard = {};
    michal = 'expression-picker-last-active-view';
    oscard['name'] = michal;
    michal = function(argFoo) { // Original name: partialize
        entity = {};
        michal = argFoo;
        michal = michal.lastActiveView;
        entity['lastActiveView'] = michal;
        return entity;
    };
    oscard['partialize'] = michal;
    michal = function() {
        entity = _closure1_slot4;
        return entity;
    };
    michal = golfie.bind(offset)(michal, oscard);
    michal = report.bind(entity)(michal);
    var _closure1_slot5 = michal;
    oscard = function(argFoo, argBar) { // Original name: openExpressionPicker
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            michal = argBar;
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.GIF;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 68; continue _fun00001 }
 33:
            tangon = _closure1_slot2;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00002_ip = 134; continue _fun00001 }
 43:
            tangon = global;
            oscard = tangon.clearTimeout;
            report = _closure1_slot2;
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            var _closure1_slot2 = zuuluu;
            _fun00002_ip = 134; continue _fun00001;
 68:
            tangon = _closure1_slot2;
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00002_ip = 205; continue _fun00001 }
 81:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            report = undefined;
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.gifPickerDelayExperiment;
            zuuluu = 'gif-picker';
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.enabled;
            tangon = tangon.delayMs;
            if(zuuluu) { _fun00002_ip = 176; continue _fun00001 }
 134:
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 5;
            oscard = oscard[zuuluu];
            zuuluu = undefined;
            option = golfie.bind(zuuluu)(oscard);
            golfie = option.batchUpdates;
            oscard = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.setState;
                entity = {};
                report = _closure2_slot0;
                entity['activeView'] = report;
                tangon = _closure2_slot1;
                entity['activeViewType'] = tangon;
                tangon = zuuluu.getState;
                tangon = tangon.bind(zuuluu)();
                tangon = tangon.activeView;
                entity['lastActiveView'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = golfie.bind(option)(oscard);
            return zuuluu;
 176:
            zuuluu = global;
            zuuluu = zuuluu.setTimeout;
            entity = function() {
                michal = null;
                _closure1_slot2 = michal;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.batchUpdates;
                michal = function() {
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.setState;
                    entity = {};
                    report = _closure2_slot0;
                    entity['activeView'] = report;
                    tangon = _closure2_slot1;
                    entity['activeViewType'] = tangon;
                    tangon = zuuluu.getState;
                    tangon = tangon.bind(zuuluu)();
                    tangon = tangon.activeView;
                    entity['lastActiveView'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = zuuluu.bind(report)(entity, tangon);
            _closure1_slot2 = entity;
            entity = undefined;
            return entity;
 205:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot6 = oscard;
    report = function(argFoo) { // Original name: closeExpressionPicker
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            tangon = _closure1_slot5;
            entity = tangon.getState;
            tangon = entity.bind(tangon)();
            var _closure2_slot0 = tangon;
            entity = undefined;
            report = entity !== golfie;
            if(!report) { _fun00004_ip = 45; continue _fun00003 }
 35:
            oscard = tangon.activeViewType;
            report = golfie !== oscard;
 45:
            if(report) { _fun00004_ip = 98; continue _fun00003 }
 48:
            report = tangon.activeView;
            tangon = null;
            if(!(tangon !== report)) { _fun00004_ip = 98; continue _fun00003 }
 60:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.setState;
                entity = {'activeView': null, 'activeViewType': null};
                tangon = _closure2_slot0;
                tangon = tangon.activeView;
                entity['lastActiveView'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 98:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    golfie = 6;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/expression_picker/ExpressionPickerStore.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['openExpressionPicker'] = oscard;
    zuuluu['closeExpressionPicker'] = report;
    report = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot5;
            michal = zuuluu.getState;
            zuuluu = michal.bind(zuuluu)();
            tangon = zuuluu.activeView;
            michal = null;
            if(!(michal != tangon)) { _fun00006_ip = 41; continue _fun00005 }
 29:
            report = _closure1_slot7;
            tangon = undefined;
            tangon = report.bind(tangon)();
            _fun00006_ip = 76; continue _fun00005;
 41:
            tangon = _closure1_slot6;
            zuuluu = zuuluu.lastActiveView;
            if(!(michal == zuuluu)) { _fun00006_ip = 65; continue _fun00005 }
 55:
            entity = _closure1_slot3;
            zuuluu = entity.EMOJI;
 65:
            michal = undefined;
            entity = argFoo;
            entity = tangon.bind(michal)(zuuluu, entity);
 76:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['toggleMultiExpressionPicker'] = report;
    report = function(argFoo, argBar) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot5;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            michal = michal.activeView;
            if(!(michal !== report)) { _fun00008_ip = 47; continue _fun00007 }
 30:
            tangon = _closure1_slot6;
            zuuluu = undefined;
            michal = argBar;
            michal = tangon.bind(zuuluu)(report, michal);
            _fun00008_ip = 57; continue _fun00007;
 47:
            michal = _closure1_slot7;
            entity = undefined;
            entity = michal.bind(entity)();
 57:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['toggleExpressionPicker'] = report;
    report = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot5;
            michal = zuuluu.setState;
            entity = {};
            tangon = _closure2_slot0;
            entity['activeView'] = tangon;
            tangon = zuuluu.getState;
            tangon = tangon.bind(zuuluu)();
            tangon = tangon.activeView;
            entity['lastActiveView'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setExpressionPickerView'] = report;
    tangon = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = arguments[1];
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00010_ip = 20; continue _fun00009 }
 18:
            zuuluu = false;
 20:
            var _closure2_slot1 = zuuluu;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.setState;
                entity = {};
                report = _closure2_slot0;
                entity['searchQuery'] = report;
                tangon = _closure2_slot1;
                entity['isSearchSuggestion'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['setSearchQuery'] = tangon;
    zuuluu['useExpressionPickerStore'] = michal;
    return entity;
})();