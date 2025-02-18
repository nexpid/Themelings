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
    var _closure1_slot2 = report;
    oscard = michal.Object;
    report = oscard.freeze;
    michal = {'activeView': null, 'lastActiveView': null, 'activeViewType': null, 'searchQuery': '', 'isSearchSuggestion': false};
    golfie = 1;
    offset = verify[golfie];
    golfie = argBaz;
    offset = golfie.bind(entity)(offset);
    golfie = 'uid_';
    golfie = offset.bind(entity)(golfie);
    michal['pickerId'] = golfie;
    michal = report.bind(oscard)(michal);
    var _closure1_slot3 = michal;
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
        entity = _closure1_slot3;
        return entity;
    };
    michal = golfie.bind(offset)(michal, oscard);
    michal = report.bind(entity)(michal);
    var _closure1_slot4 = michal;
    oscard = function(argFoo, argBar) { // Original name: openExpressionPicker
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
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
    var _closure1_slot5 = oscard;
    report = function(argFoo) { // Original name: closeExpressionPicker
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            tangon = _closure1_slot4;
            entity = tangon.getState;
            tangon = entity.bind(tangon)();
            var _closure2_slot0 = tangon;
            entity = undefined;
            report = entity !== golfie;
            if(!report) { _fun00002_ip = 45; continue _fun00001 }
 35:
            oscard = tangon.activeViewType;
            report = golfie !== oscard;
 45:
            if(report) { _fun00002_ip = 98; continue _fun00001 }
 48:
            report = tangon.activeView;
            tangon = null;
            if(!(tangon !== report)) { _fun00002_ip = 98; continue _fun00001 }
 60:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot4;
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
    var _closure1_slot6 = report;
    golfie = 5;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/expression_picker/ExpressionPickerStore.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['openExpressionPicker'] = oscard;
    zuuluu['closeExpressionPicker'] = report;
    report = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.getState;
            zuuluu = michal.bind(zuuluu)();
            tangon = zuuluu.activeView;
            michal = null;
            if(!(michal != tangon)) { _fun00004_ip = 41; continue _fun00003 }
 29:
            report = _closure1_slot6;
            tangon = undefined;
            tangon = report.bind(tangon)();
            _fun00004_ip = 76; continue _fun00003;
 41:
            tangon = _closure1_slot5;
            zuuluu = zuuluu.lastActiveView;
            if(!(michal == zuuluu)) { _fun00004_ip = 65; continue _fun00003 }
 55:
            entity = _closure1_slot2;
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
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot4;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            michal = michal.activeView;
            if(!(michal !== report)) { _fun00006_ip = 47; continue _fun00005 }
 30:
            tangon = _closure1_slot5;
            zuuluu = undefined;
            michal = argBar;
            michal = tangon.bind(zuuluu)(report, michal);
            _fun00006_ip = 57; continue _fun00005;
 47:
            michal = _closure1_slot6;
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
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
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
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = arguments[1];
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            zuuluu = false;
 20:
            var _closure2_slot1 = zuuluu;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot4;
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