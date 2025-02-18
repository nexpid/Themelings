// app/modules/search_v2/native/components/tabs/hooks/useSearchSegmentedControlState.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = {};
    golfie = 'function useSearchSegmentedControlStateTsx1(){const{defaultIndex}=this.__closure;return defaultIndex.get();}';
    tangon['code'] = golfie;
    var _closure1_slot4 = tangon;
    tangon = {};
    golfie = 'function useSearchSegmentedControlStateTsx2(value){const{activeIndex,runOnJS,onDefaultIndexChange}=this.__closure;if(value!==activeIndex.get()){runOnJS(onDefaultIndexChange)(value);}}';
    tangon['code'] = golfie;
    var _closure1_slot5 = tangon;
    tangon = {};
    golfie = 'function useSearchSegmentedControlStateTsx3(){const{activeIndex}=this.__closure;return activeIndex.get();}';
    tangon['code'] = golfie;
    var _closure1_slot6 = tangon;
    tangon = {};
    golfie = 'function useSearchSegmentedControlStateTsx4(index){const{runOnJS,handleSetActiveIndex}=this.__closure;return runOnJS(handleSetActiveIndex)(index);}';
    tangon['code'] = golfie;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/hooks/useSearchSegmentedControlState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSearchSegmentedControlState
        zuuluu = argFoo;
        option = zuuluu.items;
        var _closure2_slot0 = option;
        michal = zuuluu.onSetActiveIndex;
        var _closure2_slot1 = michal;
        golfie = zuuluu.onPageChange;
        backup = _closure1_slot0;
        kiloes = _closure1_slot2;
        romeon = 1;
        zuuluu = kiloes[romeon];
        foxtra = undefined;
        report = backup.bind(foxtra)(zuuluu);
        tangon = report.useSharedValue;
        zuuluu = 0;
        output = tangon.bind(report)(zuuluu);
        var _closure2_slot2 = output;
        zuuluu = kiloes[romeon];
        report = backup.bind(foxtra)(zuuluu);
        tangon = report.useSharedValue;
        zuuluu = null;
        report = tangon.bind(report)(zuuluu);
        var _closure2_slot3 = report;
        tangon = _closure1_slot1;
        zuuluu = 2;
        zuuluu = kiloes[zuuluu];
        zuuluu = tangon.bind(foxtra)(zuuluu);
        zuuluu = zuuluu.bind(foxtra)();
        offset = zuuluu.width;
        zuuluu = 3;
        zuuluu = kiloes[zuuluu];
        oscard = backup.bind(foxtra)(zuuluu);
        tangon = oscard.useSegmentedControlState;
        zuuluu = {};
        zuuluu['items'] = option;
        yankee = output.get;
        yankee = yankee.bind(output)();
        zuuluu['defaultIndex'] = yankee;
        zuuluu['pageWidth'] = offset;
        zuuluu['onPageChange'] = golfie;
        oscard = tangon.bind(oscard)(zuuluu);
        var _closure2_slot4 = oscard;
        tangon = _closure1_slot3;
        offset = tangon.useLayoutEffect;
        golfie = new Array(3);
        golfie[0] = option;
        golfie[1] = output;
        golfie[2] = report;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure2_slot0;
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                tangon = _closure2_slot3;
                zuuluu = tangon.get;
                tangon = zuuluu.bind(tangon)();
                zuuluu = null;
                zuuluu = zuuluu != tangon;
                option = 0;
                verify = 0;
                if(!zuuluu) { _fun00002_ip = 62; continue _fun00001 }
 52:
                zuuluu = michal.indexOf;
                verify = zuuluu.bind(michal)(tangon);
 62:
                oscard = global;
                report = oscard.Math;
                tangon = report.min;
                golfie = oscard.Math;
                zuuluu = golfie.max;
                zuuluu = zuuluu.bind(golfie)(option, verify);
                golfie = oscard.Math;
                oscard = golfie.max;
                verify = michal.length;
                michal = 1;
                michal = verify - michal;
                michal = oscard.bind(golfie)(option, michal);
                zuuluu = tangon.bind(report)(zuuluu, michal);
                tangon = _closure2_slot2;
                michal = tangon.get;
                michal = michal.bind(tangon)();
                if(!(zuuluu !== michal)) { _fun00002_ip = 158; continue _fun00001 }
 144:
                michal = _closure2_slot2;
                entity = michal.set;
                entity = entity.bind(michal)(zuuluu);
 158:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = offset.bind(tangon)(zuuluu, golfie);
        offset = oscard.activeIndex;
        var _closure2_slot5 = offset;
        yankee = tangon.useCallback;
        golfie = new Array(1);
        golfie[0] = oscard;
        zuuluu = function(argFoo) {
            tangon = _closure2_slot4;
            zuuluu = tangon.setActiveIndex;
            michal = argFoo;
            entity = false;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        result = yankee.bind(tangon)(zuuluu, golfie);
        var _closure2_slot6 = result;
        zuuluu = kiloes[romeon];
        sizing = backup.bind(foxtra)(zuuluu);
        yankee = sizing.useAnimatedReaction;
        golfie = function() { // Original name: I
            michal = _closure2_slot2;
            entity = michal.get;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu = {};
        zuuluu['defaultIndex'] = output;
        golfie['__closure'] = zuuluu;
        zuuluu = 11274860585991.0;
        golfie['__workletHash'] = zuuluu;
        zuuluu = _closure1_slot4;
        golfie['__initData'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: f
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                tangon = _closure2_slot5;
                michal = tangon.get;
                michal = michal.bind(tangon)();
                if(!(zuuluu !== michal)) { _fun00004_ip = 67; continue _fun00003 }
 23:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 1;
                tangon = tangon[michal];
                michal = undefined;
                report = report.bind(michal)(tangon);
                tangon = report.runOnJS;
                entity = _closure2_slot6;
                entity = tangon.bind(report)(entity);
                entity = entity.bind(michal)(zuuluu);
 67:
                entity = undefined;
                return entity;
            }
        };
        output = {};
        output['activeIndex'] = offset;
        echoed = kiloes[romeon];
        echoed = backup.bind(foxtra)(echoed);
        echoed = echoed.runOnJS;
        output['runOnJS'] = echoed;
        output['onDefaultIndexChange'] = result;
        zuuluu['__closure'] = output;
        output = 13469718094124.0;
        zuuluu['__workletHash'] = output;
        output = _closure1_slot5;
        zuuluu['__initData'] = output;
        zuuluu = yankee.bind(sizing)(golfie, zuuluu);
        golfie = tangon.useCallback;
        zuuluu = new Array(3);
        zuuluu[0] = option;
        zuuluu[1] = michal;
        zuuluu[2] = report;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = argFoo;
                tangon = zuuluu[entity];
                entity = null;
                report = entity == tangon;
                entity = undefined;
                zuuluu = undefined;
                if(report) { _fun00006_ip = 32; continue _fun00005 }
 27:
                zuuluu = tangon.id;
 32:
                report = _closure2_slot3;
                tangon = report.get;
                tangon = tangon.bind(report)();
                if(!(tangon !== zuuluu)) { _fun00006_ip = 72; continue _fun00005 }
 49:
                report = _closure2_slot3;
                tangon = report.set;
                tangon = tangon.bind(report)(zuuluu);
                michal = _closure2_slot1;
                michal = michal.bind(entity)(zuuluu);
 72:
                return entity;
            }
        };
        yankee = golfie.bind(tangon)(michal, zuuluu);
        var _closure2_slot7 = yankee;
        michal = kiloes[romeon];
        option = backup.bind(foxtra)(michal);
        golfie = option.useAnimatedReaction;
        zuuluu = function() { // Original name: k
            michal = _closure2_slot5;
            entity = michal.get;
            entity = entity.bind(michal)();
            return entity;
        };
        michal = {};
        michal['activeIndex'] = offset;
        zuuluu['__closure'] = michal;
        michal = 6835202510981.0;
        zuuluu['__workletHash'] = michal;
        michal = _closure1_slot6;
        zuuluu['__initData'] = michal;
        michal = function(argFoo) { // Original name: J
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            entity = zuuluu[entity];
            zuuluu = undefined;
            tangon = michal.bind(zuuluu)(entity);
            michal = tangon.runOnJS;
            entity = _closure2_slot7;
            michal = michal.bind(tangon)(entity);
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        offset = {};
        romeon = kiloes[romeon];
        romeon = backup.bind(foxtra)(romeon);
        romeon = romeon.runOnJS;
        offset['runOnJS'] = romeon;
        offset['handleSetActiveIndex'] = yankee;
        michal['__closure'] = offset;
        offset = 2367900681335.0;
        michal['__workletHash'] = offset;
        verify = _closure1_slot7;
        michal['__initData'] = verify;
        michal = golfie.bind(option)(zuuluu, michal);
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            entity = {};
            zuuluu = _closure2_slot4;
            entity['segmentedControlState'] = zuuluu;
            michal = _closure2_slot3;
            entity['selectedTab'] = michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useSearchSegmentedControlState'] = michal;
    return entity;
})();