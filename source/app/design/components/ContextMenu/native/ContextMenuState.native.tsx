// app/design/components/ContextMenu/native/ContextMenuState.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    verify = argBar;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    golf = 0;
    report = offset[golf];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot2 = tango;
    oscar = 1;
    tango = offset[oscar];
    options = verify.bind(entity)(tango);
    report = options.create;
    tango = function() {
        entity = {};
        mike = null;
        entity['menu'] = mike;
        return entity;
    };
    report = report.bind(options)(tango);
    var _closure1_slot3 = report;
    tango = {};
    options = 'function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){const{INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);}';
    tango['code'] = options;
    var _closure1_slot4 = tango;
    tango = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: updateContextMenuState
            _fun77390: for(var _fun77390_ip = 0; ; ) switch(_fun77390_ip) {
 0:
                romeo = argFoo;
                yankee = argBar;
                entity = argBaz;
                zulu = entity.pan;
                mike = entity.itemMeasurements;
                report = entity.activeIndex;
                entity = zulu.set;
                entity = entity.bind(zulu)(yankee);
                entity = mike.get;
                offset = entity.bind(mike)();
                entity = offset.length;
                verify = 0;
                entity = verify < entity;
                oscar = 4;
                options = 2;
                zulu = 3;
                golf = 1;
                tango = 0;
                if(!entity) { _fun77390_ip = 146; continue _fun77390 }
 74:
                entity = tango + options;
                foxtrot = offset[entity];
                entity = tango + zulu;
                kilo = offset[entity];
                entity = tango + golf;
                backup = offset[entity];
                entity = tango + verify;
                mike = offset[entity];
                entity = tango;
                if(!(yankee >= backup)) { _fun77390_ip = 133; continue _fun77390 }
 113:
                backup = backup + kilo;
                if(!(yankee <= backup)) { _fun77390_ip = 133; continue _fun77390 }
 121:
                if(!(romeo >= mike)) { _fun77390_ip = 133; continue _fun77390 }
 125:
                mike = mike + foxtrot;
                if(!(!(romeo <= mike))) { _fun77390_ip = 166; continue _fun77390 }
 133:
                tango = entity + oscar;
                mike = offset.length;
                if(tango < mike) { _fun77390_ip = 74; continue _fun77390 }
 146:
                tango = report.set;
                mike = -1;
                mike = tango.bind(report)(mike);
                mike = undefined;
                return mike;
 166:
                tango = entity / oscar;
                entity = report.get;
                entity = entity.bind(report)();
                entity = entity !== tango;
                if(!entity) { _fun77390_ip = 269; continue _fun77390 }
 186:
                mike = report.set;
                mike = mike.bind(report)(tango);
                report = _closure1_slot0;
                mike = _closure1_slot1;
                zulu = mike[zulu];
                tango = undefined;
                options = report.bind(tango)(zulu);
                golf = options.runOnJS;
                zulu = mike[oscar];
                zulu = report.bind(tango)(zulu);
                zulu = zulu.triggerHapticFeedback;
                zulu = golf.bind(options)(zulu);
                mike = mike[oscar];
                mike = report.bind(tango)(mike);
                mike = mike.HapticFeedbackTypes;
                mike = mike.IMPACT_LIGHT;
                entity = zulu.bind(tango)(mike);
 269:
                entity = undefined;
                return entity;
            }
        };
        zulu = {'INDEX_BOUNDS_WIDTH_OFFSET': 2, 'INDEX_BOUNDS_HEIGHT_OFFSET': 3, 'INDEX_BOUNDS_PAGE_Y_OFFSET': 1, 'INDEX_BOUNDS_PAGE_X_OFFSET': 0, 'INDEX_BOUNDS_OFFSET': 4};
        report = 3;
        golf = 4;
        oscar = _closure1_slot0;
        tango = _closure1_slot1;
        options = tango[report];
        report = undefined;
        options = oscar.bind(report)(options);
        options = options.runOnJS;
        zulu['runOnJS'] = options;
        options = tango[golf];
        options = oscar.bind(report)(options);
        options = options.triggerHapticFeedback;
        zulu['triggerHapticFeedback'] = options;
        tango = tango[golf];
        tango = oscar.bind(report)(tango);
        tango = tango.HapticFeedbackTypes;
        zulu['HapticFeedbackTypes'] = tango;
        entity['__closure'] = zulu;
        zulu = 10158111154044.0;
        entity['__workletHash'] = zulu;
        mike = _closure1_slot4;
        entity['__initData'] = mike;
        return entity;
    };
    tango = tango.bind(entity)();
    options = 5;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'design/components/ContextMenu/native/ContextMenuState.native.tsx';
    options = verify.bind(offset)(options);
    options = 4;
    zulu['INDEX_BOUNDS_OFFSET'] = options;
    zulu['INDEX_BOUNDS_PAGE_X_OFFSET'] = golf;
    zulu['INDEX_BOUNDS_PAGE_Y_OFFSET'] = oscar;
    oscar = 2;
    zulu['INDEX_BOUNDS_WIDTH_OFFSET'] = oscar;
    oscar = 3;
    zulu['INDEX_BOUNDS_HEIGHT_OFFSET'] = oscar;
    zulu['ContextMenuStore'] = report;
    report = function(argFoo) { // Original name: showContextMenu
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot3;
            mike = zulu.setState;
            entity = {};
            tango = _closure2_slot0;
            entity['menu'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['showContextMenu'] = report;
    report = function() { // Original name: hideContextMenu
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot3;
            mike = zulu.setState;
            entity = function(argFoo) {
                _fun77395: for(var _fun77395_ip = 0; ; ) switch(_fun77395_ip) {
 0:
                    entity = argFoo;
                    mike = entity.menu;
                    zulu = null;
                    if(!(zulu != mike)) { _fun77395_ip = 25; continue _fun77395 }
 15:
                    mike = {};
                    mike['menu'] = zulu;
                    entity = mike;
 25:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['hideContextMenu'] = report;
    report = function() { // Original name: useActiveContextMenu
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.menu;
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useActiveContextMenu'] = report;
    zulu['updateContextMenuState'] = tango;
    tango = function() { // Original name: useContextMenuState
        options = _closure1_slot0;
        verify = _closure1_slot1;
        zulu = 3;
        report = verify[zulu];
        tango = undefined;
        golf = options.bind(tango)(report);
        oscar = golf.useSharedValue;
        report = -1;
        golf = oscar.bind(golf)(report);
        var _closure2_slot0 = golf;
        oscar = verify[zulu];
        yankee = options.bind(tango)(oscar);
        offset = yankee.useSharedValue;
        oscar = new Array(0);
        oscar = offset.bind(yankee)(oscar);
        var _closure2_slot1 = oscar;
        zulu = verify[zulu];
        tango = options.bind(tango)(zulu);
        zulu = tango.useSharedValue;
        report = zulu.bind(tango)(report);
        var _closure2_slot2 = report;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            entity = {};
            zulu = _closure2_slot0;
            entity['pan'] = zulu;
            zulu = _closure2_slot1;
            entity['itemMeasurements'] = zulu;
            mike = _closure2_slot2;
            entity['activeIndex'] = mike;
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useContextMenuState'] = tango;
    mike = function(argFoo) { // Original name: resetContextMenuState
        _fun77400: for(var _fun77400_ip = 0; ; ) switch(_fun77400_ip) {
 0:
            entity = argFoo;
            report = entity.activeIndex;
            tango = entity.pan;
            zulu = entity.itemMeasurements;
            entity = report.set;
            mike = -1;
            entity = entity.bind(report)(mike);
            entity = tango.set;
            entity = entity.bind(tango)(mike);
            entity = zulu.get;
            entity = entity.bind(zulu)();
            mike = entity.length;
            entity = 0;
            if(!(mike > entity)) { _fun77400_ip = 81; continue _fun77400 }
 67:
            mike = zulu.set;
            entity = new Array(0);
            entity = mike.bind(zulu)(entity);
 81:
            entity = undefined;
            return entity;
        }
    };
    zulu['resetContextMenuState'] = mike;
    return entity;
})();