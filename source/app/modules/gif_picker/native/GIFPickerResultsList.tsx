// app/modules/gif_picker/native/GIFPickerResultsList.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    options = oscar[golf];
    golf = argCorge;
    golf = golf.bind(entity)(options);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot5 = golf;
    options = {};
    golf = 20;
    options['length'] = golf;
    verify = tango.Array;
    golf = verify.from;
    offset = golf.bind(verify)(options);
    verify = offset.map;
    golf = function() {
        entity = undefined;
        return entity;
    };
    golf = verify.bind(offset)(golf);
    var _closure1_slot6 = golf;
    golf = tango.Array;
    tango = golf.from;
    options = tango.bind(golf)(options);
    golf = options.map;
    tango = function() {
        entity = {};
        mike = 100;
        entity['width'] = mike;
        mike = global;
        tango = mike.Math;
        zulu = tango.floor;
        report = mike.Math;
        mike = report.random;
        report = mike.bind(report)();
        mike = 91;
        mike = mike * report;
        zulu = zulu.bind(tango)(mike);
        mike = 90;
        mike = zulu + mike;
        entity['height'] = mike;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gif_picker/native/GIFPickerResultsList.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        _fun84865: for(var _fun84865_ip = 0; ; ) switch(_fun84865_ip) {
 0:
            tango = argFoo;
            verify = tango.columns;
            var _closure2_slot0 = verify;
            report = tango.columnWidth;
            var _closure2_slot1 = report;
            foxtrot = tango.resultItems;
            zulu = tango.onPressGIF;
            var _closure2_slot2 = zulu;
            mike = tango.inActionSheet;
            options = tango.ListFooterComponent;
            oscar = tango.loading;
            tango = undefined;
            var _closure2_slot3 = tango;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = 3;
            golf = yankee[golf];
            offset = offset.bind(tango)(golf);
            golf = {};
            yankee = false;
            golf['hasCategories'] = yankee;
            golf = offset.bind(tango)(golf);
            kilo = golf.safeAreaBottomKeyboardAware;
            if(!oscar) { _fun84865_ip = 115; continue _fun84865 }
 111:
            foxtrot = _closure1_slot6;
 115:
            backup = _closure1_slot4;
            golf = backup.useCallback;
            oscar = new Array(1);
            oscar[0] = report;
            report = function(argFoo, argBar) {
                entity = {};
                zulu = _closure2_slot1;
                entity['width'] = zulu;
                tango = argFoo;
                mike = argBar;
                mike = tango / mike;
                mike = zulu / mike;
                entity['height'] = mike;
                return entity;
            };
            sizing = golf.bind(backup)(report, oscar);
            _closure2_slot3 = sizing;
            golf = backup.useCallback;
            oscar = function(argFoo, argBar) {
                _fun84867: for(var _fun84867_ip = 0; ; ) switch(_fun84867_ip) {
 0:
                    tango = argFoo;
                    zulu = argBar;
                    mike = null;
                    report = mike == tango;
                    entity = undefined;
                    if(report) { _fun84867_ip = 23; continue _fun84867 }
 17:
                    entity = tango.src;
 23:
                    if(!(mike == entity)) { _fun84867_ip = 36; continue _fun84867 }
 27:
                    mike = zulu.toString;
                    entity = mike.bind(zulu)();
 36:
                    return entity;
                }
            };
            report = new Array(0);
            offset = golf.bind(backup)(oscar, report);
            report = function() { // Original name: useViewedItemIndexes
                report = _closure1_slot4;
                tango = report.useState;
                zulu = function() {
                    entity = global;
                    entity = entity.Set;
                    mike = entity.prototype;
                    mike = Object.create(mike, {constructor: {value: entity}});
                    zulu = mike;
                    entity = new zulu[entity](mike);
                    entity = entity instanceof Object ? entity : mike;
                    return entity;
                };
                oscar = tango.bind(report)(zulu);
                tango = _closure1_slot3;
                zulu = undefined;
                entity = 2;
                tango = tango.bind(zulu)(oscar, entity);
                entity = 0;
                zulu = tango[entity];
                entity = 1;
                entity = tango[entity];
                var _closure3_slot0 = entity;
                entity = {};
                entity['viewedItemIndexes'] = zulu;
                tango = report.useCallback;
                zulu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.changed;
                    var _closure4_slot0 = entity;
                    zulu = _closure3_slot0;
                    entity = undefined;
                    mike = function(argFoo) {
                        entity = global;
                        tango = entity.Set;
                        entity = tango.prototype;
                        zulu = Object.create(entity, {constructor: {value: tango}});
                        report = argFoo;
                        oscar = zulu;
                        entity = new oscar[tango](report, tango);
                        entity = entity instanceof Object ? entity : zulu;
                        var _closure5_slot0 = entity;
                        tango = _closure4_slot0;
                        zulu = tango.forEach;
                        mike = function(argFoo) {
                            _fun84872: for(var _fun84872_ip = 0; ; ) switch(_fun84872_ip) {
 0:
                                entity = argFoo;
                                zulu = entity.index;
                                entity = entity.isViewable;
                                mike = null;
                                if(!(mike !== zulu)) { _fun84872_ip = 52; continue _fun84872 }
 20:
                                mike = _closure5_slot0;
                                if(entity) { _fun84872_ip = 42; continue _fun84872 }
 30:
                                entity = mike.delete;
                                entity = entity.bind(mike)(zulu);
                                _fun84872_ip = 52; continue _fun84872;
 42:
                                entity = mike.add;
                                entity = entity.bind(mike)(zulu);
 52:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = new Array(0);
                mike = tango.bind(report)(zulu, mike);
                entity['onViewableItemsChanged'] = mike;
                return entity;
            };
            report = report.bind(tango)();
            yankee = report.viewedItemIndexes;
            golf = report.onViewableItemsChanged;
            oscar = backup.useCallback;
            report = new Array(3);
            report[0] = verify;
            report[1] = zulu;
            report[2] = sizing;
            zulu = function(argFoo) {
                _fun84873: for(var _fun84873_ip = 0; ; ) switch(_fun84873_ip) {
 0:
                    entity = argFoo;
                    verify = entity.item;
                    zulu = entity.index;
                    report = entity.columnIndex;
                    mike = entity.extraData;
                    entity = null;
                    if(!(entity != verify)) { _fun84873_ip = 216; continue _fun84873 }
 34:
                    oscar = _closure2_slot3;
                    tango = verify.width;
                    entity = verify.height;
                    golf = undefined;
                    entity = oscar.bind(golf)(tango, entity);
                    yankee = entity.width;
                    offset = entity.height;
                    entity = mike.has;
                    entity = entity.bind(mike)(zulu);
                    oscar = _closure1_slot5;
                    if(entity) { _fun84873_ip = 147; continue _fun84873 }
 89:
                    tango = _closure1_slot0;
                    romeo = _closure1_slot2;
                    entity = 4;
                    entity = romeo[entity];
                    entity = tango.bind(golf)(entity);
                    tango = entity.GIFPickerItemPlaceholder;
                    entity = {};
                    entity['width'] = yankee;
                    entity['height'] = offset;
                    romeo = _closure2_slot0;
                    entity['columns'] = romeo;
                    entity['columnIndex'] = report;
                    entity = oscar.bind(golf)(tango, entity);
                    _fun84873_ip = 214; continue _fun84873;
 147:
                    tango = _closure1_slot1;
                    romeo = _closure1_slot2;
                    mike = 4;
                    mike = romeo[mike];
                    tango = tango.bind(golf)(mike);
                    mike = {};
                    mike['width'] = yankee;
                    mike['height'] = offset;
                    mike['index'] = zulu;
                    offset = _closure2_slot0;
                    mike['columns'] = offset;
                    mike['columnIndex'] = report;
                    mike['item'] = verify;
                    options = _closure2_slot2;
                    mike['onPressGIF'] = options;
                    entity = oscar.bind(golf)(tango, mike);
 214:
                    return entity;
 216:
                    mike = _closure1_slot7;
                    mike = mike[zulu];
                    golf = mike.width;
                    zulu = mike.height;
                    mike = _closure2_slot3;
                    tango = undefined;
                    mike = mike.bind(tango)(golf, zulu);
                    options = mike.width;
                    golf = mike.height;
                    zulu = _closure1_slot5;
                    mike = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 4;
                    entity = verify[entity];
                    entity = mike.bind(tango)(entity);
                    mike = entity.GIFPickerItemPlaceholder;
                    entity = {};
                    entity['width'] = options;
                    entity['height'] = golf;
                    oscar = _closure2_slot0;
                    entity['columns'] = oscar;
                    entity['columnIndex'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            report = oscar.bind(backup)(zulu, report);
            oscar = backup.useCallback;
            zulu = new Array(1);
            zulu[0] = sizing;
            entity = function(argFoo, argBar, argBaz) {
                _fun84874: for(var _fun84874_ip = 0; ; ) switch(_fun84874_ip) {
 0:
                    entity = argBar;
                    mike = null;
                    if(!(mike != entity)) { _fun84874_ip = 41; continue _fun84874 }
 9:
                    tango = _closure2_slot3;
                    zulu = entity.width;
                    mike = entity.height;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    mike = entity.height;
                    _fun84874_ip = 60; continue _fun84874;
 41:
                    zulu = _closure1_slot7;
                    entity = argBaz;
                    entity = zulu[entity];
                    mike = entity.height;
 60:
                    entity = argFoo;
                    entity['size'] = mike;
                    entity = undefined;
                    return entity;
                }
            };
            oscar = oscar.bind(backup)(entity, zulu);
            zulu = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 5;
            entity = backup[entity];
            entity = zulu.bind(tango)(entity);
            if(mike) { _fun84865_ip = 285; continue _fun84865 }
 277:
            zulu = entity.MasonryFlashList;
            _fun84865_ip = 291; continue _fun84865;
 285:
            zulu = entity.BottomSheetMasonryFlashList;
 291:
            mike = _closure1_slot5;
            entity = {};
            backup = {};
            backup['paddingBottom'] = kilo;
            entity['contentContainerStyle'] = backup;
            entity['data'] = foxtrot;
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            romeo = 6;
            kilo = backup[romeo];
            kilo = foxtrot.bind(tango)(kilo);
            kilo = kilo.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
            entity['drawDistance'] = kilo;
            romeo = backup[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            romeo = romeo.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
            entity['estimatedItemSize'] = romeo;
            entity['extraData'] = yankee;
            entity['keyExtractor'] = offset;
            entity['numColumns'] = verify;
            entity['ListFooterComponent'] = options;
            options = true;
            entity['optimizeItemArrangement'] = options;
            entity['onViewableItemsChanged'] = golf;
            entity['overrideItemLayout'] = oscar;
            entity['renderItem'] = report;
            entity = mike.bind(tango)(zulu, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();