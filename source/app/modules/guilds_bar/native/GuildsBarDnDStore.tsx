// app/modules/guilds_bar/native/GuildsBarDnDStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    tango = tango.GuildsNodeType;
    var _closure1_slot2 = tango;
    tango = {'mode': null, 'initialX': 0, 'initialY': 0, 'absoluteX': 0, 'absoluteY': 0};
    var _closure1_slot3 = tango;
    report = -1;
    var _closure1_slot4 = report;
    report = 1;
    report = options[report];
    verify = golf.bind(entity)(report);
    oscar = verify.createWithEqualityFn;
    report = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        oscar = undefined;
        entity['dragSpecs'] = oscar;
        entity['overSpecs'] = oscar;
        entity['dropSpecs'] = oscar;
        report = _closure1_slot0;
        golf = _closure1_slot1;
        tango = 2;
        zulu = golf[tango];
        yankee = report.bind(oscar)(zulu);
        offset = yankee.makeMutable;
        zulu = 0;
        verify = {'min': 0, 'max': 0};
        verify = offset.bind(yankee)(verify);
        entity['dragRegion'] = verify;
        verify = golf[tango];
        offset = report.bind(oscar)(verify);
        verify = offset.makeMutable;
        options = _closure1_slot3;
        options = verify.bind(offset)(options);
        entity['gestureState'] = options;
        options = golf[tango];
        offset = report.bind(oscar)(options);
        verify = offset.makeMutable;
        options = false;
        options = verify.bind(offset)(options);
        entity['dragDropInProgress'] = options;
        options = golf[tango];
        offset = report.bind(oscar)(options);
        verify = offset.makeMutable;
        options = {'start': 0, 'end': 0};
        options = verify.bind(offset)(options);
        entity['listInsets'] = options;
        tango = golf[tango];
        report = report.bind(oscar)(tango);
        tango = report.makeMutable;
        tango = tango.bind(report)(zulu);
        entity['scrollPosition'] = tango;
        entity['windowSize'] = zulu;
        zulu = function(argFoo) { // Original name: setStateShallow
            _fun114158: for(var _fun114158_ip = 0; ; ) switch(_fun114158_ip) {
 0:
                yankee = argFoo;
                var _closure3_slot0 = yankee;
                zulu = _closure2_slot1;
                entity = undefined;
                offset = zulu.bind(entity)();
                var _closure3_slot1 = offset;
                options = yankee;
                for(report in options)
 37:
                {
 46:
                    zulu = report;
                    tango = offset[zulu];
                    zulu = yankee[zulu];
                    if(tango === zulu) { _fun114158_ip = 37; continue _fun114158 }
 61:
                    tango = _closure1_slot0;
                    report = _closure1_slot1;
                    zulu = 3;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.batchUpdates;
                    mike = function() {
                        zulu = _closure2_slot0;
                        mike = {};
                        report = _closure3_slot1;
                        oscar = mike;
                        tango = copyDataProperties(oscar, report);
                        report = _closure3_slot0;
                        oscar = mike;
                        entity = copyDataProperties(oscar, report);
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    mike = undefined;
                    return mike;
                }
 106:
                return entity;
            }
        };
        entity['setStateShallow'] = zulu;
        zulu = function(argFoo) { // Original name: dropStart
            _fun114160: for(var _fun114160_ip = 0; ; ) switch(_fun114160_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                zulu = _closure2_slot1;
                entity = undefined;
                zulu = zulu.bind(entity)();
                tango = zulu.dropSpecs;
                zulu = zulu.gestureState;
                var _closure3_slot1 = zulu;
                zulu = null;
                if(!(zulu == tango)) { _fun114160_ip = 129; continue _fun114160 }
 44:
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                tango = 3;
                tango = oscar[tango];
                oscar = report.bind(entity)(tango);
                report = oscar.batchUpdates;
                tango = function() {
                    zulu = _closure2_slot0;
                    mike = {};
                    entity = _closure3_slot0;
                    mike['dropSpecs'] = entity;
                    entity = undefined;
                    mike['dragSpecs'] = entity;
                    mike['overSpecs'] = entity;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                tango = report.bind(oscar)(tango);
                tango = global;
                oscar = tango.clearTimeout;
                report = _closure1_slot4;
                report = oscar.bind(entity)(report);
                report = tango.setTimeout;
                tango = function() {
                    _fun114162: for(var _fun114162_ip = 0; ; ) switch(_fun114162_ip) {
 0:
                        zulu = _closure3_slot1;
                        mike = zulu.get;
                        tango = mike.bind(zulu)();
                        zulu = tango.mode;
                        mike = 'drag';
                        if(!(mike === zulu)) { _fun114162_ip = 66; continue _fun114162 }
 29:
                        zulu = _closure3_slot1;
                        mike = zulu.set;
                        entity = {};
                        golf = entity;
                        oscar = tango;
                        tango = copyDataProperties(golf, oscar);
                        report = null;
                        tango = 'mode';
                        entity[tango] = report;
                        entity = mike.bind(zulu)(entity);
 66:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = 0;
                mike = report.bind(entity)(tango, mike);
                _closure1_slot4 = mike;
                return entity;
 129:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                options = 'GuildsBarDnDStore.dropStart: you cannot start a drop while an existing drop is in progress';
                verify = mike;
                entity = new verify[zulu](options, golf);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        entity['dropStart'] = zulu;
        mike = function() { // Original name: dropComplete
            _fun114163: for(var _fun114163_ip = 0; ; ) switch(_fun114163_ip) {
 0:
                mike = _closure2_slot1;
                entity = undefined;
                mike = mike.bind(entity)();
                tango = mike.gestureState;
                report = mike.dragDropInProgress;
                zulu = mike.dropSpecs;
                mike = mike.dragSpecs;
                oscar = null;
                if(!(oscar != zulu)) { _fun114163_ip = 175; continue _fun114163 }
 46:
                options = _closure1_slot0;
                verify = _closure1_slot1;
                golf = 3;
                golf = verify[golf];
                verify = options.bind(entity)(golf);
                options = verify.batchUpdates;
                golf = function() {
                    zulu = _closure2_slot0;
                    mike = {};
                    entity = undefined;
                    mike['dropSpecs'] = entity;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                golf = options.bind(verify)(golf);
                golf = global;
                golf = golf.clearTimeout;
                zulu = _closure1_slot4;
                zulu = golf.bind(entity)(zulu);
                if(!(oscar == mike)) { _fun114163_ip = 122; continue _fun114163 }
 110:
                zulu = report.set;
                mike = false;
                mike = zulu.bind(report)(mike);
 122:
                mike = tango.get;
                report = mike.bind(tango)();
                zulu = report.mode;
                mike = 'drag';
                if(!(mike === zulu)) { _fun114163_ip = 175; continue _fun114163 }
 144:
                zulu = tango.set;
                mike = {};
                yankee = mike;
                offset = report;
                report = copyDataProperties(yankee, offset);
                report = 'mode';
                mike[report] = oscar;
                mike = zulu.bind(tango)(mike);
 175:
                return entity;
            }
        };
        entity['dropComplete'] = mike;
        return entity;
    };
    report = oscar.bind(verify)(report);
    var _closure1_slot5 = report;
    oscar = 5;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guilds_bar/native/GuildsBarDnDStore.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['INITIAL_GESTURE_STATE'] = tango;
    tango = function(argFoo, argBar) { // Original name: useItemDragState
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        tango = _closure1_slot5;
        report = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 4;
        mike = zulu[mike];
        zulu = undefined;
        mike = report.bind(zulu)(mike);
        mike = mike.shallow;
        entity = function(argFoo) {
            _fun114166: for(var _fun114166_ip = 0; ; ) switch(_fun114166_ip) {
 0:
                entity = argFoo;
                options = entity.dragSpecs;
                yankee = entity.overSpecs;
                verify = entity.dropSpecs;
                mike = entity.dragDropInProgress;
                report = null;
                if(!(report == options)) { _fun114166_ip = 40; continue _fun114166 }
 33:
                if(!(report != verify)) { _fun114166_ip = 364; continue _fun114166 }
 40:
                entity = _closure2_slot1;
                zulu = !entity;
                if(!zulu) { _fun114166_ip = 137; continue _fun114166 }
 53:
                entity = report == options;
                tango = undefined;
                if(entity) { _fun114166_ip = 73; continue _fun114166 }
 62:
                entity = options.node;
                tango = entity.id;
 73:
                entity = _closure2_slot0;
                entity = tango === entity;
                if(!entity) { _fun114166_ip = 103; continue _fun114166 }
 84:
                offset = report == yankee;
                tango = undefined;
                if(offset) { _fun114166_ip = 99; continue _fun114166 }
 93:
                tango = yankee.node;
 99:
                entity = report != tango;
 103:
                if(entity) { _fun114166_ip = 134; continue _fun114166 }
 106:
                tango = report == verify;
                golf = undefined;
                if(tango) { _fun114166_ip = 126; continue _fun114166 }
 115:
                tango = verify.dragNode;
                golf = tango.id;
 126:
                tango = _closure2_slot0;
                entity = golf === tango;
 134:
                zulu = entity;
 137:
                entity = _closure2_slot1;
                tango = !entity;
                if(!tango) { _fun114166_ip = 209; continue _fun114166 }
 147:
                entity = report == yankee;
                offset = undefined;
                if(entity) { _fun114166_ip = 167; continue _fun114166 }
 156:
                entity = yankee.node;
                offset = entity.id;
 167:
                entity = _closure2_slot0;
                entity = offset === entity;
                if(entity) { _fun114166_ip = 206; continue _fun114166 }
 178:
                offset = report == verify;
                golf = undefined;
                if(offset) { _fun114166_ip = 198; continue _fun114166 }
 187:
                offset = verify.overNode;
                golf = offset.id;
 198:
                oscar = _closure2_slot0;
                entity = golf === oscar;
 206:
                tango = entity;
 209:
                entity = {};
                entity['isDragTarget'] = zulu;
                if(zulu) { _fun114166_ip = 224; continue _fun114166 }
 219:
                zulu = undefined;
                if(!tango) { _fun114166_ip = 244; continue _fun114166 }
 224:
                golf = report == verify;
                oscar = 'dropping';
                if(!golf) { _fun114166_ip = 241; continue _fun114166 }
 237:
                oscar = 'dragging';
 241:
                zulu = oscar;
 244:
                entity['dragState'] = zulu;
                zulu = undefined;
                if(!tango) { _fun114166_ip = 293; continue _fun114166 }
 254:
                offset = report == verify;
                oscar = undefined;
                if(offset) { _fun114166_ip = 269; continue _fun114166 }
 263:
                oscar = verify.overState;
 269:
                if(!(report == oscar)) { _fun114166_ip = 290; continue _fun114166 }
 273:
                romeo = report == yankee;
                offset = undefined;
                if(romeo) { _fun114166_ip = 287; continue _fun114166 }
 282:
                offset = yankee.state;
 287:
                oscar = offset;
 290:
                zulu = oscar;
 293:
                entity['overState'] = zulu;
                zulu = 0;
                if(!tango) { _fun114166_ip = 352; continue _fun114166 }
 303:
                offset = report == verify;
                tango = undefined;
                if(offset) { _fun114166_ip = 318; continue _fun114166 }
 312:
                tango = verify.itemSize;
 318:
                if(!(report == tango)) { _fun114166_ip = 340; continue _fun114166 }
 322:
                verify = report == options;
                golf = undefined;
                if(verify) { _fun114166_ip = 337; continue _fun114166 }
 331:
                golf = options.itemSize;
 337:
                tango = golf;
 340:
                report = report != tango;
                zulu = 0;
                if(!report) { _fun114166_ip = 352; continue _fun114166 }
 349:
                zulu = tango;
 352:
                entity['itemSize'] = zulu;
                entity['dragDropInProgress'] = mike;
                return entity;
 364:
                entity = {};
                zulu = false;
                entity['isDragTarget'] = zulu;
                zulu = undefined;
                entity['dragState'] = zulu;
                entity['overState'] = zulu;
                zulu = 0;
                entity['itemSize'] = zulu;
                entity['dragDropInProgress'] = mike;
                return entity;
            }
        };
        entity = tango.bind(zulu)(entity, mike);
        return entity;
    };
    zulu['useItemDragState'] = tango;
    mike = function(argFoo) { // Original name: useFolderBGHeightOffset
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot5;
        mike = undefined;
        entity = function(argFoo) {
            _fun114168: for(var _fun114168_ip = 0; ; ) switch(_fun114168_ip) {
 0:
                entity = argFoo;
                tango = entity.dragSpecs;
                report = entity.overSpecs;
                entity = entity.dropSpecs;
                mike = null;
                zulu = mike != entity;
                entity = 0;
                if(zulu) { _fun114168_ip = 275; continue _fun114168 }
 35:
                zulu = mike == report;
                entity = 0;
                if(zulu) { _fun114168_ip = 275; continue _fun114168 }
 47:
                mike = mike == tango;
                entity = 0;
                if(mike) { _fun114168_ip = 275; continue _fun114168 }
 59:
                zulu = report.state;
                mike = 'self';
                entity = 0;
                if(!(mike !== zulu)) { _fun114168_ip = 275; continue _fun114168 }
 77:
                mike = tango.node;
                zulu = mike.type;
                mike = _closure1_slot2;
                mike = mike.GUILD;
                entity = 0;
                if(!(zulu === mike)) { _fun114168_ip = 275; continue _fun114168 }
 110:
                mike = tango.node;
                zulu = mike.parentId;
                mike = _closure2_slot0;
                if(!(zulu !== mike)) { _fun114168_ip = 197; continue _fun114168 }
 133:
                mike = report.node;
                zulu = mike.parentId;
                mike = _closure2_slot0;
                if(!(zulu !== mike)) { _fun114168_ip = 189; continue _fun114168 }
 153:
                mike = report.node;
                options = mike.id;
                zulu = _closure2_slot0;
                mike = 0;
                if(!(options === zulu)) { _fun114168_ip = 195; continue _fun114168 }
 174:
                options = report.state;
                zulu = 'after';
                mike = 0;
                if(!(zulu === options)) { _fun114168_ip = 195; continue _fun114168 }
 189:
                mike = tango.itemSize;
 195:
                _fun114168_ip = 272; continue _fun114168;
 197:
                zulu = report.node;
                verify = zulu.parentId;
                options = _closure2_slot0;
                zulu = 0;
                if(!(verify !== options)) { _fun114168_ip = 269; continue _fun114168 }
 219:
                options = report.node;
                options = options.id;
                oscar = _closure2_slot0;
                if(!(options === oscar)) { _fun114168_ip = 253; continue _fun114168 }
 238:
                oscar = report.state;
                report = 'after';
                zulu = 0;
                if(!(report !== oscar)) { _fun114168_ip = 269; continue _fun114168 }
 253:
                report = tango.itemSize;
                tango = -1;
                zulu = tango * report;
 269:
                mike = zulu;
 272:
                entity = mike;
 275:
                return entity;
            }
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useFolderBGHeightOffset'] = mike;
    return entity;
})();