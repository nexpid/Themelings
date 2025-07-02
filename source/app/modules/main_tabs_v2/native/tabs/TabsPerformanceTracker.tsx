// app/modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: trackForScreen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = argBar;
            michal = entity.uiTime;
            tangon = null;
            michal = tangon != michal;
            if(!michal) { _fun00002_ip = 31; continue _fun00001 }
 21:
            zuuluu = entity.layoutUITime;
            michal = tangon != zuuluu;
 31:
            if(!michal) { _fun00002_ip = 280; continue _fun00001 }
 37:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 3;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            golfie = report.bind(zuuluu)(tangon);
            report = golfie.track;
            zuuluu = _closure1_slot4;
            tangon = zuuluu.REDESIGN_NAV_BAR_RENDERED;
            zuuluu = {};
            zuuluu['tab'] = oscard;
            option = entity.startTime;
            zuuluu['start_time'] = option;
            option = entity.layoutEffectTime;
            zuuluu['layout_effect_time'] = option;
            option = entity.layoutUITime;
            zuuluu['layout_ui_thread_time'] = option;
            option = entity.effectTime;
            zuuluu['effect_time'] = option;
            option = entity.uiTime;
            zuuluu['ui_thread_time'] = option;
            zuuluu = report.bind(golfie)(tangon, zuuluu);
            report = _closure1_slot5;
            tangon = report.info;
            zuuluu = {};
            golfie = entity.layoutEffectTime;
            michal = entity.startTime;
            michal = golfie - michal;
            zuuluu['layoutEffectDuration'] = michal;
            golfie = entity.effectTime;
            michal = entity.startTime;
            michal = golfie - michal;
            zuuluu['effectDuration'] = michal;
            golfie = entity.layoutUITime;
            michal = entity.startTime;
            michal = golfie - michal;
            zuuluu['layoutUIDuration'] = michal;
            michal = entity.uiTime;
            entity = entity.startTime;
            entity = michal - entity;
            zuuluu['uiDuration'] = entity;
            romeon = 'First navigation to';
            offset = 'took';
            foxtra = report;
            yankee = oscard;
            verify = zuuluu;
            entity = foxtra[tangon](romeon, yankee, offset, verify, option);
 280:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'TabsPerformanceTracker';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot5 = tangon;
    tangon = {};
    var _closure1_slot6 = tangon;
    tangon = {};
    golfie = 'function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}';
    tangon['code'] = golfie;
    var _closure1_slot7 = tangon;
    tangon = {};
    golfie = 'function TabsPerformanceTrackerTsx2(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}';
    tangon['code'] = golfie;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: trackTabPressed
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot6;
            tangon = michal[zuuluu];
            michal = null;
            if(!(michal == tangon)) { _fun00004_ip = 52; continue _fun00003 }
 20:
            michal = _closure1_slot6;
            entity = {};
            tangon = global;
            report = tangon.performance;
            tangon = report.now;
            tangon = tangon.bind(report)();
            entity['startTime'] = tangon;
            michal[zuuluu] = entity;
 52:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['trackTabPressed'] = tangon;
    michal = function(argFoo) { // Original name: useTrackTabPerformance
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        oscard = tangon.useLayoutEffect;
        zuuluu = new Array(1);
        zuuluu[0] = report;
        michal = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = _closure1_slot6;
                zuuluu = _closure2_slot0;
                zuuluu = tangon[zuuluu];
                var _closure3_slot0 = zuuluu;
                golfie = null;
                if(!(golfie != zuuluu)) { _fun00006_ip = 40; continue _fun00005 }
 30:
                tangon = zuuluu.startTime;
                if(!(golfie == tangon)) { _fun00006_ip = 67; continue _fun00005 }
 40:
                oscard = _closure1_slot6;
                tangon = _closure2_slot0;
                michal = oscard[tangon];
                if(!(golfie == michal)) { _fun00006_ip = 58; continue _fun00005 }
 56:
                michal = {};
 58:
                oscard[tangon] = michal;
                _fun00006_ip = 202; continue _fun00005;
 67:
                michal = global;
                tangon = michal.performance;
                michal = tangon.now;
                michal = michal.bind(tangon)();
                zuuluu['layoutEffectTime'] = michal;
                golfie = function() { // Original name: log
                    tangon = _closure3_slot0;
                    entity = global;
                    michal = entity.performance;
                    entity = michal.now;
                    entity = entity.bind(michal)();
                    tangon['layoutUITime'] = entity;
                    zuuluu = _closure1_slot9;
                    michal = _closure2_slot0;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal, tangon);
                    return entity;
                };
                var _closure3_slot1 = golfie;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                option = 4;
                zuuluu = offset[option];
                michal = undefined;
                tangon = verify.bind(michal)(zuuluu);
                zuuluu = tangon.runOnUI;
                entity = function() { // Original name: o
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 4;
                    entity = michal[entity];
                    michal = undefined;
                    tangon = zuuluu.bind(michal)(entity);
                    zuuluu = tangon.runOnJS;
                    entity = _closure3_slot1;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.bind(michal)();
                    return entity;
                };
                oscard = {};
                option = offset[option];
                option = verify.bind(michal)(option);
                option = option.runOnJS;
                oscard['runOnJS'] = option;
                oscard['log'] = golfie;
                entity['__closure'] = oscard;
                oscard = 7114578957129.0;
                entity['__workletHash'] = oscard;
                report = _closure1_slot7;
                entity['__initData'] = report;
                entity = zuuluu.bind(tangon)(entity);
                entity = entity.bind(michal)();
 202:
                entity = undefined;
                return entity;
            }
        };
        michal = oscard.bind(tangon)(michal, zuuluu);
        zuuluu = tangon.useEffect;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure1_slot6;
                zuuluu = _closure2_slot0;
                zuuluu = tangon[zuuluu];
                var _closure3_slot0 = zuuluu;
                golfie = null;
                if(!(golfie != zuuluu)) { _fun00008_ip = 40; continue _fun00007 }
 30:
                tangon = zuuluu.startTime;
                if(!(golfie == tangon)) { _fun00008_ip = 67; continue _fun00007 }
 40:
                oscard = _closure1_slot6;
                tangon = _closure2_slot0;
                michal = oscard[tangon];
                if(!(golfie == michal)) { _fun00008_ip = 58; continue _fun00007 }
 56:
                michal = {};
 58:
                oscard[tangon] = michal;
                _fun00008_ip = 202; continue _fun00007;
 67:
                michal = global;
                tangon = michal.performance;
                michal = tangon.now;
                michal = michal.bind(tangon)();
                zuuluu['effectTime'] = michal;
                golfie = function() { // Original name: log
                    tangon = _closure3_slot0;
                    entity = global;
                    michal = entity.performance;
                    entity = michal.now;
                    entity = entity.bind(michal)();
                    tangon['uiTime'] = entity;
                    zuuluu = _closure1_slot9;
                    michal = _closure2_slot0;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal, tangon);
                    return entity;
                };
                var _closure3_slot1 = golfie;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                option = 4;
                zuuluu = offset[option];
                michal = undefined;
                tangon = verify.bind(michal)(zuuluu);
                zuuluu = tangon.runOnUI;
                entity = function() { // Original name: o
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 4;
                    entity = michal[entity];
                    michal = undefined;
                    tangon = zuuluu.bind(michal)(entity);
                    zuuluu = tangon.runOnJS;
                    entity = _closure3_slot1;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.bind(michal)();
                    return entity;
                };
                oscard = {};
                option = offset[option];
                option = verify.bind(michal)(option);
                option = option.runOnJS;
                oscard['runOnJS'] = option;
                oscard['log'] = golfie;
                entity['__closure'] = oscard;
                oscard = 331508196106.0;
                entity['__workletHash'] = oscard;
                report = _closure1_slot8;
                entity['__initData'] = report;
                entity = zuuluu.bind(tangon)(entity);
                entity = entity.bind(michal)();
 202:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = undefined;
        return entity;
    };
    zuuluu['useTrackTabPerformance'] = michal;
    return entity;
})();