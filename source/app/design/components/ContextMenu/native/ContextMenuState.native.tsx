// app/design/components/ContextMenu/native/ContextMenuState.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    golfie = 0;
    report = offset[golfie];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    oscard = 1;
    tangon = offset[oscard];
    option = verify.bind(entity)(tangon);
    report = option.create;
    tangon = function() {
        entity = {};
        michal = null;
        entity['menu'] = michal;
        return entity;
    };
    report = report.bind(option)(tangon);
    var _closure1_slot3 = report;
    tangon = {};
    option = 'function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){const{INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);}';
    tangon['code'] = option;
    var _closure1_slot4 = tangon;
    tangon = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: updateContextMenuState
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                romeon = argFoo;
                yankee = argBar;
                entity = argBaz;
                zuuluu = entity.pan;
                michal = entity.itemMeasurements;
                report = entity.activeIndex;
                entity = zuuluu.set;
                entity = entity.bind(zuuluu)(yankee);
                entity = michal.get;
                offset = entity.bind(michal)();
                entity = offset.length;
                verify = 0;
                entity = verify < entity;
                oscard = 4;
                option = 2;
                zuuluu = 3;
                golfie = 1;
                tangon = 0;
                if(!entity) { _fun00002_ip = 146; continue _fun00001 }
 74:
                entity = tangon + option;
                foxtra = offset[entity];
                entity = tangon + zuuluu;
                kiloes = offset[entity];
                entity = tangon + golfie;
                backup = offset[entity];
                entity = tangon + verify;
                michal = offset[entity];
                entity = tangon;
                if(!(yankee >= backup)) { _fun00002_ip = 133; continue _fun00001 }
 113:
                backup = backup + kiloes;
                if(!(yankee <= backup)) { _fun00002_ip = 133; continue _fun00001 }
 121:
                if(!(romeon >= michal)) { _fun00002_ip = 133; continue _fun00001 }
 125:
                michal = michal + foxtra;
                if(!(!(romeon <= michal))) { _fun00002_ip = 166; continue _fun00001 }
 133:
                tangon = entity + oscard;
                michal = offset.length;
                if(tangon < michal) { _fun00002_ip = 74; continue _fun00001 }
 146:
                tangon = report.set;
                michal = -1;
                michal = tangon.bind(report)(michal);
                michal = undefined;
                return michal;
 166:
                tangon = entity / oscard;
                entity = report.get;
                entity = entity.bind(report)();
                entity = entity !== tangon;
                if(!entity) { _fun00002_ip = 269; continue _fun00001 }
 186:
                michal = report.set;
                michal = michal.bind(report)(tangon);
                report = _closure1_slot0;
                michal = _closure1_slot1;
                zuuluu = michal[zuuluu];
                tangon = undefined;
                option = report.bind(tangon)(zuuluu);
                golfie = option.runOnJS;
                zuuluu = michal[oscard];
                zuuluu = report.bind(tangon)(zuuluu);
                zuuluu = zuuluu.triggerHapticFeedback;
                zuuluu = golfie.bind(option)(zuuluu);
                michal = michal[oscard];
                michal = report.bind(tangon)(michal);
                michal = michal.HapticFeedbackTypes;
                michal = michal.IMPACT_LIGHT;
                entity = zuuluu.bind(tangon)(michal);
 269:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = {'INDEX_BOUNDS_WIDTH_OFFSET': 2, 'INDEX_BOUNDS_HEIGHT_OFFSET': 3, 'INDEX_BOUNDS_PAGE_Y_OFFSET': 1, 'INDEX_BOUNDS_PAGE_X_OFFSET': 0, 'INDEX_BOUNDS_OFFSET': 4};
        report = 3;
        golfie = 4;
        oscard = _closure1_slot0;
        tangon = _closure1_slot1;
        option = tangon[report];
        report = undefined;
        option = oscard.bind(report)(option);
        option = option.runOnJS;
        zuuluu['runOnJS'] = option;
        option = tangon[golfie];
        option = oscard.bind(report)(option);
        option = option.triggerHapticFeedback;
        zuuluu['triggerHapticFeedback'] = option;
        tangon = tangon[golfie];
        tangon = oscard.bind(report)(tangon);
        tangon = tangon.HapticFeedbackTypes;
        zuuluu['HapticFeedbackTypes'] = tangon;
        entity['__closure'] = zuuluu;
        zuuluu = 10158111154044.0;
        entity['__workletHash'] = zuuluu;
        michal = _closure1_slot4;
        entity['__initData'] = michal;
        return entity;
    };
    tangon = tangon.bind(entity)();
    option = 5;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'design/components/ContextMenu/native/ContextMenuState.native.tsx';
    option = verify.bind(offset)(option);
    option = 4;
    zuuluu['INDEX_BOUNDS_OFFSET'] = option;
    zuuluu['INDEX_BOUNDS_PAGE_X_OFFSET'] = golfie;
    zuuluu['INDEX_BOUNDS_PAGE_Y_OFFSET'] = oscard;
    oscard = 2;
    zuuluu['INDEX_BOUNDS_WIDTH_OFFSET'] = oscard;
    oscard = 3;
    zuuluu['INDEX_BOUNDS_HEIGHT_OFFSET'] = oscard;
    zuuluu['ContextMenuStore'] = report;
    report = function(argFoo) { // Original name: showContextMenu
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 2;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = {};
            tangon = _closure2_slot0;
            entity['menu'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['showContextMenu'] = report;
    report = function() { // Original name: hideContextMenu
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    michal = entity.menu;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00004_ip = 25; continue _fun00003 }
 15:
                    michal = {};
                    michal['menu'] = zuuluu;
                    entity = michal;
 25:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['hideContextMenu'] = report;
    report = function() { // Original name: useActiveContextMenu
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.menu;
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useActiveContextMenu'] = report;
    zuuluu['updateContextMenuState'] = tangon;
    tangon = function() { // Original name: useContextMenuState
        option = _closure1_slot0;
        verify = _closure1_slot1;
        zuuluu = 3;
        report = verify[zuuluu];
        tangon = undefined;
        golfie = option.bind(tangon)(report);
        oscard = golfie.useSharedValue;
        report = -1;
        golfie = oscard.bind(golfie)(report);
        var _closure2_slot0 = golfie;
        oscard = verify[zuuluu];
        yankee = option.bind(tangon)(oscard);
        offset = yankee.useSharedValue;
        oscard = new Array(0);
        oscard = offset.bind(yankee)(oscard);
        var _closure2_slot1 = oscard;
        zuuluu = verify[zuuluu];
        tangon = option.bind(tangon)(zuuluu);
        zuuluu = tangon.useSharedValue;
        report = zuuluu.bind(tangon)(report);
        var _closure2_slot2 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            entity = {};
            zuuluu = _closure2_slot0;
            entity['pan'] = zuuluu;
            zuuluu = _closure2_slot1;
            entity['itemMeasurements'] = zuuluu;
            michal = _closure2_slot2;
            entity['activeIndex'] = michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useContextMenuState'] = tangon;
    michal = function(argFoo) { // Original name: resetContextMenuState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.activeIndex;
            tangon = entity.pan;
            zuuluu = entity.itemMeasurements;
            entity = report.set;
            michal = -1;
            entity = entity.bind(report)(michal);
            entity = tangon.set;
            entity = entity.bind(tangon)(michal);
            entity = zuuluu.get;
            entity = entity.bind(zuuluu)();
            michal = entity.length;
            entity = 0;
            if(!(michal > entity)) { _fun00006_ip = 81; continue _fun00005 }
 67:
            michal = zuuluu.set;
            entity = new Array(0);
            entity = michal.bind(zuuluu)(entity);
 81:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['resetContextMenuState'] = michal;
    return entity;
})();