// app/lib/native/FastList.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    verify = argBar;
    options = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = options;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot34;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot34 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00006_ip = 46; continue _fun00005 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00006_ip = 55; continue _fun00005 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00006_ip = 345; continue _fun00005 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00006_ip = 323; continue _fun00005 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00006_ip = 283; continue _fun00005 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00006_ip = 270; continue _fun00005 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00006_ip = 163; continue _fun00005 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00006_ip = 179; continue _fun00005 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00006_ip = 234; continue _fun00005 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00006_ip = 247; continue _fun00005 }
 234:
            verify = _closure1_slot36;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00006_ip = 265; continue _fun00005;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00006_ip = 283; continue _fun00005;
 270:
            golf = _closure1_slot36;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00006_ip = 323; continue _fun00005 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00006_ip = 330; continue _fun00005 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00008_ip = 56; continue _fun00007 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00008_ip = 67; continue _fun00007;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00010_ip = 23; continue _fun00009 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00010_ip = 70; continue _fun00009 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00010_ip = 55; continue _fun00009 }
 70:
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function() { // Original name: renderDefaultEmpty
        entity = null;
        return entity;
    };
    var _closure1_slot37 = entity;
    entity = function() { // Original name: defaultRecyclerKey
        entity = undefined;
        return entity;
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: getBatchSize
        entity = global;
        zulu = entity.Math;
        mike = zulu.ceil;
        tango = _closure1_slot18;
        entity = argFoo;
        entity = entity / tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot39 = entity;
    entity = ['manualRef', 'onScroll', 'onScrollEnd', 'onLayout', 'renderHeader', 'renderFooter', 'renderSection', 'renderItem', 'renderSectionFooter', 'getRecyclerKey', 'onEndReached', 'endReachedThreshold', 'headerSize', 'footerSize', 'sectionSize', 'sectionFooterSize', 'itemSize', 'sections', 'scrollPosValue', 'batchesToRender', 'optimizeListItemRender', 'initialScrollSection', 'initialScrollItem', 'initialScrollOrientation', 'initialScrollStart', 'getAnchorIdFromIndex', 'getAnchorIndexFromId', 'EXPERIMENTAL_enableAnchorWhileScrolling', 'chunkBase', 'disableContentWrappers', 'childrenWrapper', 'stickyHeaderFooter', 'stickySectionsVariant', 'persistantKeys', 'disableRecyclingOnFullCompute', 'disableLegacyGestureHandling', 'viewabilityConfig', 'onViewableItemsChanged', 'debugLayout', 'renderAccessory', 'removeClippedSubviews', 'inActionSheet'];
    var _closure1_slot3 = entity;
    tango = global;
    golf = tango.Object;
    report = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(golf)(zulu, entity, mike);
    golf = 0;
    mike = offset[golf];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = offset[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = offset[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = offset[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    report = 4;
    mike = offset[report];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 5;
    mike = offset[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 6;
    mike = offset[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 7;
    yankee = offset[mike];
    mike = argCorge;
    mike = mike.bind(entity)(yankee);
    var _closure1_slot11 = mike;
    yankee = 8;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    romeo = yankee.PixelRatio;
    var _closure1_slot12 = romeo;
    romeo = yankee.ScrollView;
    var _closure1_slot13 = romeo;
    romeo = yankee.StyleSheet;
    yankee = yankee.findNodeHandle;
    var _closure1_slot14 = yankee;
    yankee = 9;
    romeo = offset[yankee];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.jsxs;
    var _closure1_slot15 = romeo;
    romeo = offset[yankee];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.jsx;
    var _closure1_slot16 = romeo;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.Fragment;
    var _closure1_slot17 = yankee;
    var _closure1_slot18 = report;
    report = {'top': 0, 'right': 0, 'left': 0, 'bottom': 0};
    var _closure1_slot19 = report;
    tango = tango.Map;
    report = tango.prototype;
    report = Object.create(report, {constructor: {value: tango}});
    sizing = report;
    tango = new sizing[tango](kilo);
    tango = tango instanceof Object ? tango : report;
    var _closure1_slot20 = tango;
    report = {};
    tango = 'SPACER';
    report['SPACER'] = tango;
    tango = 'HEADER';
    report['HEADER'] = tango;
    tango = 'FOOTER';
    report['FOOTER'] = tango;
    tango = 'SECTION';
    report['SECTION'] = tango;
    tango = 'ITEM';
    report['ITEM'] = tango;
    tango = 'SECTION_FOOTER';
    report['SECTION_FOOTER'] = tango;
    var _closure1_slot21 = report;
    tango = function() {
        tango = function(argFoo) { // Original name: FastListItemRecycler
            tango = argFoo;
            report = this;
            var _closure3_slot0 = report;
            oscar = _closure1_slot9;
            zulu = _closure2_slot0;
            entity = undefined;
            zulu = oscar.bind(entity)(report, zulu);
            zulu = {};
            report['_items'] = zulu;
            zulu = {};
            report['_pendingItems'] = zulu;
            zulu = tango.forEach;
            mike = function(argFoo) {
                tango = argFoo;
                report = tango.type;
                zulu = tango.recyclerKey;
                mike = _closure3_slot0;
                entity = mike._itemsForType;
                oscar = entity.bind(mike)(report);
                report = _closure1_slot8;
                entity = undefined;
                mike = 1;
                report = report.bind(entity)(oscar, mike);
                mike = 0;
                mike = report[mike];
                mike[zulu] = tango;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot0 = tango;
        zulu = _closure1_slot10;
        entity = {};
        mike = '_itemsForType';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                zulu = this;
                entity = zulu._items;
                mike = entity[report];
                tango = null;
                if(!(tango == mike)) { _fun00012_ip = 37; continue _fun00011 }
 22:
                oscar = zulu._items;
                entity = {};
                oscar[report] = entity;
                mike = entity;
 37:
                entity = new Array(2);
                entity[0] = mike;
                mike = zulu._pendingItems;
                mike = mike[report];
                if(!(tango == mike)) { _fun00012_ip = 76; continue _fun00011 }
 59:
                tango = zulu._pendingItems;
                zulu = new Array(0);
                tango[report] = zulu;
                mike = zulu;
 76:
                entity[1] = mike;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(5);
        mike[0] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                options = argFoo;
                golf = arguments[4];
                oscar = arguments[5];
                zulu = this;
                report = undefined;
                if(!(golf === report)) { _fun00014_ip = 20; continue _fun00013 }
 18:
                golf = 0;
 20:
                if(!(oscar === report)) { _fun00014_ip = 30; continue _fun00013 }
 24:
                oscar = -1;
 30:
                entity = zulu._itemsForType;
                tango = entity.bind(zulu)(options);
                mike = _closure1_slot8;
                entity = 2;
                mike = mike.bind(report)(tango, entity);
                entity = 0;
                report = mike[entity];
                entity = 1;
                tango = mike[entity];
                mike = zulu._get;
                entity = {};
                entity['type'] = options;
                options = argBar;
                entity['layoutStart'] = options;
                options = argBaz;
                entity['layoutSize'] = options;
                options = argCorge;
                entity['customKey'] = options;
                entity['section'] = golf;
                entity['item'] = oscar;
                entity['items'] = report;
                entity['pendingItems'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = '_get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                verify = entity.type;
                options = entity.layoutStart;
                golf = entity.layoutSize;
                zulu = entity.customKey;
                oscar = entity.section;
                report = entity.item;
                mike = entity.items;
                tango = entity.pendingItems;
                entity = null;
                if(!(entity == zulu)) { _fun00016_ip = 94; continue _fun00015 }
 54:
                offset = global;
                offset = offset.HermesInternal;
                romeo = offset.concat;
                result = '';
                offset = ':';
                output = verify;
                sizing = offset;
                kilo = oscar;
                backup = offset;
                foxtrot = report;
                zulu = result[romeo](output, sizing, kilo, backup, foxtrot, romeo);
 94:
                offset = mike[zulu];
                if(!(entity != offset)) { _fun00016_ip = 144; continue _fun00015 }
 102:
                entity = {};
                output = entity;
                sizing = offset;
                offset = copyDataProperties(output, sizing);
                entity['layoutStart'] = options;
                entity['layoutSize'] = golf;
                entity['section'] = oscar;
                entity['item'] = report;
                mike = delete mike[zulu];
                _fun00016_ip = 196; continue _fun00015;
 144:
                mike = {};
                mike['type'] = verify;
                verify = -1;
                mike['key'] = verify;
                mike['layoutStart'] = options;
                mike['layoutSize'] = golf;
                mike['section'] = oscar;
                mike['item'] = report;
                mike['recyclerKey'] = zulu;
                zulu = tango.push;
                zulu = zulu.bind(tango)(mike);
                entity = mike;
 196:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'fill';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            entity = argFoo;
            var _closure3_slot1 = entity;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 10;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.forEach;
            zulu = _closure1_slot21;
            mike = function(argFoo) {
                oscar = _closure3_slot0;
                zulu = oscar._itemsForType;
                entity = argFoo;
                report = zulu.bind(oscar)(entity);
                tango = _closure1_slot8;
                entity = undefined;
                zulu = 2;
                tango = tango.bind(entity)(report, zulu);
                zulu = 0;
                report = tango[zulu];
                zulu = 1;
                tango = tango[zulu];
                zulu = oscar._fill;
                mike = _closure3_slot1;
                mike = zulu.bind(oscar)(report, tango, mike);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = '_fill';
        entity['key'] = oscar;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                mike = argBar;
                var _closure3_slot0 = mike;
                entity = 0;
                var _closure3_slot1 = entity;
                zulu = argBaz;
                if(zulu) { _fun00018_ip = 67; continue _fun00017 }
 21:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 10;
                tango = tango[zulu];
                zulu = undefined;
                golf = report.bind(zulu)(tango);
                report = golf.forEach;
                tango = argFoo;
                zulu = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.key;
                        tango = _closure3_slot0;
                        entity = _closure3_slot1;
                        entity = tango[entity];
                        tango = null;
                        if(!(tango != entity)) { _fun00020_ip = 50; continue _fun00019 }
 29:
                        entity['key'] = zulu;
                        entity = _closure3_slot1;
                        entity = entity + 1;
                        _closure3_slot1 = entity;
                        entity = undefined;
                        return entity;
 50:
                        entity = false;
                        return entity;
                    }
                };
                zulu = report.bind(golf)(tango, zulu);
 67:
                tango = _closure3_slot1;
                zulu = mike.length;
                if(!(tango < zulu)) { _fun00018_ip = 136; continue _fun00017 }
 83:
                zulu = _closure3_slot1;
                tango = mike[zulu];
                golf = _closure2_slot0;
                zulu = golf._LAST_KEY;
                zulu = zulu + 1;
                golf['_LAST_KEY'] = zulu;
                tango['key'] = zulu;
                zulu = _closure3_slot1;
                tango = zulu + 1;
                _closure3_slot1 = tango;
                zulu = mike.length;
                if(tango < zulu) { _fun00018_ip = 83; continue _fun00017 }
 136:
                mike['length'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[4] = entity;
        entity = undefined;
        entity = zulu.bind(entity)(tango, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot22 = tango;
    tango['_LAST_KEY'] = golf;
    tango = function() {
        tango = _closure1_slot10;
        zulu = function(argFoo) { // Original name: FastListComputer
            tango = argFoo;
            zulu = this;
            report = _closure1_slot9;
            mike = _closure2_slot0;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            report = 0;
            zulu['chunkSize'] = report;
            mike = false;
            zulu['uniform'] = mike;
            oscar = new Array(0);
            zulu['dataCache'] = oscar;
            zulu['size'] = report;
            report = true;
            zulu['dirty'] = report;
            report = -1;
            zulu['lastStartChunk'] = report;
            zulu['lastEndChunk'] = report;
            report = new Array(0);
            zulu['items'] = report;
            report = new Array(0);
            zulu['persistantItemData'] = report;
            zulu['disableRecycling'] = mike;
            zulu['props'] = tango;
            mike = zulu.updateProps;
            mike = mike.bind(zulu)(tango);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'updateProps';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                mike = this;
                zulu = mike.dirty;
                tango = !zulu;
                zulu = !tango;
                if(!tango) { _fun00022_ip = 60; continue _fun00021 }
 21:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                tango = 11;
                tango = oscar[tango];
                oscar = undefined;
                report = report.bind(oscar)(tango);
                tango = mike.props;
                tango = report.bind(oscar)(entity, tango);
                zulu = !tango;
 60:
                mike['dirty'] = zulu;
                mike['props'] = entity;
                entity = entity.itemSize;
                zulu = 'number';
                entity = typeof entity;
                entity = zulu === entity;
                mike['uniform'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(17);
        mike[0] = entity;
        entity = {};
        oscar = 'setInfo';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                mike = this;
                entity = global;
                tango = entity.Math;
                zulu = tango.ceil;
                report = _closure1_slot18;
                entity = argFoo;
                entity = entity / report;
                entity = zulu.bind(tango)(entity);
                zulu = mike.dirty;
                tango = !zulu;
                zulu = !tango;
                if(!tango) { _fun00024_ip = 61; continue _fun00023 }
 51:
                tango = mike.chunkSize;
                zulu = entity !== tango;
 61:
                mike['dirty'] = zulu;
                mike['chunkSize'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'getSizeForHeader';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = this;
                entity = entity.props;
                entity = entity.headerSize;
                mike = undefined;
                zulu = 0;
                if(!(mike !== entity)) { _fun00026_ip = 25; continue _fun00025 }
 22:
                zulu = entity;
 25:
                report = 'number';
                tango = typeof zulu;
                entity = zulu;
                if(!(report !== tango)) { _fun00026_ip = 43; continue _fun00025 }
 39:
                entity = zulu.bind(mike)();
 43:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getSizeForFooter';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                entity = this;
                entity = entity.props;
                entity = entity.footerSize;
                mike = undefined;
                zulu = 0;
                if(!(mike !== entity)) { _fun00028_ip = 25; continue _fun00027 }
 22:
                zulu = entity;
 25:
                report = 'number';
                tango = typeof zulu;
                entity = zulu;
                if(!(report !== tango)) { _fun00028_ip = 43; continue _fun00027 }
 39:
                entity = zulu.bind(mike)();
 43:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getSizeForSection';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = this;
                entity = entity.props;
                entity = entity.sectionSize;
                zulu = undefined;
                tango = 0;
                if(!(zulu !== entity)) { _fun00030_ip = 25; continue _fun00029 }
 22:
                tango = entity;
 25:
                report = 'number';
                mike = typeof tango;
                entity = tango;
                if(!(report !== mike)) { _fun00030_ip = 47; continue _fun00029 }
 39:
                mike = argFoo;
                entity = tango.bind(zulu)(mike);
 47:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getSizeForItem';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                entity = this;
                entity = entity.props;
                report = entity.itemSize;
                zulu = 'number';
                mike = typeof report;
                entity = report;
                if(!(zulu !== mike)) { _fun00032_ip = 42; continue _fun00031 }
 28:
                tango = undefined;
                zulu = argFoo;
                mike = argBar;
                entity = report.bind(tango)(zulu, mike);
 42:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getSizeForSectionFooter';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = this;
                entity = entity.props;
                entity = entity.sectionFooterSize;
                zulu = undefined;
                tango = 0;
                if(!(zulu !== entity)) { _fun00034_ip = 25; continue _fun00033 }
 22:
                tango = entity;
 25:
                report = 'number';
                mike = typeof tango;
                entity = tango;
                if(!(report !== mike)) { _fun00034_ip = 47; continue _fun00033 }
 39:
                mike = argFoo;
                entity = tango.bind(zulu)(mike);
 47:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getChunk';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                verify = argFoo;
                entity = this;
                options = entity.dataCache;
                mike = options.length;
                golf = 1;
                oscar = mike - golf;
                mike = entity.chunkCache;
                report = null;
                if(!(report != mike)) { _fun00036_ip = 66; continue _fun00035 }
 36:
                mike = entity.chunkCache;
                mike = mike.start;
                if(!(verify >= mike)) { _fun00036_ip = 66; continue _fun00035 }
 51:
                mike = entity.chunkCache;
                mike = mike.end;
                if(!(!(verify <= mike))) { _fun00036_ip = 168; continue _fun00035 }
 66:
                zulu = 2;
                tango = 0;
                if(!(tango <= oscar)) { _fun00036_ip = 164; continue _fun00035 }
 75:
                mike = oscar - tango;
                mike = mike / zulu;
                mike = mike | 0;
                yankee = tango + mike;
                mike = options[yankee];
                if(!(report != mike)) { _fun00036_ip = 164; continue _fun00035 }
 98:
                offset = mike.start;
                if(!(verify >= offset)) { _fun00036_ip = 116; continue _fun00035 }
 107:
                offset = mike.end;
                if(!(!(verify <= offset))) { _fun00036_ip = 156; continue _fun00035 }
 116:
                offset = mike.start;
                if(!(!(verify < offset))) { _fun00036_ip = 140; continue _fun00035 }
 125:
                offset = mike.end;
                if(!(verify > offset)) { _fun00036_ip = 164; continue _fun00035 }
 134:
                offset = yankee + golf;
                _fun00036_ip = 147; continue _fun00035;
 140:
                oscar = yankee - golf;
                offset = tango;
 147:
                tango = offset;
                if(tango <= oscar) { _fun00036_ip = 75; continue _fun00035 }
 154:
                _fun00036_ip = 164; continue _fun00035;
 156:
                entity['chunkCache'] = mike;
                return mike;
 164:
                mike = undefined;
                return mike;
 168:
                entity = entity.chunkCache;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'compute';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                options = argFoo;
                foxtrot = argBar;
                entity = arguments[3];
                zulu = this;
                var _closure3_slot0 = options;
                var _closure3_slot1 = foxtrot;
                romeo = undefined;
                if(!(entity === romeo)) { _fun00038_ip = 30; continue _fun00037 }
 28:
                entity = false;
 30:
                var _closure3_slot2 = entity;
                var _closure3_slot3 = romeo;
                var _closure3_slot4 = romeo;
                var _closure3_slot5 = romeo;
                var _closure3_slot6 = romeo;
                papa = function(argFoo, argBar, argBaz, argCorge) { // Original name: addInitialSection
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        foxtrot = argFoo;
                        tango = argBar;
                        zulu = argBaz;
                        report = argCorge;
                        verify = _closure3_slot4;
                        options = verify.push;
                        romeo = _closure3_slot5;
                        yankee = romeo.get;
                        entity = _closure1_slot21;
                        offset = entity.SECTION;
                        backup = _closure3_slot3;
                        golf = entity.SECTION;
                        entity = undefined;
                        output = backup.bind(entity)(golf, foxtrot);
                        source = romeo;
                        update = offset;
                        echo = tango;
                        result = zulu;
                        sizing = foxtrot;
                        golf = source[yankee](update, echo, result, output, sizing, kilo);
                        golf = options.bind(verify)(golf);
                        offset = tango + zulu;
                        if(!(offset < report)) { _fun00040_ip = 162; continue _fun00039 }
 96:
                        zulu = _closure3_slot6;
                        zulu = zulu + 1;
                        _closure3_slot6 = zulu;
                        tango = _closure3_slot4;
                        zulu = tango.push;
                        verify = _closure3_slot5;
                        options = verify.get;
                        oscar = _closure1_slot21;
                        update = oscar.SPACER;
                        result = report - offset;
                        kilo = _closure3_slot6;
                        sizing = 0;
                        source = verify;
                        echo = offset;
                        output = undefined;
                        mike = source[options](update, echo, result, output, sizing, kilo, backup);
                        mike = zulu.bind(tango)(mike);
 162:
                        return entity;
                    }
                };
                context = function(argFoo, argBar) { // Original name: isVisible
                    _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                        tango = argFoo;
                        entity = _closure3_slot2;
                        entity = !entity;
                        if(entity) { _fun00042_ip = 45; continue _fun00041 }
 16:
                        report = _closure3_slot0;
                        mike = argBar;
                        mike = report - mike;
                        mike = tango >= mike;
                        if(!mike) { _fun00042_ip = 42; continue _fun00041 }
 34:
                        zulu = _closure3_slot1;
                        mike = tango < zulu;
 42:
                        entity = mike;
 45:
                        return entity;
                    }
                };
                entity = zulu.dirty;
                if(entity) { _fun00038_ip = 121; continue _fun00037 }
 73:
                entity = zulu.lastStartChunk;
                golf = false;
                if(!(options === entity)) { _fun00038_ip = 133; continue _fun00037 }
 85:
                entity = zulu.lastEndChunk;
                golf = false;
                if(!(foxtrot === entity)) { _fun00038_ip = 133; continue _fun00037 }
 97:
                entity = {};
                mike = zulu.size;
                entity['size'] = mike;
                mike = zulu.items;
                entity['items'] = mike;
                return entity;
 121:
                entity = zulu.fullCompute;
                entity = entity.bind(zulu)();
                golf = true;
 133:
                entity = zulu.props;
                backup = entity.stickyHeaderFooter;
                record = entity.getRecyclerKey;
                if(!(romeo === record)) { _fun00038_ip = 161; continue _fun00037 }
 154:
                record = _closure1_slot38;
 161:
                _closure3_slot3 = record;
                zulu['lastStartChunk'] = options;
                zulu['lastEndChunk'] = foxtrot;
                sizing = global;
                entity = sizing.Map;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                variable63 = mike;
                entity = new variable63[entity](variable62);
                oscar = entity instanceof Object ? entity : mike;
                mike = _closure1_slot35;
                entity = zulu.persistantItemData;
                report = mike.bind(romeo)(entity);
                mike = report.bind(romeo)();
                entity = mike.done;
                kilo = null;
                if(entity) { _fun00038_ip = 315; continue _fun00037 }
 237:
                offset = mike.value;
                output = offset.type;
                verify = offset.section;
                echo = offset.type;
                entity = _closure1_slot21;
                result = entity.ITEM;
                entity = undefined;
                if(!(echo === result)) { _fun00038_ip = 278; continue _fun00037 }
 273:
                entity = offset.item;
 278:
                verify = record.bind(romeo)(output, verify, entity);
                if(!(kilo != verify)) { _fun00038_ip = 300; continue _fun00037 }
 289:
                entity = oscar.set;
                entity = entity.bind(oscar)(verify, offset);
 300:
                verify = report.bind(romeo)();
                entity = verify.done;
                mike = verify;
                if(!entity) { _fun00038_ip = 237; continue _fun00037 }
 315:
                report = sizing.Math;
                mike = report.floor;
                entity = zulu.chunkSize;
                entity = options / entity;
                entity = mike.bind(report)(entity);
                options = sizing.Math;
                report = options.max;
                offset = sizing.Math;
                verify = offset.ceil;
                mike = zulu.chunkSize;
                mike = foxtrot / mike;
                mike = verify.bind(offset)(mike);
                config = report.bind(options)(mike, entity);
                mike = zulu.chunkSize;
                sequence = entity * mike;
                mike = new Array(0);
                zulu['items'] = mike;
                _closure3_slot4 = mike;
                verify = _closure1_slot22;
                report = verify.prototype;
                options = Object.create(report, {constructor: {value: verify}});
                variable62 = argBaz;
                variable63 = options;
                report = new variable63[verify](variable62, variable61);
                report = report instanceof Object ? report : options;
                _closure3_slot5 = report;
                control = {'initialSection': 4294967295, 'initialItem': 4294967295, 'lastSection': 4294967295, 'lastItem': 4294967295};
                vacuum = -1;
                offset = 0;
                _closure3_slot6 = offset;
                tango = sizing.Set;
                options = tango.prototype;
                options = Object.create(options, {constructor: {value: tango}});
                variable63 = options;
                tango = new variable63[tango](variable62);
                tango = tango instanceof Object ? tango : options;
                if(!(entity <= config)) { _fun00038_ip = 528; continue _fun00037 }
 493:
                options = zulu.getChunk;
                foxtrot = options.bind(zulu)(entity);
                options = entity;
                if(!(kilo != foxtrot)) { _fun00038_ip = 521; continue _fun00037 }
 511:
                verify = tango.add;
                verify = verify.bind(tango)(foxtrot);
 521:
                entity = options + 1;
                if(entity <= config) { _fun00038_ip = 493; continue _fun00037 }
 528:
                entity = _closure1_slot35;
                source = entity.bind(romeo)(tango);
                tango = source.bind(romeo)();
                entity = tango.done;
                update = tango;
                echo = undefined;
                result = undefined;
                output = undefined;
                foxtrot = undefined;
                verify = undefined;
                options = undefined;
                tango = undefined;
                if(entity) { _fun00038_ip = 2257; continue _fun00037 }
 569:
                entity = update.value;
                quebec = sequence;
                whiskey = output;
                lima = foxtrot;
                sierra = verify;
                status = options;
                target = tango;
                if(!(kilo != entity)) { _fun00038_ip = 2221; continue _fun00037 }
 599:
                equality = _closure1_slot35;
                entity = entity.data;
                variable41 = equality.bind(romeo)(entity);
                variable42 = variable41.bind(romeo)();
                entity = variable42.done;
                variable40 = sequence;
                variable39 = variable42;
                variable38 = foxtrot;
                variable37 = verify;
                variable36 = options;
                equality = tango;
                quebec = variable40;
                echo = variable39;
                result = variable41;
                whiskey = output;
                lima = variable38;
                sierra = variable37;
                status = variable36;
                target = equality;
                if(entity) { _fun00038_ip = 2221; continue _fun00037 }
 670:
                variable46 = variable39.value;
                variable42 = variable46.layoutStart;
                entity = variable46.layoutSize;
                entity = variable42 + entity;
                variable48 = variable40;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equality;
                if(!(!(entity < variable40))) { _fun00038_ip = 2164; continue _fun00037 }
 713:
                variable47 = variable46.type;
                entity = _closure1_slot21;
                entity = entity.HEADER;
                if(!(entity !== variable47)) { _fun00038_ip = 2069; continue _fun00037 }
 735:
                entity = _closure1_slot21;
                entity = entity.SECTION;
                if(!(entity !== variable47)) { _fun00038_ip = 1861; continue _fun00037 }
 752:
                entity = _closure1_slot21;
                entity = entity.ITEM;
                if(!(entity !== variable47)) { _fun00038_ip = 1097; continue _fun00037 }
 769:
                entity = _closure1_slot21;
                entity = entity.SECTION_FOOTER;
                if(!(entity !== variable47)) { _fun00038_ip = 918; continue _fun00037 }
 786:
                entity = _closure1_slot21;
                entity = entity.FOOTER;
                variable48 = variable40;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equality;
                if(!(entity === variable47)) { _fun00038_ip = 2164; continue _fun00037 }
 818:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                entity = context.bind(romeo)(variable47, entity);
                if(!entity) { _fun00038_ip = 885; continue _fun00037 }
 839:
                variable47 = mike.push;
                variable51 = report.get;
                entity = _closure1_slot21;
                variable62 = entity.FOOTER;
                variable61 = variable46.layoutStart;
                variable60 = variable46.layoutSize;
                variable63 = report;
                variable59 = undefined;
                entity = variable63[variable51](variable62, variable61, variable60, variable59, variable58);
                entity = variable47.bind(mike)(entity);
 885:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                variable48 = variable47 + entity;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equality;
                _fun00038_ip = 2164; continue _fun00037;
 918:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                entity = context.bind(romeo)(variable47, entity);
                if(!entity) { _fun00038_ip = 1064; continue _fun00037 }
 942:
                entity = mike.length;
                if(!(offset === entity)) { _fun00038_ip = 992; continue _fun00037 }
 951:
                variable62 = variable46.section;
                entity = variable46.sectionData;
                variable61 = entity.layoutStart;
                entity = variable46.sectionData;
                variable60 = entity.layoutSize;
                variable59 = variable46.layoutStart;
                variable63 = undefined;
                entity = variable63[papa](variable62, variable61, variable60, variable59, variable58);
 992:
                variable47 = mike.push;
                variable53 = report.get;
                entity = _closure1_slot21;
                variable52 = entity.SECTION_FOOTER;
                variable51 = variable46.layoutStart;
                variable60 = variable46.layoutSize;
                variable49 = entity.SECTION_FOOTER;
                entity = variable46.section;
                variable59 = record.bind(romeo)(variable49, entity);
                variable58 = variable46.section;
                variable63 = report;
                variable62 = variable52;
                variable61 = variable51;
                entity = variable63[variable53](variable62, variable61, variable60, variable59, variable58, variable57);
                entity = variable47.bind(mike)(entity);
 1064:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                variable48 = variable47 + entity;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equality;
                _fun00038_ip = 2164; continue _fun00037;
 1097:
                entity = variable46.uniform;
                if(!(kilo != entity)) { _fun00038_ip = 1570; continue _fun00037 }
 1110:
                entity = variable46.layoutStart;
                entity = variable40 > entity;
                variable51 = 0;
                if(!entity) { _fun00038_ip = 1162; continue _fun00037 }
 1125:
                variable49 = sizing.Math;
                variable47 = variable49.floor;
                entity = variable46.layoutStart;
                variable50 = variable40 - entity;
                entity = variable46.itemSize;
                entity = variable50 / entity;
                variable51 = variable47.bind(variable49)(entity);
 1162:
                variable47 = variable46.layoutStart;
                entity = variable46.itemSize;
                entity = entity * variable51;
                variable52 = variable47 + entity;
                entity = zulu.chunkSize;
                entity = config * entity;
                variable48 = variable52;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable51;
                variable42 = equality;
                if(!(variable52 < entity)) { _fun00038_ip = 2164; continue _fun00037 }
 1214:
                entity = variable46.items;
                variable50 = variable52;
                variable49 = variable51;
                variable47 = equality;
                variable48 = variable50;
                variable45 = variable38;
                variable44 = variable37;
                variable42 = variable47;
                variable43 = variable49;
                if(!(variable43 < entity)) { _fun00038_ip = 2164; continue _fun00037 }
 1251:
                entity = variable46.itemSize;
                entity = context.bind(romeo)(variable50, entity);
                variable51 = variable50;
                if(!entity) { _fun00038_ip = 1480; continue _fun00037 }
 1272:
                entity = mike.length;
                if(!(offset === entity)) { _fun00038_ip = 1319; continue _fun00037 }
 1281:
                variable62 = variable46.section;
                entity = variable46.sectionData;
                variable61 = entity.layoutStart;
                entity = variable46.sectionData;
                variable60 = entity.layoutSize;
                variable63 = undefined;
                variable59 = variable51;
                entity = variable63[papa](variable62, variable61, variable60, variable59, variable58);
 1319:
                entity = control.initialSection;
                if(!(vacuum === entity)) { _fun00038_ip = 1340; continue _fun00037 }
 1329:
                entity = variable46.section;
                control['initialSection'] = entity;
 1340:
                entity = control.initialItem;
                if(!(vacuum === entity)) { _fun00038_ip = 1356; continue _fun00037 }
 1350:
                control['initialItem'] = variable49;
 1356:
                entity = variable46.section;
                control['lastSection'] = entity;
                control['lastItem'] = variable49;
                entity = _closure1_slot21;
                variable52 = entity.ITEM;
                entity = variable46.section;
                entity = record.bind(romeo)(variable52, entity, variable49);
                variable52 = kilo != entity;
                if(!variable52) { _fun00038_ip = 1412; continue _fun00037 }
 1402:
                variable53 = oscar.has;
                variable52 = variable53.bind(oscar)(entity);
 1412:
                if(!variable52) { _fun00038_ip = 1425; continue _fun00037 }
 1415:
                variable52 = oscar.delete;
                variable52 = variable52.bind(oscar)(entity);
 1425:
                variable53 = mike.push;
                variable56 = report.get;
                variable52 = _closure1_slot21;
                variable62 = variable52.ITEM;
                variable60 = variable46.itemSize;
                variable58 = variable46.section;
                variable63 = report;
                variable61 = variable51;
                variable59 = entity;
                variable57 = variable49;
                variable52 = variable63[variable56](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                variable52 = variable53.bind(mike)(variable52);
                variable47 = entity;
 1480:
                entity = variable46.itemSize;
                variable53 = variable51 + entity;
                variable51 = variable49 + 1;
                entity = zulu.chunkSize;
                entity = config * entity;
                variable52 = variable47;
                variable48 = variable53;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable51;
                variable42 = variable52;
                if(!(variable53 < entity)) { _fun00038_ip = 2164; continue _fun00037 }
 1528:
                entity = variable46.items;
                variable50 = variable53;
                variable49 = variable51;
                variable47 = variable52;
                variable48 = variable50;
                variable45 = variable38;
                variable44 = variable37;
                variable42 = variable47;
                variable43 = variable49;
                if(variable43 < entity) { _fun00038_ip = 1251; continue _fun00037 }
 1565:
                _fun00038_ip = 2164; continue _fun00037;
 1570:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                variable47 = context.bind(romeo)(variable47, entity);
                entity = variable37;
                if(!variable47) { _fun00038_ip = 1828; continue _fun00037 }
 1597:
                variable47 = mike.length;
                if(!(offset === variable47)) { _fun00038_ip = 1647; continue _fun00037 }
 1606:
                variable62 = variable46.section;
                variable47 = variable46.sectionData;
                variable61 = variable47.layoutStart;
                variable47 = variable46.sectionData;
                variable60 = variable47.layoutSize;
                variable59 = variable46.layoutStart;
                variable63 = undefined;
                variable47 = variable63[papa](variable62, variable61, variable60, variable59, variable58);
 1647:
                variable47 = control.initialSection;
                if(!(vacuum === variable47)) { _fun00038_ip = 1668; continue _fun00037 }
 1657:
                variable47 = variable46.section;
                control['initialSection'] = variable47;
 1668:
                variable47 = control.initialItem;
                if(!(vacuum === variable47)) { _fun00038_ip = 1689; continue _fun00037 }
 1678:
                variable47 = variable46.item;
                control['initialItem'] = variable47;
 1689:
                variable47 = variable46.section;
                control['lastSection'] = variable47;
                variable47 = variable46.item;
                control['lastItem'] = variable47;
                variable47 = _closure1_slot21;
                variable50 = variable47.ITEM;
                variable49 = variable46.section;
                variable47 = variable46.item;
                variable47 = record.bind(romeo)(variable50, variable49, variable47);
                variable49 = kilo != variable47;
                if(!variable49) { _fun00038_ip = 1755; continue _fun00037 }
 1745:
                variable50 = oscar.has;
                variable49 = variable50.bind(oscar)(variable47);
 1755:
                if(!variable49) { _fun00038_ip = 1768; continue _fun00037 }
 1758:
                variable49 = oscar.delete;
                variable49 = variable49.bind(oscar)(variable47);
 1768:
                variable50 = mike.push;
                variable55 = report.get;
                variable49 = _closure1_slot21;
                variable62 = variable49.ITEM;
                variable61 = variable46.layoutStart;
                variable60 = variable46.layoutSize;
                variable58 = variable46.section;
                variable57 = variable46.item;
                variable63 = report;
                variable59 = variable47;
                variable49 = variable63[variable55](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                variable49 = variable50.bind(mike)(variable49);
                entity = variable47;
 1828:
                variable49 = variable46.layoutStart;
                variable47 = variable46.layoutSize;
                variable48 = variable49 + variable47;
                variable44 = entity;
                variable45 = variable38;
                variable43 = variable36;
                variable42 = equality;
                _fun00038_ip = 2164; continue _fun00037;
 1861:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                variable47 = context.bind(romeo)(variable47, entity);
                entity = variable38;
                if(!variable47) { _fun00038_ip = 2039; continue _fun00037 }
 1888:
                variable47 = control.initialSection;
                if(!(vacuum !== variable47)) { _fun00038_ip = 1911; continue _fun00037 }
 1898:
                variable47 = variable46.section;
                control['lastSection'] = variable47;
                _fun00038_ip = 1933; continue _fun00037;
 1911:
                variable47 = variable46.section;
                control['initialSection'] = variable47;
                variable47 = variable46.section;
                control['lastSection'] = variable47;
 1933:
                variable47 = _closure1_slot21;
                variable49 = variable47.SECTION;
                variable47 = variable46.section;
                variable47 = record.bind(romeo)(variable49, variable47);
                variable49 = kilo != variable47;
                if(!variable49) { _fun00038_ip = 1971; continue _fun00037 }
 1961:
                variable50 = oscar.has;
                variable49 = variable50.bind(oscar)(variable47);
 1971:
                if(!variable49) { _fun00038_ip = 1984; continue _fun00037 }
 1974:
                variable49 = oscar.delete;
                variable49 = variable49.bind(oscar)(variable47);
 1984:
                variable50 = mike.push;
                variable54 = report.get;
                variable49 = _closure1_slot21;
                variable62 = variable49.SECTION;
                variable61 = variable46.layoutStart;
                variable60 = variable46.layoutSize;
                variable58 = variable46.section;
                variable63 = report;
                variable59 = variable47;
                variable49 = variable63[variable54](variable62, variable61, variable60, variable59, variable58, variable57);
                variable49 = variable50.bind(mike)(variable49);
                entity = variable47;
 2039:
                variable49 = variable46.layoutStart;
                variable47 = variable46.layoutSize;
                variable48 = variable49 + variable47;
                variable45 = entity;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equality;
                _fun00038_ip = 2164; continue _fun00037;
 2069:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                entity = context.bind(romeo)(variable47, entity);
                if(!entity) { _fun00038_ip = 2136; continue _fun00037 }
 2090:
                variable47 = mike.push;
                variable51 = report.get;
                entity = _closure1_slot21;
                variable62 = entity.HEADER;
                variable61 = variable46.layoutStart;
                variable60 = variable46.layoutSize;
                variable63 = report;
                variable59 = undefined;
                entity = variable63[variable51](variable62, variable61, variable60, variable59, variable58);
                entity = variable47.bind(mike)(entity);
 2136:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                variable48 = variable47 + entity;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equality;
 2164:
                variable47 = variable41.bind(romeo)();
                entity = variable47.done;
                variable40 = variable48;
                variable38 = variable45;
                variable37 = variable44;
                variable36 = variable43;
                equality = variable42;
                variable39 = variable47;
                quebec = variable40;
                echo = variable39;
                result = variable41;
                whiskey = variable46;
                lima = variable38;
                sierra = variable37;
                status = variable36;
                target = equality;
                if(!entity) { _fun00038_ip = 670; continue _fun00037 }
 2221:
                equality = source.bind(romeo)();
                entity = equality.done;
                sequence = quebec;
                output = whiskey;
                foxtrot = lima;
                verify = sierra;
                options = status;
                tango = target;
                update = equality;
                if(!entity) { _fun00038_ip = 569; continue _fun00037 }
 2257:
                foxtrot = new Array(0);
                tango = new Array(0);
                entity = _closure1_slot35;
                source = entity.bind(romeo)(oscar);
                oscar = source.bind(romeo)();
                entity = oscar.done;
                verify = 2;
                options = 1;
                update = oscar;
                echo = 0;
                output = 0;
                result = 0;
                oscar = 0;
                if(entity) { _fun00038_ip = 2605; continue _fun00037 }
 2306:
                vacuum = update.value;
                entity = _closure1_slot8;
                entity = entity.bind(romeo)(vacuum, verify);
                papa = entity[offset];
                context = entity[options];
                vacuum = context.section;
                entity = control.initialSection;
                if(!(!(vacuum < entity))) { _fun00038_ip = 2540; continue _fun00037 }
 2347:
                vacuum = context.section;
                entity = control.lastSection;
                if(!(!(vacuum > entity))) { _fun00038_ip = 2503; continue _fun00037 }
 2365:
                config = context.type;
                entity = _closure1_slot21;
                entity = entity.ITEM;
                sequence = echo;
                vacuum = output;
                if(!(config === entity)) { _fun00038_ip = 2575; continue _fun00037 }
 2393:
                config = context.section;
                entity = control.initialSection;
                if(!(config === entity)) { _fun00038_ip = 2423; continue _fun00037 }
 2408:
                config = context.item;
                entity = control.initialItem;
                if(!(!(config < entity))) { _fun00038_ip = 2460; continue _fun00037 }
 2423:
                entity = context.layoutSize;
                entity = output + entity;
                record = tango.push;
                config = new Array(2);
                config[0] = papa;
                config[1] = context;
                config = record.bind(tango)(config);
                config = echo;
                _fun00038_ip = 2495; continue _fun00037;
 2460:
                record = context.layoutSize;
                config = echo + record;
                status = foxtrot.push;
                target = new Array(2);
                target[0] = papa;
                target[1] = context;
                target = status.bind(foxtrot)(target);
                entity = output;
 2495:
                sequence = config;
                vacuum = entity;
                _fun00038_ip = 2575; continue _fun00037;
 2503:
                entity = context.layoutSize;
                vacuum = output + entity;
                record = tango.push;
                config = new Array(2);
                config[0] = papa;
                config[1] = context;
                config = record.bind(tango)(config);
                sequence = echo;
                _fun00038_ip = 2575; continue _fun00037;
 2540:
                entity = context.layoutSize;
                sequence = echo + entity;
                record = foxtrot.push;
                config = new Array(2);
                config[0] = papa;
                config[1] = context;
                config = record.bind(foxtrot)(config);
                vacuum = output;
 2575:
                config = source.bind(romeo)();
                entity = config.done;
                echo = sequence;
                output = vacuum;
                update = config;
                result = echo;
                oscar = output;
                if(!entity) { _fun00038_ip = 2306; continue _fun00037 }
 2605:
                entity = mike[offset];
                if(!(kilo != entity)) { _fun00038_ip = 3049; continue _fun00037 }
 2616:
                output = entity.layoutStart;
                if(!(output > offset)) { _fun00038_ip = 3049; continue _fun00037 }
 2629:
                output = zulu.headerDataCache;
                sequence = entity.layoutStart;
                echo = backup;
                if(!backup) { _fun00038_ip = 2651; continue _fun00037 }
 2647:
                echo = kilo != output;
 2651:
                if(!echo) { _fun00038_ip = 2667; continue _fun00037 }
 2654:
                update = entity.type;
                entity = 'HEADER';
                echo = entity !== update;
 2667:
                entity = sequence;
                if(!echo) { _fun00038_ip = 2828; continue _fun00037 }
 2676:
                echo = output.layoutStart;
                update = sequence - echo;
                echo = output.layoutSize;
                echo = update - echo;
                if(!(echo > offset)) { _fun00038_ip = 2775; continue _fun00037 }
 2700:
                update = mike.unshift;
                vacuum = report.get;
                echo = _closure1_slot21;
                variable62 = echo.SPACER;
                source = output.layoutStart;
                echo = output.layoutSize;
                variable61 = source + echo;
                echo = output.layoutStart;
                sequence = sequence - echo;
                echo = output.layoutSize;
                variable60 = sequence - echo;
                variable63 = report;
                variable59 = undefined;
                variable58 = 0;
                variable57 = 0;
                echo = variable63[vacuum](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                echo = update.bind(mike)(echo);
 2775:
                update = mike.unshift;
                vacuum = report.get;
                echo = _closure1_slot21;
                variable62 = echo.HEADER;
                variable61 = output.layoutStart;
                variable60 = output.layoutSize;
                variable63 = report;
                variable59 = undefined;
                echo = variable63[vacuum](variable62, variable61, variable60, variable59, variable58);
                echo = update.bind(mike)(echo);
                entity = output.layoutStart;
 2828:
                output = sizing.Math;
                sizing = output.max;
                entity = entity - result;
                output = sizing.bind(output)(entity, offset);
                entity = _closure1_slot35;
                sizing = entity.bind(romeo)(foxtrot);
                foxtrot = sizing.bind(romeo)();
                entity = foxtrot.done;
                if(entity) { _fun00038_ip = 3000; continue _fun00037 }
 2873:
                result = foxtrot.value;
                entity = _closure1_slot8;
                entity = entity.bind(romeo)(result, verify);
                sequence = entity[offset];
                config = entity[options];
                result = mike.unshift;
                vacuum = report.get;
                control = config.type;
                source = config.layoutStart;
                update = config.layoutSize;
                echo = config.section;
                context = config.type;
                entity = _closure1_slot21;
                record = entity.ITEM;
                entity = undefined;
                if(!(context === record)) { _fun00038_ip = 2955; continue _fun00037 }
 2950:
                entity = config.item;
 2955:
                variable63 = report;
                variable62 = control;
                variable61 = source;
                variable60 = update;
                variable59 = sequence;
                variable58 = echo;
                variable57 = entity;
                entity = variable63[vacuum](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                entity = result.bind(mike)(entity);
                result = sizing.bind(romeo)();
                entity = result.done;
                foxtrot = result;
                if(!entity) { _fun00038_ip = 2873; continue _fun00037 }
 3000:
                if(!(output > offset)) { _fun00038_ip = 3049; continue _fun00037 }
 3004:
                foxtrot = mike.unshift;
                sizing = report.get;
                entity = _closure1_slot21;
                variable62 = entity.SPACER;
                variable63 = report;
                variable61 = 0;
                variable60 = output;
                variable59 = undefined;
                variable58 = 0;
                variable57 = options;
                entity = variable63[sizing](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                entity = foxtrot.bind(mike)(entity);
 3049:
                entity = mike.length;
                entity = entity - options;
                entity = mike[entity];
                if(!(kilo == entity)) { _fun00038_ip = 3073; continue _fun00037 }
 3066:
                result = zulu.size;
                _fun00038_ip = 3089; continue _fun00037;
 3073:
                sizing = entity.layoutStart;
                foxtrot = entity.layoutSize;
                result = sizing + foxtrot;
 3089:
                foxtrot = zulu.size;
                if(!(result < foxtrot)) { _fun00038_ip = 3488; continue _fun00037 }
 3101:
                foxtrot = zulu.footerDataCache;
                if(!backup) { _fun00038_ip = 3114; continue _fun00037 }
 3110:
                backup = kilo != foxtrot;
 3114:
                if(!backup) { _fun00038_ip = 3130; continue _fun00037 }
 3117:
                kilo = entity.type;
                entity = 'FOOTER';
                backup = entity !== kilo;
 3130:
                entity = result;
                if(!backup) { _fun00038_ip = 3273; continue _fun00037 }
 3139:
                backup = foxtrot.layoutStart;
                if(!(result < backup)) { _fun00038_ip = 3211; continue _fun00037 }
 3149:
                kilo = mike.push;
                output = report.get;
                backup = _closure1_slot21;
                variable62 = backup.SPACER;
                echo = foxtrot.layoutStart;
                backup = foxtrot.layoutSize;
                backup = echo + backup;
                variable60 = backup - result;
                variable63 = report;
                variable61 = result;
                variable59 = undefined;
                variable58 = options;
                variable57 = 0;
                backup = variable63[output](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                backup = kilo.bind(mike)(backup);
 3211:
                kilo = mike.push;
                result = report.get;
                backup = _closure1_slot21;
                variable62 = backup.FOOTER;
                variable61 = foxtrot.layoutStart;
                variable60 = foxtrot.layoutSize;
                variable63 = report;
                variable59 = undefined;
                backup = variable63[result](variable62, variable61, variable60, variable59, variable58);
                backup = kilo.bind(mike)(backup);
                backup = foxtrot.layoutStart;
                foxtrot = foxtrot.layoutSize;
                entity = backup + foxtrot;
 3273:
                kilo = entity + oscar;
                entity = zulu.size;
                if(!(kilo < entity)) { _fun00038_ip = 3338; continue _fun00037 }
 3286:
                oscar = mike.push;
                backup = report.get;
                entity = _closure1_slot21;
                variable62 = entity.SPACER;
                entity = zulu.size;
                variable60 = entity - kilo;
                variable63 = report;
                variable61 = kilo;
                variable59 = undefined;
                variable58 = options;
                variable57 = options;
                entity = variable63[backup](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                entity = oscar.bind(mike)(entity);
 3338:
                entity = _closure1_slot35;
                oscar = entity.bind(romeo)(tango);
                tango = oscar.bind(romeo)();
                entity = tango.done;
                if(entity) { _fun00038_ip = 3488; continue _fun00037 }
 3362:
                foxtrot = tango.value;
                entity = _closure1_slot8;
                entity = entity.bind(romeo)(foxtrot, verify);
                echo = entity[offset];
                update = entity[options];
                foxtrot = mike.push;
                result = report.get;
                output = update.type;
                sizing = update.layoutStart;
                kilo = update.layoutSize;
                backup = update.section;
                control = update.type;
                entity = _closure1_slot21;
                source = entity.ITEM;
                entity = undefined;
                if(!(control === source)) { _fun00038_ip = 3443; continue _fun00037 }
 3438:
                entity = update.item;
 3443:
                variable63 = report;
                variable62 = output;
                variable61 = sizing;
                variable60 = kilo;
                variable59 = echo;
                variable58 = backup;
                variable57 = entity;
                entity = variable63[result](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                entity = foxtrot.bind(mike)(entity);
                foxtrot = oscar.bind(romeo)();
                entity = foxtrot.done;
                tango = foxtrot;
                if(!entity) { _fun00038_ip = 3362; continue _fun00037 }
 3488:
                tango = report.fill;
                entity = zulu.disableRecycling;
                if(entity) { _fun00038_ip = 3523; continue _fun00037 }
 3503:
                oscar = zulu.props;
                oscar = oscar.disableRecyclingOnFullCompute;
                if(!oscar) { _fun00038_ip = 3520; continue _fun00037 }
 3517:
                oscar = golf;
 3520:
                entity = oscar;
 3523:
                entity = tango.bind(report)(entity);
                entity = {};
                zulu = zulu.size;
                entity['size'] = zulu;
                entity['items'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'fullCompute';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                golf = zulu.props;
                control = golf.sections;
                oscar = golf.insetStart;
                report = 0;
                entity = undefined;
                tango = 0;
                if(!(entity !== oscar)) { _fun00044_ip = 39; continue _fun00043 }
 36:
                tango = oscar;
 39:
                options = golf.insetEnd;
                oscar = 0;
                if(!(entity !== options)) { _fun00044_ip = 54; continue _fun00043 }
 51:
                oscar = options;
 54:
                source = golf.getRecyclerKey;
                if(!(entity === source)) { _fun00044_ip = 71; continue _fun00043 }
 64:
                source = _closure1_slot38;
 71:
                golf = global;
                verify = golf.Set;
                golf = zulu.props;
                variable43 = golf.persistantKeys;
                options = verify.prototype;
                options = Object.create(options, {constructor: {value: verify}});
                variable44 = options;
                golf = new variable44[verify](variable43, variable42);
                update = golf instanceof Object ? golf : options;
                golf = new Array(0);
                zulu['persistantItemData'] = golf;
                golf = new Array(0);
                zulu['dataCache'] = golf;
                var _closure3_slot1 = golf;
                zulu['chunkCache'] = entity;
                golf = zulu.chunkSize;
                var _closure3_slot2 = golf;
                var _closure3_slot3 = tango;
                zulu['headerDataCache'] = entity;
                zulu['footerDataCache'] = entity;
                verify = function(argFoo, argBar, argBaz) { // Original name: pushData
                    _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                        offset = argFoo;
                        verify = argBar;
                        zulu = argBaz;
                        mike = _closure3_slot3;
                        entity = verify - offset;
                        entity = mike + entity;
                        _closure3_slot3 = entity;
                        entity = global;
                        golf = entity.Math;
                        oscar = golf.max;
                        options = entity.Math;
                        report = options.floor;
                        mike = _closure3_slot2;
                        mike = offset / mike;
                        report = report.bind(options)(mike);
                        mike = 0;
                        oscar = oscar.bind(golf)(report, mike);
                        report = entity.Math;
                        mike = report.max;
                        options = entity.Math;
                        golf = options.floor;
                        entity = _closure3_slot2;
                        entity = verify / entity;
                        golf = golf.bind(options)(entity);
                        entity = 1;
                        entity = golf - entity;
                        mike = mike.bind(report)(entity, oscar);
                        report = _closure3_slot0;
                        entity = report.getChunk;
                        entity = entity.bind(report)(oscar);
                        report = null;
                        if(!(report == entity)) { _fun00046_ip = 179; continue _fun00045 }
 144:
                        report = {};
                        report['start'] = oscar;
                        report['end'] = mike;
                        oscar = new Array(0);
                        report['data'] = oscar;
                        golf = _closure3_slot1;
                        oscar = golf.push;
                        oscar = oscar.bind(golf)(report);
                        entity = report;
 179:
                        golf = zulu.type;
                        oscar = _closure1_slot21;
                        oscar = oscar.HEADER;
                        if(!(golf !== oscar)) { _fun00046_ip = 232; continue _fun00045 }
 201:
                        oscar = zulu.type;
                        report = _closure1_slot21;
                        report = report.FOOTER;
                        if(!(oscar === report)) { _fun00046_ip = 242; continue _fun00045 }
 220:
                        report = _closure3_slot0;
                        report['footerDataCache'] = zulu;
                        _fun00046_ip = 242; continue _fun00045;
 232:
                        tango = _closure3_slot0;
                        tango['headerDataCache'] = zulu;
 242:
                        entity['end'] = mike;
                        mike = entity.data;
                        entity = mike.push;
                        entity = entity.bind(mike)(zulu);
                        entity = undefined;
                        return entity;
                    }
                };
                tango = zulu.getSizeForHeader;
                offset = tango.bind(zulu)();
                tango = offset > report;
                echo = undefined;
                if(!tango) { _fun00044_ip = 241; continue _fun00043 }
 194:
                tango = _closure3_slot3;
                options = tango + offset;
                golf = {};
                yankee = _closure1_slot21;
                yankee = yankee.HEADER;
                golf['type'] = yankee;
                golf['layoutStart'] = tango;
                golf['layoutSize'] = offset;
                golf = verify.bind(entity)(tango, options, golf);
                echo = tango;
 241:
                tango = control.length;
                golf = report < tango;
                result = true;
                output = null;
                sizing = 0;
                kilo = undefined;
                backup = undefined;
                foxtrot = undefined;
                romeo = undefined;
                yankee = undefined;
                offset = undefined;
                options = undefined;
                if(!golf) { _fun00044_ip = 885; continue _fun00043 }
 279:
                quebec = control[sizing];
                record = foxtrot;
                config = romeo;
                sequence = yankee;
                vacuum = offset;
                if(!(report !== quebec)) { _fun00044_ip = 858; continue _fun00043 }
 302:
                context = _closure3_slot3;
                golf = zulu.getSizeForSection;
                sierra = golf.bind(zulu)(sizing);
                status = {};
                golf = _closure1_slot21;
                golf = golf.SECTION;
                status['type'] = golf;
                status['layoutStart'] = context;
                status['layoutSize'] = sierra;
                status['section'] = sizing;
                golf = update.size;
                if(!(golf > report)) { _fun00044_ip = 426; continue _fun00043 }
 358:
                golf = _closure1_slot21;
                golf = golf.SECTION;
                golf = source.bind(entity)(golf, sizing);
                papa = output != golf;
                if(!papa) { _fun00044_ip = 391; continue _fun00043 }
 381:
                target = update.has;
                papa = target.bind(update)(golf);
 391:
                foxtrot = golf;
                if(!papa) { _fun00044_ip = 426; continue _fun00043 }
 397:
                target = zulu.persistantItemData;
                papa = target.push;
                papa = papa.bind(target)(status);
                papa = update.delete;
                papa = papa.bind(update)(golf);
                foxtrot = golf;
 426:
                golf = context + sierra;
                golf = verify.bind(entity)(context, golf, status);
                golf = zulu.uniform;
                if(golf) { _fun00044_ip = 646; continue _fun00043 }
 449:
                equality = report < quebec;
                whiskey = 0;
                golf = offset;
                lima = context;
                target = 0;
                papa = yankee;
                context = golf;
                if(!equality) { _fun00044_ip = 743; continue _fun00043 }
 475:
                equality = zulu.getSizeForItem;
                equality = equality.bind(zulu)(sizing, whiskey);
                variable38 = _closure3_slot3;
                variable37 = {};
                variable36 = _closure1_slot21;
                variable36 = variable36.ITEM;
                variable37['type'] = variable36;
                variable37['layoutStart'] = variable38;
                variable37['layoutSize'] = equality;
                variable37['section'] = sizing;
                variable37['item'] = whiskey;
                variable37['sectionData'] = status;
                equality = variable38 + equality;
                equality = verify.bind(entity)(variable38, equality, variable37);
                variable36 = update.size;
                equality = whiskey;
                if(!(variable36 > report)) { _fun00044_ip = 622; continue _fun00043 }
 553:
                variable36 = _closure1_slot21;
                variable36 = variable36.ITEM;
                variable36 = source.bind(entity)(variable36, sizing, equality);
                variable39 = output != variable36;
                if(!variable39) { _fun00044_ip = 587; continue _fun00043 }
 577:
                variable40 = update.has;
                variable39 = variable40.bind(update)(variable36);
 587:
                golf = variable36;
                if(!variable39) { _fun00044_ip = 622; continue _fun00043 }
 593:
                variable40 = zulu.persistantItemData;
                variable39 = variable40.push;
                variable39 = variable39.bind(variable40)(variable37);
                variable39 = update.delete;
                variable39 = variable39.bind(update)(variable36);
                golf = variable36;
 622:
                whiskey = equality + 1;
                lima = variable38;
                papa = variable37;
                context = golf;
                target = whiskey;
                if(target < quebec) { _fun00044_ip = 475; continue _fun00043 }
 644:
                _fun00044_ip = 743; continue _fun00043;
 646:
                golf = zulu.getSizeForItem;
                variable36 = golf.bind(zulu)(sizing, report);
                golf = _closure3_slot3;
                whiskey = variable36 * quebec;
                equality = golf + whiskey;
                whiskey = {};
                variable37 = _closure1_slot21;
                variable37 = variable37.ITEM;
                whiskey['type'] = variable37;
                whiskey['uniform'] = result;
                whiskey['layoutStart'] = golf;
                whiskey['itemSize'] = variable36;
                variable36 = variable36 * quebec;
                whiskey['layoutSize'] = variable36;
                whiskey['section'] = sizing;
                whiskey['items'] = quebec;
                whiskey['sectionData'] = status;
                whiskey = verify.bind(entity)(golf, equality, whiskey);
                lima = golf;
                target = romeo;
                papa = yankee;
                context = offset;
 743:
                golf = zulu.getSizeForSectionFooter;
                golf = golf.bind(zulu)(sizing);
                echo = lima;
                kilo = sierra;
                backup = status;
                record = foxtrot;
                config = target;
                sequence = papa;
                vacuum = context;
                options = golf;
                if(!(options > report)) { _fun00044_ip = 858; continue _fun00043 }
 784:
                lima = _closure3_slot3;
                equality = lima + golf;
                whiskey = {};
                quebec = _closure1_slot21;
                quebec = quebec.SECTION_FOOTER;
                whiskey['type'] = quebec;
                whiskey['layoutStart'] = lima;
                whiskey['layoutSize'] = golf;
                whiskey['section'] = sizing;
                whiskey['sectionData'] = status;
                whiskey = verify.bind(entity)(lima, equality, whiskey);
                echo = lima;
                kilo = sierra;
                backup = status;
                record = foxtrot;
                config = target;
                sequence = papa;
                vacuum = context;
                options = golf;
 858:
                sizing = sizing + 1;
                golf = control.length;
                foxtrot = record;
                romeo = config;
                yankee = sequence;
                offset = vacuum;
                if(sizing < golf) { _fun00044_ip = 279; continue _fun00043 }
 885:
                golf = zulu.getSizeForFooter;
                offset = golf.bind(zulu)();
                if(!(offset > report)) { _fun00044_ip = 942; continue _fun00043 }
 901:
                options = _closure3_slot3;
                golf = options + offset;
                report = {};
                yankee = _closure1_slot21;
                yankee = yankee.FOOTER;
                report['type'] = yankee;
                report['layoutStart'] = options;
                report['layoutSize'] = offset;
                report = verify.bind(entity)(options, golf, report);
 942:
                report = _closure3_slot3;
                report = report + oscar;
                _closure3_slot3 = report;
                report = _closure1_slot12;
                tango = report.roundToNearestPixel;
                mike = _closure3_slot3;
                mike = tango.bind(report)(mike);
                zulu['size'] = mike;
                mike = false;
                zulu['dirty'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'getChunkDataFromSectionItem';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                offset = argFoo;
                verify = argBar;
                entity = this;
                mike = entity.dirty;
                if(!mike) { _fun00048_ip = 28; continue _fun00047 }
 18:
                mike = entity.fullCompute;
                mike = mike.bind(entity)();
 28:
                zulu = _closure1_slot35;
                mike = entity.dataCache;
                entity = undefined;
                golf = zulu.bind(entity)(mike);
                zulu = golf.bind(entity)();
                mike = zulu.done;
                oscar = null;
                report = true;
                tango = zulu;
                zulu = undefined;
                if(mike) { _fun00048_ip = 267; continue _fun00047 }
 72:
                foxtrot = tango.value;
                yankee = _closure1_slot35;
                mike = foxtrot.data;
                romeo = yankee.bind(entity)(mike);
                yankee = romeo.bind(entity)();
                mike = yankee.done;
                if(mike) { _fun00048_ip = 249; continue _fun00047 }
 106:
                backup = yankee.value;
                kilo = backup.type;
                mike = _closure1_slot21;
                mike = mike.ITEM;
                if(!(mike !== kilo)) { _fun00048_ip = 161; continue _fun00047 }
 130:
                mike = _closure1_slot21;
                mike = mike.SECTION;
                if(!(mike === kilo)) { _fun00048_ip = 228; continue _fun00047 }
 144:
                mike = backup.section;
                if(!(!(mike > offset))) { _fun00048_ip = 159; continue _fun00047 }
 153:
                if(!(oscar == verify)) { _fun00048_ip = 228; continue _fun00047 }
 157:
                return foxtrot;
 159:
                return entity;
 161:
                if(!(oscar != verify)) { _fun00048_ip = 228; continue _fun00047 }
 165:
                mike = backup.uniform;
                if(!(report === mike)) { _fun00048_ip = 184; continue _fun00047 }
 175:
                mike = backup.section;
                if(!(mike !== offset)) { _fun00048_ip = 214; continue _fun00047 }
 184:
                mike = backup.uniform;
                if(!(oscar == mike)) { _fun00048_ip = 228; continue _fun00047 }
 194:
                mike = backup.section;
                if(!(mike === offset)) { _fun00048_ip = 228; continue _fun00047 }
 203:
                mike = backup.item;
                if(!(mike === verify)) { _fun00048_ip = 228; continue _fun00047 }
 212:
                return foxtrot;
 214:
                mike = backup.items;
                if(!(!(verify > mike))) { _fun00048_ip = 226; continue _fun00047 }
 224:
                return foxtrot;
 226:
                return entity;
 228:
                kilo = romeo.bind(entity)();
                mike = kilo.done;
                yankee = kilo;
                zulu = backup;
                if(!mike) { _fun00048_ip = 106; continue _fun00047 }
 249:
                yankee = golf.bind(entity)();
                mike = yankee.done;
                tango = yankee;
                if(!mike) { _fun00048_ip = 72; continue _fun00047 }
 267:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'getChunkIndexFromSectionItem';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                entity = argFoo;
                offset = this;
                mike = entity.chunk;
                verify = entity.targetSection;
                options = entity.targetItem;
                golf = entity.padBottom;
                entity = undefined;
                if(!(golf === entity)) { _fun00050_ip = 43; continue _fun00049 }
 40:
                golf = 16;
 43:
                zulu = _closure1_slot35;
                mike = mike.data;
                report = zulu.bind(entity)(mike);
                zulu = report.bind(entity)();
                mike = zulu.done;
                tango = null;
                if(mike) { _fun00050_ip = 566; continue _fun00049 }
 77:
                yankee = zulu.value;
                romeo = yankee.type;
                mike = _closure1_slot21;
                mike = mike.ITEM;
                if(!(mike !== romeo)) { _fun00050_ip = 247; continue _fun00049 }
 104:
                mike = _closure1_slot21;
                mike = mike.SECTION;
                if(!(mike === romeo)) { _fun00050_ip = 548; continue _fun00049 }
 121:
                if(!(tango == options)) { _fun00050_ip = 548; continue _fun00049 }
 128:
                mike = yankee.section;
                if(!(!(verify < mike))) { _fun00050_ip = 245; continue _fun00049 }
 137:
                mike = yankee.section;
                if(!(verify === mike)) { _fun00050_ip = 548; continue _fun00049 }
 149:
                mike = {};
                romeo = global;
                kilo = romeo.Math;
                backup = kilo.floor;
                sizing = yankee.layoutStart;
                foxtrot = offset.chunkSize;
                foxtrot = sizing / foxtrot;
                foxtrot = backup.bind(kilo)(foxtrot);
                mike['startIndex'] = foxtrot;
                backup = romeo.Math;
                foxtrot = backup.floor;
                kilo = yankee.layoutStart;
                romeo = yankee.layoutSize;
                romeo = kilo + romeo;
                kilo = romeo + golf;
                romeo = offset.chunkSize;
                romeo = kilo / romeo;
                romeo = foxtrot.bind(backup)(romeo);
                mike['endIndex'] = romeo;
                return mike;
 245:
                return entity;
 247:
                mike = yankee.section;
                if(!(mike === verify)) { _fun00050_ip = 548; continue _fun00049 }
 259:
                if(!(tango != options)) { _fun00050_ip = 548; continue _fun00049 }
 266:
                mike = yankee.uniform;
                if(mike) { _fun00050_ip = 416; continue _fun00049 }
 278:
                mike = yankee.item;
                if(!(!(mike >= options))) { _fun00050_ip = 414; continue _fun00049 }
 290:
                mike = yankee.item;
                if(!(mike === options)) { _fun00050_ip = 548; continue _fun00049 }
 302:
                mike = {};
                romeo = global;
                kilo = romeo.Math;
                backup = kilo.floor;
                sizing = yankee.layoutStart;
                foxtrot = yankee.sectionData;
                foxtrot = foxtrot.layoutSize;
                sizing = sizing - foxtrot;
                foxtrot = offset.chunkSize;
                foxtrot = sizing / foxtrot;
                foxtrot = backup.bind(kilo)(foxtrot);
                mike['startIndex'] = foxtrot;
                backup = romeo.Math;
                foxtrot = backup.floor;
                kilo = yankee.layoutStart;
                romeo = yankee.layoutSize;
                romeo = kilo + romeo;
                kilo = romeo + golf;
                romeo = offset.chunkSize;
                romeo = kilo / romeo;
                romeo = foxtrot.bind(backup)(romeo);
                mike['endIndex'] = romeo;
                return mike;
 414:
                return entity;
 416:
                mike = yankee.items;
                if(!(!(options >= mike))) { _fun00050_ip = 546; continue _fun00049 }
 426:
                romeo = yankee.layoutStart;
                mike = yankee.sectionData;
                mike = mike.layoutSize;
                romeo = romeo + mike;
                mike = yankee.itemSize;
                mike = mike * options;
                backup = romeo + mike;
                mike = {};
                romeo = global;
                sizing = romeo.Math;
                kilo = sizing.floor;
                foxtrot = offset.chunkSize;
                foxtrot = backup / foxtrot;
                foxtrot = kilo.bind(sizing)(foxtrot);
                mike['startIndex'] = foxtrot;
                foxtrot = romeo.Math;
                romeo = foxtrot.floor;
                yankee = yankee.itemSize;
                yankee = backup + yankee;
                backup = yankee + golf;
                yankee = offset.chunkSize;
                yankee = backup / yankee;
                yankee = romeo.bind(foxtrot)(yankee);
                mike['endIndex'] = yankee;
                return mike;
 546:
                return entity;
 548:
                yankee = report.bind(entity)();
                mike = yankee.done;
                zulu = yankee;
                if(!mike) { _fun00050_ip = 77; continue _fun00049 }
 566:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'computeScrollPosition';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                romeo = argFoo;
                yankee = argBar;
                offset = argBaz;
                entity = this;
                verify = null;
                if(!(verify != offset)) { _fun00052_ip = 27; continue _fun00051 }
 18:
                mike = 0;
                if(!(!(offset < mike))) { _fun00052_ip = 490; continue _fun00051 }
 27:
                mike = entity.dirty;
                if(!mike) { _fun00052_ip = 46; continue _fun00051 }
 36:
                mike = entity.fullCompute;
                mike = mike.bind(entity)();
 46:
                mike = entity.dataCache;
                options = 0;
                if(!(!(yankee < options))) { _fun00052_ip = 478; continue _fun00051 }
 61:
                entity = _closure1_slot35;
                oscar = undefined;
                report = entity.bind(oscar)(mike);
                mike = report.bind(oscar)();
                entity = mike.done;
                tango = true;
                zulu = mike;
                mike = undefined;
                if(entity) { _fun00052_ip = 490; continue _fun00051 }
 97:
                foxtrot = _closure1_slot35;
                entity = zulu.value;
                entity = entity.data;
                backup = foxtrot.bind(oscar)(entity);
                foxtrot = backup.bind(oscar)();
                entity = foxtrot.done;
                if(entity) { _fun00052_ip = 458; continue _fun00051 }
 131:
                kilo = foxtrot.value;
                sizing = kilo.type;
                entity = _closure1_slot21;
                entity = entity.ITEM;
                if(!(entity !== sizing)) { _fun00052_ip = 232; continue _fun00051 }
 155:
                entity = _closure1_slot21;
                entity = entity.SECTION;
                if(!(entity === sizing)) { _fun00052_ip = 437; continue _fun00051 }
 172:
                entity = kilo.section;
                if(!(!(entity > yankee))) { _fun00052_ip = 230; continue _fun00051 }
 181:
                if(!(verify == offset)) { _fun00052_ip = 437; continue _fun00051 }
 188:
                entity = kilo.section;
                if(!(entity === yankee)) { _fun00052_ip = 437; continue _fun00051 }
 200:
                entity = {};
                sizing = kilo.layoutStart;
                entity['scrollPosition'] = sizing;
                sizing = kilo.layoutSize;
                entity['size'] = sizing;
                entity['sectionOffset'] = options;
                return entity;
 230:
                return oscar;
 232:
                if(!(verify != offset)) { _fun00052_ip = 437; continue _fun00051 }
 239:
                entity = kilo.uniform;
                if(!(tango === entity)) { _fun00052_ip = 258; continue _fun00051 }
 249:
                entity = kilo.section;
                if(!(entity !== yankee)) { _fun00052_ip = 342; continue _fun00051 }
 258:
                entity = kilo.uniform;
                if(!(verify == entity)) { _fun00052_ip = 437; continue _fun00051 }
 271:
                entity = kilo.section;
                if(!(entity === yankee)) { _fun00052_ip = 437; continue _fun00051 }
 283:
                entity = kilo.item;
                if(!(entity === offset)) { _fun00052_ip = 437; continue _fun00051 }
 295:
                entity = {};
                sizing = kilo.layoutStart;
                entity['scrollPosition'] = sizing;
                sizing = kilo.layoutSize;
                entity['size'] = sizing;
                sizing = 0;
                if(!romeo) { _fun00052_ip = 335; continue _fun00051 }
 323:
                output = kilo.sectionData;
                sizing = output.layoutSize;
 335:
                entity['sectionOffset'] = sizing;
                return entity;
 342:
                entity = kilo.items;
                if(!(!(offset > entity))) { _fun00052_ip = 435; continue _fun00051 }
 352:
                entity = {};
                sizing = kilo.sectionData;
                output = sizing.layoutStart;
                sizing = kilo.sectionData;
                sizing = sizing.layoutSize;
                output = output + sizing;
                sizing = kilo.itemSize;
                sizing = sizing * offset;
                sizing = output + sizing;
                entity['scrollPosition'] = sizing;
                sizing = kilo.itemSize;
                entity['size'] = sizing;
                options = 0;
                if(!romeo) { _fun00052_ip = 428; continue _fun00051 }
 416:
                sizing = kilo.sectionData;
                options = sizing.layoutSize;
 428:
                entity['sectionOffset'] = options;
                return entity;
 435:
                return oscar;
 437:
                sizing = backup.bind(oscar)();
                entity = sizing.done;
                foxtrot = sizing;
                mike = kilo;
                if(!entity) { _fun00052_ip = 131; continue _fun00051 }
 458:
                foxtrot = report.bind(oscar)();
                entity = foxtrot.done;
                zulu = foxtrot;
                if(entity) { _fun00052_ip = 490; continue _fun00051 }
 473:
                _fun00052_ip = 97; continue _fun00051;
 478:
                entity = {'scrollPosition': 0, 'size': 0, 'sectionOffset': 0};
                return entity;
 490:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'getSectionItemFromPosition';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                oscar = argFoo;
                backup = arguments[1];
                entity = this;
                foxtrot = undefined;
                if(!(backup === foxtrot)) { _fun00054_ip = 22; continue _fun00053 }
 15:
                backup = _closure1_slot20;
 22:
                mike = entity.dirty;
                if(!mike) { _fun00054_ip = 41; continue _fun00053 }
 31:
                mike = entity.fullCompute;
                mike = mike.bind(entity)();
 41:
                mike = _closure1_slot35;
                entity = entity.items;
                romeo = mike.bind(foxtrot)(entity);
                mike = romeo.bind(foxtrot)();
                entity = mike.done;
                yankee = 0;
                offset = null;
                verify = mike;
                options = 0;
                zulu = undefined;
                mike = 0;
                if(entity) { _fun00054_ip = 199; continue _fun00053 }
 84:
                tango = verify.value;
                entity = tango.layoutStart;
                entity = entity + options;
                golf = backup.get;
                report = tango.recyclerKey;
                sizing = golf.bind(backup)(report);
                report = sizing;
                if(!(offset == report)) { _fun00054_ip = 128; continue _fun00053 }
 122:
                report = tango.layoutSize;
 128:
                if(!(report > yankee)) { _fun00054_ip = 144; continue _fun00053 }
 132:
                if(!(oscar >= entity)) { _fun00054_ip = 144; continue _fun00053 }
 136:
                golf = entity + report;
                if(!(!(oscar <= golf))) { _fun00054_ip = 188; continue _fun00053 }
 144:
                kilo = offset != sizing;
                golf = 0;
                if(!kilo) { _fun00054_ip = 163; continue _fun00053 }
 153:
                kilo = tango.layoutSize;
                golf = sizing - kilo;
 163:
                options = options + golf;
                kilo = romeo.bind(foxtrot)();
                golf = kilo.done;
                verify = kilo;
                zulu = undefined;
                mike = 0;
                if(golf) { _fun00054_ip = 199; continue _fun00053 }
 186:
                _fun00054_ip = 84; continue _fun00053;
 188:
                entity = oscar - entity;
                mike = entity / report;
                zulu = tango;
 199:
                entity = {};
                entity['item'] = zulu;
                entity['positionPercentage'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'setDisableRecycling';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['disableRecycling'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'getSize';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                entity = this;
                mike = entity.dirty;
                if(!mike) { _fun00056_ip = 22; continue _fun00055 }
 12:
                mike = entity.fullCompute;
                mike = mike.bind(entity)();
 22:
                entity = entity.size;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[15] = entity;
        entity = {};
        oscar = 'isDirty';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            entity = entity.dirty;
            return entity;
        };
        entity['value'] = report;
        mike[16] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot23 = tango;
    golf = {};
    yankee = 'function FastListTsx1(){const{scrollPosValue,interpolate,inputRange,outputRange,horizontal}=this.__closure;const interpolatedValue=scrollPosValue!=null?interpolate(scrollPosValue.get(),inputRange,outputRange):null;return{transform:interpolatedValue!=null?[horizontal?{translateX:interpolatedValue}:{translateY:interpolatedValue}]:undefined};}';
    golf['code'] = yankee;
    var _closure1_slot24 = golf;
    yankee = mike.memo;
    golf = function(argFoo) { // Original name: _FastListStickySectionRenderer
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            zulu = argFoo;
            backup = zulu.layoutStart;
            romeo = zulu.layoutSize;
            foxtrot = zulu.horizontal;
            var _closure2_slot0 = foxtrot;
            report = zulu.nextSectionLayoutPosition;
            yankee = zulu.scrollPosValue;
            var _closure2_slot1 = yankee;
            offset = zulu.fastListInstance;
            verify = zulu.section;
            entity = zulu.children;
            tango = zulu.debug;
            zulu = zulu.recyclerKey;
            output = new Array(2);
            tango = -1;
            output[0] = tango;
            oscar = 0;
            output[1] = oscar;
            var _closure2_slot2 = output;
            sizing = [0, 0];
            var _closure2_slot3 = sizing;
            zulu = output.push;
            zulu = zulu.bind(output)(backup);
            zulu = sizing.push;
            zulu = zulu.bind(sizing)(oscar);
            golf = null;
            options = golf != report;
            zulu = 0;
            if(!options) { _fun00058_ip = 143; continue _fun00057 }
 140:
            zulu = report;
 143:
            zulu = zulu - romeo;
            if(!(!(zulu >= backup))) { _fun00058_ip = 180; continue _fun00057 }
 151:
            kilo = output.push;
            options = 1;
            report = backup + options;
            report = kilo.bind(output)(report);
            report = sizing.push;
            report = report.bind(sizing)(options);
            _fun00058_ip = 267; continue _fun00057;
 180:
            kilo = _closure1_slot0;
            options = _closure1_slot2;
            report = 14;
            options = options[report];
            report = undefined;
            options = kilo.bind(report)(options);
            report = options.isAndroid;
            report = report.bind(options)();
            oscar = 0;
            if(!report) { _fun00058_ip = 222; continue _fun00057 }
 219:
            oscar = tango;
 222:
            report = output.push;
            tango = 1;
            tango = zulu + tango;
            tango = report.bind(output)(zulu, tango);
            report = sizing.push;
            tango = zulu - backup;
            tango = tango + oscar;
            zulu = zulu - backup;
            zulu = zulu + oscar;
            zulu = report.bind(sizing)(tango, zulu);
 267:
            echo = _closure1_slot0;
            oscar = _closure1_slot2;
            result = 15;
            zulu = oscar[result];
            tango = undefined;
            options = echo.bind(tango)(zulu);
            zulu = options.useAnimatedStyle;
            mike = function() { // Original name: z
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    entity = _closure2_slot1;
                    mike = null;
                    entity = mike != entity;
                    report = null;
                    if(!entity) { _fun00060_ip = 77; continue _fun00059 }
 18:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 15;
                    tango = tango[entity];
                    entity = undefined;
                    options = oscar.bind(entity)(tango);
                    golf = options.interpolate;
                    tango = _closure2_slot1;
                    entity = tango.get;
                    oscar = entity.bind(tango)();
                    tango = _closure2_slot2;
                    entity = _closure2_slot3;
                    report = golf.bind(options)(oscar, tango, entity);
 77:
                    entity = {};
                    tango = mike != report;
                    mike = undefined;
                    if(!tango) { _fun00060_ip = 126; continue _fun00059 }
 88:
                    tango = _closure2_slot0;
                    zulu = {};
                    if(tango) { _fun00060_ip = 107; continue _fun00059 }
 97:
                    zulu['translateY'] = report;
                    tango = zulu;
                    _fun00060_ip = 115; continue _fun00059;
 107:
                    zulu['translateX'] = report;
                    tango = zulu;
 115:
                    zulu = new Array(1);
                    zulu[0] = tango;
                    mike = zulu;
 126:
                    entity['transform'] = mike;
                    return entity;
                }
            };
            kilo = {};
            kilo['scrollPosValue'] = yankee;
            result = oscar[result];
            result = echo.bind(tango)(result);
            result = result.interpolate;
            kilo['interpolate'] = result;
            kilo['inputRange'] = output;
            kilo['outputRange'] = sizing;
            kilo['horizontal'] = foxtrot;
            mike['__closure'] = kilo;
            kilo = 699810682881.0;
            mike['__workletHash'] = kilo;
            kilo = _closure1_slot24;
            mike['__initData'] = kilo;
            options = zulu.bind(options)(mike);
            mike = _closure1_slot11;
            zulu = mike.Children;
            mike = zulu.only;
            config = undefined;
            sequence = verify;
            vacuum = offset;
            control = yankee;
            source = backup;
            entity = config[entity](sequence, vacuum, control, source, update);
            offset = mike.bind(zulu)(entity);
            zulu = _closure1_slot15;
            mike = _closure1_slot1;
            entity = 16;
            entity = oscar[entity];
            mike = mike.bind(tango)(entity);
            entity = {'style': null, 'collapsable': false, 'preventClipping': true};
            oscar = golf == offset;
            verify = undefined;
            if(oscar) { _fun00058_ip = 481; continue _fun00057 }
 462:
            oscar = offset.props;
            yankee = golf == oscar;
            verify = undefined;
            if(yankee) { _fun00058_ip = 481; continue _fun00057 }
 476:
            verify = oscar.style;
 481:
            oscar = new Array(3);
            oscar[0] = verify;
            verify = {'zIndex': 10, 'position': 'relative'};
            yankee = undefined;
            if(foxtrot) { _fun00058_ip = 507; continue _fun00057 }
 504:
            yankee = romeo;
 507:
            verify['height'] = yankee;
            yankee = undefined;
            if(!foxtrot) { _fun00058_ip = 519; continue _fun00057 }
 516:
            yankee = romeo;
 519:
            verify['width'] = yankee;
            oscar[1] = verify;
            oscar[2] = options;
            entity['style'] = oscar;
            oscar = false;
            options = golf != offset;
            golf = undefined;
            if(!options) { _fun00058_ip = 579; continue _fun00057 }
 548:
            verify = _closure1_slot11;
            options = verify.cloneElement;
            report = {};
            yankee = {};
            romeo = 1;
            yankee['flex'] = romeo;
            report['style'] = yankee;
            golf = options.bind(verify)(offset, report);
 579:
            report = new Array(2);
            report[0] = golf;
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    golf = yankee.bind(mike)(golf);
    var _closure1_slot25 = golf;
    yankee = mike.memo;
    golf = function(argFoo) { // Original name: _FastListSectionRenderer
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            zulu = argFoo;
            romeo = zulu.layoutSize;
            offset = zulu.horizontal;
            mike = zulu.disableWrapper;
            verify = zulu.children;
            options = zulu.fastListInstance;
            oscar = zulu.section;
            entity = zulu.debug;
            zulu = zulu.recyclerKey;
            if(!mike) { _fun00062_ip = 88; continue _fun00061 }
 52:
            if(entity) { _fun00062_ip = 88; continue _fun00061 }
 55:
            tango = _closure1_slot16;
            zulu = _closure1_slot17;
            mike = {};
            entity = undefined;
            report = verify.bind(entity)(oscar, options);
            mike['children'] = report;
            entity = tango.bind(entity)(zulu, mike);
            _fun00062_ip = 184; continue _fun00061;
 88:
            report = _closure1_slot15;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 12;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {'collapsable': false, 'style': null, 'preventClipping': true};
            golf = false;
            yankee = {};
            if(offset) { _fun00062_ip = 143; continue _fun00061 }
 134:
            yankee['height'] = romeo;
            offset = yankee;
            _fun00062_ip = 150; continue _fun00061;
 143:
            yankee['width'] = romeo;
            offset = yankee;
 150:
            mike['style'] = offset;
            options = verify.bind(tango)(oscar, options);
            oscar = new Array(2);
            oscar[0] = options;
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = report.bind(tango)(zulu, mike);
 184:
            return entity;
        }
    };
    golf = yankee.bind(mike)(golf);
    var _closure1_slot26 = golf;
    yankee = mike.memo;
    golf = function(argFoo) { // Original name: _FastListSectionFooterRenderer
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            zulu = argFoo;
            romeo = zulu.layoutSize;
            offset = zulu.horizontal;
            mike = zulu.disableWrapper;
            verify = zulu.fastListInstance;
            options = zulu.children;
            oscar = zulu.section;
            entity = zulu.debug;
            zulu = zulu.recyclerKey;
            if(!mike) { _fun00064_ip = 88; continue _fun00063 }
 52:
            if(entity) { _fun00064_ip = 88; continue _fun00063 }
 55:
            tango = _closure1_slot16;
            zulu = _closure1_slot17;
            mike = {};
            entity = undefined;
            report = options.bind(entity)(oscar, verify);
            mike['children'] = report;
            entity = tango.bind(entity)(zulu, mike);
            _fun00064_ip = 179; continue _fun00063;
 88:
            report = _closure1_slot15;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 12;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            golf = false;
            mike['collapsable'] = golf;
            yankee = {};
            if(offset) { _fun00064_ip = 140; continue _fun00063 }
 131:
            yankee['height'] = romeo;
            offset = yankee;
            _fun00064_ip = 147; continue _fun00063;
 140:
            yankee['width'] = romeo;
            offset = yankee;
 147:
            mike['style'] = offset;
            options = options.bind(tango)(oscar, verify);
            oscar = new Array(2);
            oscar[0] = options;
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = report.bind(tango)(zulu, mike);
 179:
            return entity;
        }
    };
    golf = yankee.bind(mike)(golf);
    var _closure1_slot27 = golf;
    yankee = mike.memo;
    golf = function(argFoo) { // Original name: _FastListItemRenderer
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            zulu = argFoo;
            foxtrot = zulu.layoutSize;
            options = zulu.horizontal;
            mike = zulu.disableWrapper;
            yankee = zulu.children;
            offset = zulu.section;
            verify = zulu.fastListInstance;
            oscar = zulu.item;
            entity = zulu.debug;
            zulu = zulu.recyclerKey;
            if(!mike) { _fun00066_ip = 105; continue _fun00065 }
 57:
            if(entity) { _fun00066_ip = 105; continue _fun00065 }
 60:
            tango = _closure1_slot16;
            zulu = _closure1_slot17;
            mike = {};
            entity = null;
            golf = entity == yankee;
            entity = undefined;
            report = undefined;
            if(golf) { _fun00066_ip = 93; continue _fun00065 }
 86:
            report = yankee.bind(entity)(offset, oscar, verify);
 93:
            mike['children'] = report;
            entity = tango.bind(entity)(zulu, mike);
            _fun00066_ip = 208; continue _fun00065;
 105:
            report = _closure1_slot15;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 12;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            golf = false;
            mike['collapsable'] = golf;
            romeo = {};
            if(options) { _fun00066_ip = 157; continue _fun00065 }
 148:
            romeo['height'] = foxtrot;
            options = romeo;
            _fun00066_ip = 164; continue _fun00065;
 157:
            romeo['width'] = foxtrot;
            options = romeo;
 164:
            mike['style'] = options;
            options = null;
            romeo = options == yankee;
            options = undefined;
            if(romeo) { _fun00066_ip = 186; continue _fun00065 }
 179:
            options = yankee.bind(tango)(offset, oscar, verify);
 186:
            oscar = new Array(2);
            oscar[0] = options;
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = report.bind(tango)(zulu, mike);
 208:
            return entity;
        }
    };
    golf = yankee.bind(mike)(golf);
    var _closure1_slot28 = golf;
    yankee = mike.memo;
    golf = function(argFoo) { // Original name: _FastListHeaderFooterRenderer
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            zulu = argFoo;
            yankee = zulu.layoutSize;
            verify = zulu.horizontal;
            mike = zulu.disableWrapper;
            options = zulu.children;
            oscar = zulu.fastListInstance;
            entity = zulu.debug;
            zulu = zulu.recyclerKey;
            if(!mike) { _fun00068_ip = 82; continue _fun00067 }
 47:
            if(entity) { _fun00068_ip = 82; continue _fun00067 }
 50:
            tango = _closure1_slot16;
            zulu = _closure1_slot17;
            mike = {};
            entity = undefined;
            report = options.bind(entity)(oscar);
            mike['children'] = report;
            entity = tango.bind(entity)(zulu, mike);
            _fun00068_ip = 177; continue _fun00067;
 82:
            report = _closure1_slot15;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 12;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {'collapsable': false, 'style': null, 'preventClipping': true};
            golf = false;
            offset = {};
            if(verify) { _fun00068_ip = 137; continue _fun00067 }
 128:
            offset['height'] = yankee;
            verify = offset;
            _fun00068_ip = 144; continue _fun00067;
 137:
            offset['width'] = yankee;
            verify = offset;
 144:
            mike['style'] = verify;
            options = options.bind(tango)(oscar);
            oscar = new Array(2);
            oscar[0] = options;
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = report.bind(tango)(zulu, mike);
 177:
            return entity;
        }
    };
    golf = yankee.bind(mike)(golf);
    var _closure1_slot29 = golf;
    yankee = mike.memo;
    golf = function(argFoo) { // Original name: _FastListSpacer
        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
            entity = argFoo;
            golf = entity.layoutSize;
            report = entity.horizontal;
            tango = _closure1_slot16;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 12;
            entity = zulu[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = {};
            oscar = false;
            entity['collapsable'] = oscar;
            oscar = {};
            if(report) { _fun00070_ip = 67; continue _fun00069 }
 58:
            oscar['height'] = golf;
            report = oscar;
            _fun00070_ip = 74; continue _fun00069;
 67:
            oscar['width'] = golf;
            report = oscar;
 74:
            entity['style'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    golf = yankee.bind(mike)(golf);
    var _closure1_slot30 = golf;
    golf = function() {
        tango = _closure1_slot10;
        zulu = function(argFoo) { // Original name: FastListScrollAnchor
            zulu = this;
            tango = _closure1_slot9;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['getScrollPosition'] = mike;
            mike = false;
            zulu['isCustomAnchor'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'hasAnchor';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            mike = entity.anchorId;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        oscar = 'cleanAnchor';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                zulu = arguments[0];
                mike = this;
                entity = undefined;
                if(!(zulu === entity)) { _fun00072_ip = 14; continue _fun00071 }
 12:
                zulu = false;
 14:
                zulu = !zulu;
                if(!zulu) { _fun00072_ip = 26; continue _fun00071 }
 20:
                zulu = mike.isCustomAnchor;
 26:
                if(zulu) { _fun00072_ip = 49; continue _fun00071 }
 29:
                zulu = false;
                mike['isCustomAnchor'] = zulu;
                mike['anchorId'] = entity;
                mike['anchorOffset'] = entity;
 49:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'handleUserScroll';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            mike = zulu.cleanAnchor;
            entity = true;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'setCustomAnchor';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                tango = this;
                zulu = true;
                tango['isCustomAnchor'] = zulu;
                entity = argBar;
                tango['anchorOffset'] = entity;
                oscar = argFoo;
                entity = undefined;
                report = argBaz;
                mike = argCorge;
                mike = oscar.bind(entity)(report, mike);
                tango['anchorId'] = mike;
                report = tango.anchorId;
                mike = null;
                if(!(mike == report)) { _fun00074_ip = 66; continue _fun00073 }
 55:
                mike = tango.cleanAnchor;
                mike = mike.bind(tango)(zulu);
 66:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'findOrUpdateAnchor';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                romeo = argFoo;
                zulu = this;
                entity = zulu.getScrollPosition;
                tango = entity.bind(zulu)();
                entity = zulu.cleanAnchor;
                entity = entity.bind(zulu)();
                report = _closure1_slot35;
                entity = undefined;
                mike = argBar;
                offset = report.bind(entity)(mike);
                report = offset.bind(entity)();
                mike = report.done;
                verify = null;
                golf = report;
                oscar = undefined;
                if(mike) { _fun00076_ip = 267; continue _fun00075 }
 65:
                mike = golf.value;
                backup = mike.type;
                report = _closure1_slot21;
                report = report.ITEM;
                foxtrot = oscar;
                if(!(backup === report)) { _fun00076_ip = 224; continue _fun00075 }
 95:
                report = zulu.isCustomAnchor;
                if(!report) { _fun00076_ip = 145; continue _fun00075 }
 104:
                backup = zulu.anchorId;
                sizing = mike.section;
                kilo = mike.item;
                output = verify != kilo;
                report = 0;
                if(!output) { _fun00076_ip = 132; continue _fun00075 }
 129:
                report = kilo;
 132:
                report = romeo.bind(entity)(sizing, report);
                oscar = kilo;
                if(!(backup !== report)) { _fun00076_ip = 247; continue _fun00075 }
 145:
                report = zulu.isCustomAnchor;
                foxtrot = oscar;
                if(report) { _fun00076_ip = 224; continue _fun00075 }
 157:
                report = mike.layoutStart;
                foxtrot = oscar;
                if(!(report >= tango)) { _fun00076_ip = 224; continue _fun00075 }
 170:
                report = mike.layoutStart;
                report = report - tango;
                zulu['anchorOffset'] = report;
                report = mike.section;
                backup = mike.item;
                kilo = verify != backup;
                options = 0;
                if(!kilo) { _fun00076_ip = 208; continue _fun00075 }
 205:
                options = backup;
 208:
                report = romeo.bind(entity)(report, options);
                zulu['anchorId'] = report;
                report = undefined;
                return report;
 224:
                backup = offset.bind(entity)();
                report = backup.done;
                oscar = foxtrot;
                golf = backup;
                if(report) { _fun00076_ip = 267; continue _fun00075 }
 242:
                _fun00076_ip = 65; continue _fun00075;
 247:
                mike = mike.layoutStart;
                mike = mike - tango;
                zulu['anchorOffset'] = mike;
                mike = undefined;
                return mike;
 267:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getAnchorIndex';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                zulu = this;
                mike = zulu.anchorId;
                entity = null;
                if(!(entity == mike)) { _fun00078_ip = 19; continue _fun00077 }
 15:
                entity = undefined;
                return entity;
 19:
                tango = zulu.anchorId;
                mike = argFoo;
                entity = undefined;
                entity = mike.bind(entity)(tango);
                mike = zulu.cleanAnchor;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        entity['value'] = report;
        mike[5] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    golf = golf.bind(entity)();
    var _closure1_slot31 = golf;
    golf = {};
    yankee = 'function FastListTsx2(event){const{horizontal,workletMounted,scrollPosValue}=this.__closure;const scrollPosition=!horizontal?event.contentOffset.y:event.contentOffset.x;const contentSize=!horizontal?event.contentSize.height:event.contentSize.width;if(contentSize===0&&!workletMounted.get())return;workletMounted.set(true);scrollPosValue.set(Math.min(scrollPosition,contentSize));}';
    golf['code'] = yankee;
    var _closure1_slot32 = golf;
    golf = mike.PureComponent;
    mike = function(argFoo) {
        report = function(argFoo) { // Original name: FastList
            _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                report = this;
                entity = _closure1_slot9;
                tango = _closure2_slot0;
                oscar = undefined;
                entity = entity.bind(oscar)(report, tango);
                zulu = _closure1_slot33;
                entity = new Array(1);
                options = argFoo;
                entity[0] = options;
                entity = zulu.bind(oscar)(report, tango, entity);
                var _closure3_slot0 = entity;
                tango = 0;
                entity['containerSize'] = tango;
                entity['scrollPos'] = tango;
                report = _closure1_slot0;
                options = _closure1_slot2;
                zulu = 17;
                zulu = options[zulu];
                report = report.bind(oscar)(zulu);
                zulu = report.createFakeSharedValue;
                zulu = zulu.bind(report)(tango);
                entity['scrollPosValue'] = zulu;
                zulu = entity.props;
                report = zulu.manualRef;
                zulu = null;
                if(!(zulu == report)) { _fun00080_ip = 135; continue _fun00079 }
 121:
                verify = _closure1_slot11;
                options = verify.createRef;
                report = options.bind(verify)();
 135:
                entity['scrollView'] = report;
                report = function() {
                    entity = _closure3_slot0;
                    entity = entity.state;
                    entity = entity.items;
                    return entity;
                };
                entity['getItems'] = report;
                report = function() {
                    entity = _closure3_slot0;
                    entity = entity.scrollPos;
                    return entity;
                };
                entity['getScrollPosition'] = report;
                entity['disableAnchoringTimeout'] = oscar;
                entity['viewTag'] = zulu;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                report = 15;
                report = verify[report];
                verify = options.bind(oscar)(report);
                report = verify.makeMutable;
                options = false;
                report = report.bind(verify)(options);
                entity['workletMounted'] = report;
                report = -1;
                entity['deferredCompute'] = report;
                entity['deferNextCompute'] = options;
                offset = _closure1_slot31;
                vacuum = entity.getScrollPosition;
                verify = offset.prototype;
                verify = Object.create(verify, {constructor: {value: offset}});
                sequence = verify;
                options = new sequence[offset](vacuum, control);
                options = options instanceof Object ? options : verify;
                entity['scrollAnchor'] = options;
                entity['viewabilityDebounce'] = report;
                report = new Array(0);
                entity['previouslyViewableItems'] = report;
                report = function(argFoo) {
                    _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                        zulu = argFoo;
                        entity = _closure3_slot0;
                        entity = entity.props;
                        tango = entity.horizontal;
                        entity = {};
                        report = 0;
                        if(!tango) { _fun00082_ip = 31; continue _fun00081 }
 28:
                        report = zulu;
 31:
                        entity['x'] = report;
                        mike = 0;
                        if(tango) { _fun00082_ip = 43; continue _fun00081 }
 40:
                        mike = zulu;
 43:
                        entity['y'] = mike;
                        return entity;
                    }
                };
                entity['_scrollPositionToPoint'] = report;
                report = function(argFoo) {
                    _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                        mike = argFoo;
                        yankee = mike.itemCoords;
                        options = mike.fullSize;
                        foxtrot = mike.orientation;
                        entity = undefined;
                        if(!(foxtrot === entity)) { _fun00084_ip = 31; continue _fun00083 }
 27:
                        foxtrot = 'top';
 31:
                        report = mike.paddingStart;
                        if(!(report === entity)) { _fun00084_ip = 43; continue _fun00083 }
 41:
                        report = 0;
 43:
                        verify = mike.paddingEnd;
                        if(!(verify === entity)) { _fun00084_ip = 55; continue _fun00083 }
 53:
                        verify = 0;
 55:
                        zulu = yankee.scrollPosition;
                        oscar = yankee.size;
                        mike = yankee.sectionOffset;
                        entity = _closure3_slot0;
                        entity = entity.containerSize;
                        tango = 0;
                        if(!(!(entity > tango))) { _fun00084_ip = 122; continue _fun00083 }
 91:
                        entity = _closure3_slot0;
                        entity = entity.props;
                        golf = entity.chunkBase;
                        entity = null;
                        romeo = entity != golf;
                        entity = 0;
                        if(!romeo) { _fun00084_ip = 120; continue _fun00083 }
 117:
                        entity = golf;
 120:
                        _fun00084_ip = 132; continue _fun00083;
 122:
                        golf = _closure3_slot0;
                        entity = golf.containerSize;
 132:
                        if(!(oscar >= entity)) { _fun00084_ip = 140; continue _fun00083 }
 136:
                        foxtrot = 'top';
 140:
                        golf = 'visible';
                        if(!(golf !== foxtrot)) { _fun00084_ip = 248; continue _fun00083 }
 148:
                        golf = 'top';
                        if(!(golf !== foxtrot)) { _fun00084_ip = 238; continue _fun00083 }
 156:
                        romeo = 'center';
                        golf = zulu;
                        if(!(romeo === foxtrot)) { _fun00084_ip = 336; continue _fun00083 }
 170:
                        backup = yankee.scrollPosition;
                        foxtrot = global;
                        sizing = foxtrot.Math;
                        kilo = sizing.floor;
                        romeo = yankee.size;
                        yankee = 2;
                        romeo = romeo / yankee;
                        romeo = kilo.bind(sizing)(romeo);
                        romeo = backup + romeo;
                        backup = foxtrot.Math;
                        foxtrot = backup.floor;
                        yankee = entity / yankee;
                        yankee = foxtrot.bind(backup)(yankee);
                        golf = romeo - yankee;
                        _fun00084_ip = 336; continue _fun00083;
 238:
                        yankee = mike + report;
                        golf = zulu - yankee;
                        _fun00084_ip = 336; continue _fun00083;
 248:
                        romeo = zulu + mike;
                        yankee = _closure3_slot0;
                        yankee = yankee.scrollPos;
                        yankee = yankee + report;
                        if(!(romeo >= yankee)) { _fun00084_ip = 296; continue _fun00083 }
 270:
                        romeo = zulu + oscar;
                        yankee = _closure3_slot0;
                        foxtrot = yankee.scrollPos;
                        yankee = entity - verify;
                        yankee = foxtrot + yankee;
                        if(!(!(romeo <= yankee))) { _fun00084_ip = 378; continue _fun00083 }
 296:
                        if(!(!(oscar > entity))) { _fun00084_ip = 328; continue _fun00083 }
 300:
                        offset = _closure3_slot0;
                        offset = offset.scrollPos;
                        if(!(!(zulu < offset))) { _fun00084_ip = 328; continue _fun00083 }
 314:
                        oscar = zulu + oscar;
                        oscar = oscar + verify;
                        golf = oscar - entity;
                        _fun00084_ip = 336; continue _fun00083;
 328:
                        mike = mike + report;
                        golf = zulu - mike;
 336:
                        report = global;
                        zulu = report.Math;
                        mike = zulu.max;
                        oscar = report.Math;
                        report = oscar.min;
                        entity = options - entity;
                        entity = report.bind(oscar)(golf, entity);
                        entity = mike.bind(zulu)(tango, entity);
                        return entity;
 378:
                        entity = null;
                        return entity;
                    }
                };
                entity['_calculateScrollPosition'] = report;
                verify = entity.props;
                report = verify.chunkBase;
                update = verify.headerSize;
                echo = verify.footerSize;
                result = verify.sectionSize;
                output = verify.itemSize;
                sizing = verify.sectionFooterSize;
                kilo = verify.sections;
                backup = verify.insetStart;
                foxtrot = verify.insetEnd;
                options = verify.stickyHeaderFooter;
                romeo = oscar !== options;
                if(!romeo) { _fun00080_ip = 391; continue _fun00079 }
 388:
                romeo = options;
 391:
                yankee = verify.getRecyclerKey;
                options = verify.persistantKeys;
                offset = verify.disableRecyclingOnFullCompute;
                verify = _closure1_slot23;
                golf = {};
                golf['headerSize'] = update;
                golf['footerSize'] = echo;
                golf['sectionSize'] = result;
                golf['itemSize'] = output;
                golf['sectionFooterSize'] = sizing;
                golf['sections'] = kilo;
                golf['insetStart'] = backup;
                golf['insetEnd'] = foxtrot;
                golf['stickyHeaderFooter'] = romeo;
                golf['getRecyclerKey'] = yankee;
                golf['persistantKeys'] = options;
                options = oscar !== offset;
                if(!options) { _fun00080_ip = 480; continue _fun00079 }
 477:
                options = offset;
 480:
                golf['disableRecyclingOnFullCompute'] = options;
                options = verify.prototype;
                options = Object.create(options, {constructor: {value: verify}});
                sequence = options;
                vacuum = golf;
                golf = new sequence[verify](vacuum, control);
                verify = golf instanceof Object ? golf : options;
                options = entity.getInitialState;
                offset = zulu != report;
                golf = 0;
                if(!offset) { _fun00080_ip = 526; continue _fun00079 }
 523:
                golf = report;
 526:
                report = true;
                report = options.bind(entity)(golf, verify, report);
                entity['state'] = report;
                report = function() {
                    _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                        entity = _closure3_slot0;
                        entity = entity.props;
                        zulu = entity.onViewableItemsChanged;
                        entity = null;
                        if(!(entity != zulu)) { _fun00086_ip = 299; continue _fun00085 }
 27:
                        entity = _closure3_slot0;
                        mike = entity.getViewabilityConfig;
                        mike = mike.bind(entity)();
                        romeo = mike.visibilityThreshold;
                        mike = entity.state;
                        golf = mike.items;
                        yankee = entity.scrollPos;
                        mike = entity.scrollPos;
                        entity = entity.containerSize;
                        offset = mike + entity;
                        mike = new Array(0);
                        oscar = _closure1_slot35;
                        entity = undefined;
                        verify = oscar.bind(entity)(golf);
                        golf = verify.bind(entity)();
                        oscar = golf.done;
                        options = global;
                        if(oscar) { _fun00086_ip = 239; continue _fun00085 }
 115:
                        oscar = golf.value;
                        foxtrot = oscar.layoutStart;
                        if(!(!(foxtrot > offset))) { _fun00086_ip = 239; continue _fun00085 }
 130:
                        kilo = options.Math;
                        backup = kilo.max;
                        foxtrot = oscar.layoutStart;
                        backup = backup.bind(kilo)(foxtrot, yankee);
                        sizing = options.Math;
                        kilo = sizing.min;
                        output = oscar.layoutStart;
                        foxtrot = oscar.layoutSize;
                        foxtrot = output + foxtrot;
                        foxtrot = kilo.bind(sizing)(foxtrot, offset);
                        if(!(!(backup >= foxtrot))) { _fun00086_ip = 224; continue _fun00085 }
 190:
                        backup = foxtrot - backup;
                        foxtrot = oscar.layoutSize;
                        foxtrot = backup / foxtrot;
                        if(!(foxtrot >= romeo)) { _fun00086_ip = 224; continue _fun00085 }
 208:
                        foxtrot = mike.push;
                        oscar = oscar.recyclerKey;
                        oscar = foxtrot.bind(mike)(oscar);
 224:
                        foxtrot = verify.bind(entity)();
                        oscar = foxtrot.done;
                        golf = foxtrot;
                        if(!oscar) { _fun00086_ip = 115; continue _fun00085 }
 239:
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        report = 11;
                        report = golf[report];
                        golf = oscar.bind(entity)(report);
                        oscar = golf.areArraysShallowEqual;
                        report = _closure3_slot0;
                        report = report.previouslyViewableItems;
                        report = oscar.bind(golf)(mike, report);
                        if(report) { _fun00086_ip = 299; continue _fun00085 }
 284:
                        tango = _closure3_slot0;
                        tango['previouslyViewableItems'] = mike;
                        entity = zulu.bind(entity)(mike);
 299:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleViewabilityChange'] = report;
                report = function(argFoo) {
                    _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                        zulu = argFoo;
                        entity = _closure3_slot0;
                        entity = entity.scrollPos;
                        entity = zulu >= entity;
                        if(!entity) { _fun00088_ip = 47; continue _fun00087 }
 23:
                        mike = _closure3_slot0;
                        tango = mike.scrollPos;
                        mike = mike.containerSize;
                        mike = tango + mike;
                        entity = zulu <= mike;
 47:
                        return entity;
                    }
                };
                entity['isVisible'] = report;
                report = function() {
                    _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                        report = arguments[0];
                        entity = undefined;
                        if(!(report === entity)) { _fun00090_ip = 11; continue _fun00089 }
 9:
                        report = true;
 11:
                        mike = _closure3_slot0;
                        zulu = mike.scrollView;
                        oscar = null;
                        mike = oscar == zulu;
                        tango = zulu;
                        if(mike) { _fun00090_ip = 48; continue _fun00089 }
 36:
                        zulu = zulu.current;
                        mike = oscar == zulu;
                        tango = zulu;
 48:
                        if(mike) { _fun00090_ip = 77; continue _fun00089 }
 51:
                        zulu = tango.scrollTo;
                        mike = {'x': 0, 'y': 0};
                        mike['animated'] = report;
                        mike = zulu.bind(tango)(mike);
 77:
                        return entity;
                    }
                };
                entity['scrollToTop'] = report;
                report = function(argFoo) {
                    _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
                        entity = argFoo;
                        yankee = entity.section;
                        offset = entity.item;
                        oscar = entity.animated;
                        sizing = undefined;
                        if(!(oscar === sizing)) { _fun00092_ip = 27; continue _fun00091 }
 25:
                        oscar = false;
 27:
                        kilo = entity.orientation;
                        if(!(kilo === sizing)) { _fun00092_ip = 41; continue _fun00091 }
 37:
                        kilo = 'top';
 41:
                        backup = entity.paddingStart;
                        if(!(backup === sizing)) { _fun00092_ip = 53; continue _fun00091 }
 51:
                        backup = 0;
 53:
                        foxtrot = entity.paddingEnd;
                        if(!(foxtrot === sizing)) { _fun00092_ip = 65; continue _fun00091 }
 63:
                        foxtrot = 0;
 65:
                        golf = entity.setAnchor;
                        if(!(golf === sizing)) { _fun00092_ip = 77; continue _fun00091 }
 75:
                        golf = false;
 77:
                        entity = _closure3_slot0;
                        entity = entity.scrollView;
                        tango = entity.current;
                        entity = null;
                        if(!(entity != tango)) { _fun00092_ip = 455; continue _fun00091 }
 104:
                        zulu = _closure3_slot0;
                        mike = zulu.props;
                        verify = mike.getAnchorIdFromIndex;
                        romeo = mike.stickySectionsVariant;
                        options = 'default';
                        mike = options;
                        if(!(sizing !== romeo)) { _fun00092_ip = 139; continue _fun00091 }
 136:
                        mike = romeo;
 139:
                        zulu = zulu.state;
                        output = zulu.fastListComputer;
                        zulu = output.computeScrollPosition;
                        mike = options === mike;
                        mike = zulu.bind(output)(mike, yankee, offset);
                        if(!(entity != mike)) { _fun00092_ip = 451; continue _fun00091 }
 174:
                        zulu = 'visible';
                        if(!(zulu === kilo)) { _fun00092_ip = 209; continue _fun00091 }
 182:
                        romeo = _closure3_slot0;
                        options = romeo.isVisible;
                        zulu = mike.scrollPosition;
                        zulu = options.bind(romeo)(zulu);
                        if(zulu) { _fun00092_ip = 447; continue _fun00091 }
 209:
                        romeo = _closure3_slot0;
                        options = romeo._calculateScrollPosition;
                        zulu = {};
                        zulu['itemCoords'] = mike;
                        sizing = output.getSize;
                        sizing = sizing.bind(output)();
                        zulu['fullSize'] = sizing;
                        zulu['orientation'] = kilo;
                        zulu['paddingStart'] = backup;
                        zulu['paddingEnd'] = foxtrot;
                        options = options.bind(romeo)(zulu);
                        zulu = !oscar;
                        if(!zulu) { _fun00092_ip = 270; continue _fun00091 }
 267:
                        zulu = golf;
 270:
                        if(!zulu) { _fun00092_ip = 277; continue _fun00091 }
 273:
                        zulu = entity != verify;
 277:
                        if(!zulu) { _fun00092_ip = 336; continue _fun00091 }
 280:
                        zulu = _closure3_slot0;
                        golf = zulu.scrollAnchor;
                        zulu = golf.setCustomAnchor;
                        romeo = mike.scrollPosition;
                        foxtrot = entity != options;
                        mike = 0;
                        if(!foxtrot) { _fun00092_ip = 316; continue _fun00091 }
 313:
                        mike = options;
 316:
                        update = romeo - mike;
                        control = golf;
                        source = verify;
                        echo = yankee;
                        result = offset;
                        mike = control[zulu](source, update, echo, result, output);
 336:
                        entity = entity != options;
                        if(!entity) { _fun00092_ip = 357; continue _fun00091 }
 343:
                        mike = _closure3_slot0;
                        mike = mike.scrollPos;
                        entity = options !== mike;
 357:
                        if(!entity) { _fun00092_ip = 445; continue _fun00091 }
 360:
                        if(oscar) { _fun00092_ip = 399; continue _fun00091 }
 363:
                        zulu = _closure3_slot0;
                        golf = zulu.scrollPosValue;
                        mike = golf.set;
                        mike = mike.bind(golf)(options);
                        zulu['scrollPos'] = options;
                        mike = zulu.computeBlocks;
                        mike = mike.bind(zulu)();
 399:
                        zulu = tango.scrollTo;
                        mike = {};
                        golf = _closure3_slot0;
                        report = golf._scrollPositionToPoint;
                        update = report.bind(golf)(options);
                        source = mike;
                        report = copyDataProperties(source, update);
                        report = 'animated';
                        mike[report] = oscar;
                        mike = zulu.bind(tango)(mike);
                        entity = true;
 445:
                        return entity;
 447:
                        entity = false;
                        return entity;
 451:
                        entity = false;
                        return entity;
 455:
                        entity = false;
                        return entity;
                    }
                };
                entity['scrollToLocation'] = report;
                report = function(argFoo) {
                    _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
                        verify = argFoo;
                        golf = arguments[1];
                        entity = undefined;
                        if(!(golf === entity)) { _fun00094_ip = 14; continue _fun00093 }
 12:
                        golf = false;
 14:
                        entity = _closure3_slot0;
                        mike = entity.scrollView;
                        report = mike.current;
                        entity = entity.state;
                        zulu = entity.fastListComputer;
                        entity = null;
                        entity = entity != report;
                        if(!entity) { _fun00094_ip = 149; continue _fun00093 }
 52:
                        mike = zulu.getSize;
                        zulu = mike.bind(zulu)();
                        mike = _closure3_slot0;
                        mike = mike.containerSize;
                        mike = zulu - mike;
                        mike = verify <= mike;
                        if(!mike) { _fun00094_ip = 97; continue _fun00093 }
 83:
                        zulu = _closure3_slot0;
                        zulu = zulu.scrollPos;
                        mike = verify !== zulu;
 97:
                        if(!mike) { _fun00094_ip = 146; continue _fun00093 }
 100:
                        tango = report.scrollTo;
                        zulu = {};
                        options = _closure3_slot0;
                        oscar = options._scrollPositionToPoint;
                        offset = oscar.bind(options)(verify);
                        yankee = zulu;
                        oscar = copyDataProperties(yankee, offset);
                        oscar = 'animated';
                        zulu[oscar] = golf;
                        zulu = tango.bind(report)(zulu);
                        mike = true;
 146:
                        entity = mike;
 149:
                        return entity;
                    }
                };
                entity['scrollTo'] = report;
                report = function(argFoo) {
                    _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                        options = argFoo;
                        zulu = _closure3_slot0;
                        tango = zulu.props;
                        golf = tango.contentInset;
                        entity = undefined;
                        if(!(entity === golf)) { _fun00096_ip = 36; continue _fun00095 }
 29:
                        golf = _closure1_slot19;
 36:
                        verify = tango.horizontal;
                        kilo = tango.onScroll;
                        oscar = tango.onEndReached;
                        romeo = tango.endReachedThreshold;
                        tango = tango.EXPERIMENTAL_enableAnchorWhileScrolling;
                        backup = entity !== tango;
                        if(!backup) { _fun00096_ip = 76; continue _fun00095 }
 73:
                        backup = tango;
 76:
                        zulu = zulu.state;
                        update = zulu.fastListComputer;
                        tango = zulu.hasReachedEndBefore;
                        zulu = options.nativeEvent;
                        zulu = zulu.layoutMeasurement;
                        if(verify) { _fun00096_ip = 114; continue _fun00095 }
 107:
                        offset = zulu.height;
                        _fun00096_ip = 119; continue _fun00095;
 114:
                        offset = zulu.width;
 119:
                        if(verify) { _fun00096_ip = 129; continue _fun00095 }
 122:
                        sizing = golf.top;
                        _fun00096_ip = 134; continue _fun00095;
 129:
                        sizing = golf.left;
 134:
                        foxtrot = null;
                        output = foxtrot != sizing;
                        report = 0;
                        zulu = 0;
                        if(!output) { _fun00096_ip = 150; continue _fun00095 }
 147:
                        zulu = sizing;
 150:
                        if(verify) { _fun00096_ip = 160; continue _fun00095 }
 153:
                        sizing = golf.bottom;
                        _fun00096_ip = 165; continue _fun00095;
 160:
                        sizing = golf.right;
 165:
                        output = foxtrot != sizing;
                        golf = 0;
                        if(!output) { _fun00096_ip = 177; continue _fun00095 }
 174:
                        golf = sizing;
 177:
                        sizing = _closure3_slot0;
                        zulu = offset - zulu;
                        zulu = zulu - golf;
                        sizing['containerSize'] = zulu;
                        zulu = global;
                        echo = zulu.Math;
                        result = echo.min;
                        source = zulu.Math;
                        output = source.max;
                        golf = sizing.getScrollPositionFromEvent;
                        golf = golf.bind(sizing)(options);
                        output = output.bind(source)(report, golf);
                        golf = update.getSize;
                        update = golf.bind(update)();
                        golf = sizing.containerSize;
                        golf = update - golf;
                        golf = result.bind(echo)(output, golf);
                        sizing['scrollPos'] = golf;
                        if(!(foxtrot != kilo)) { _fun00096_ip = 279; continue _fun00095 }
 274:
                        kilo = kilo.bind(entity)(options);
 279:
                        kilo = _closure3_slot0;
                        sizing = kilo.deferNextCompute;
                        kilo = _closure3_slot0;
                        if(sizing) { _fun00096_ip = 308; continue _fun00095 }
 296:
                        sizing = kilo.computeBlocks;
                        sizing = sizing.bind(kilo)();
                        _fun00096_ip = 381; continue _fun00095;
 308:
                        sizing = false;
                        kilo['deferNextCompute'] = sizing;
                        sizing = kilo.deferredCompute;
                        kilo = -1;
                        if(!(kilo !== sizing)) { _fun00096_ip = 353; continue _fun00095 }
 332:
                        sizing = zulu.cancelAnimationFrame;
                        kilo = _closure3_slot0;
                        kilo = kilo.deferredCompute;
                        kilo = sizing.bind(entity)(kilo);
 353:
                        sizing = _closure3_slot0;
                        output = zulu.requestAnimationFrame;
                        kilo = function() {
                            mike = _closure3_slot0;
                            entity = mike.computeBlocks;
                            entity = entity.bind(mike)();
                            return entity;
                        };
                        kilo = output.bind(entity)(kilo);
                        sizing['deferredCompute'] = kilo;
 381:
                        if(backup) { _fun00096_ip = 433; continue _fun00095 }
 384:
                        sizing = zulu.clearTimeout;
                        backup = _closure3_slot0;
                        kilo = backup.disableAnchoringTimeout;
                        kilo = sizing.bind(entity)(kilo);
                        sizing = zulu.setTimeout;
                        kilo = function() {
                            entity = global;
                            tango = entity.clearTimeout;
                            mike = _closure3_slot0;
                            zulu = mike.disableAnchoringTimeout;
                            entity = undefined;
                            zulu = tango.bind(entity)(zulu);
                            mike['disableAnchoringTimeout'] = entity;
                            return entity;
                        };
                        yankee = 100;
                        yankee = sizing.bind(entity)(kilo, yankee);
                        backup['disableAnchoringTimeout'] = yankee;
 433:
                        if(!(foxtrot != oscar)) { _fun00096_ip = 608; continue _fun00095 }
 440:
                        options = options.nativeEvent;
                        options = options.contentSize;
                        if(verify) { _fun00096_ip = 461; continue _fun00095 }
 454:
                        yankee = options.height;
                        _fun00096_ip = 466; continue _fun00095;
 461:
                        yankee = options.width;
 466:
                        verify = zulu.Math;
                        options = verify.ceil;
                        foxtrot = foxtrot != romeo;
                        report = 0;
                        if(!foxtrot) { _fun00096_ip = 490; continue _fun00095 }
 487:
                        report = romeo;
 490:
                        report = yankee - report;
                        report = report - offset;
                        options = options.bind(verify)(report);
                        report = zulu.Math;
                        zulu = report.ceil;
                        golf = zulu.bind(report)(golf);
                        report = golf >= options;
                        if(!report) { _fun00096_ip = 572; continue _fun00095 }
 527:
                        if(tango) { _fun00096_ip = 572; continue _fun00095 }
 530:
                        offset = _closure3_slot0;
                        verify = offset.setState;
                        zulu = {};
                        yankee = true;
                        zulu['hasReachedEndBefore'] = yankee;
                        zulu = verify.bind(offset)(zulu);
                        zulu = {};
                        golf = golf - options;
                        zulu['distanceFromEnd'] = golf;
                        zulu = oscar.bind(entity)(zulu);
                        _fun00096_ip = 608; continue _fun00095;
 572:
                        zulu = !report;
                        if(report) { _fun00096_ip = 581; continue _fun00095 }
 578:
                        zulu = tango;
 581:
                        if(!zulu) { _fun00096_ip = 608; continue _fun00095 }
 584:
                        report = _closure3_slot0;
                        tango = report.setState;
                        zulu = {};
                        oscar = false;
                        zulu['hasReachedEndBefore'] = oscar;
                        zulu = tango.bind(report)(zulu);
 608:
                        zulu = _closure3_slot0;
                        mike = zulu.queueViewabilityChange;
                        mike = mike.bind(zulu)();
                        return entity;
                    }
                };
                entity['handleScroll'] = report;
                report = function(argFoo) {
                    _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
                        verify = argFoo;
                        zulu = verify.nativeEvent;
                        entity = _closure3_slot0;
                        tango = entity.state;
                        report = tango.isFirstLayout;
                        options = tango.fastListComputer;
                        tango = entity.props;
                        foxtrot = tango.contentInset;
                        entity = undefined;
                        if(!(entity === foxtrot)) { _fun00098_ip = 56; continue _fun00097 }
 49:
                        foxtrot = _closure1_slot19;
 56:
                        golf = tango.onLayout;
                        offset = tango.horizontal;
                        tango = tango.chunkBase;
                        zulu = zulu.layout;
                        if(offset) { _fun00098_ip = 90; continue _fun00097 }
 83:
                        romeo = zulu.height;
                        _fun00098_ip = 95; continue _fun00097;
 90:
                        romeo = zulu.width;
 95:
                        if(offset) { _fun00098_ip = 105; continue _fun00097 }
 98:
                        backup = foxtrot.top;
                        _fun00098_ip = 110; continue _fun00097;
 105:
                        backup = foxtrot.left;
 110:
                        zulu = null;
                        kilo = zulu != backup;
                        oscar = 0;
                        if(!kilo) { _fun00098_ip = 124; continue _fun00097 }
 121:
                        oscar = backup;
 124:
                        if(offset) { _fun00098_ip = 134; continue _fun00097 }
 127:
                        offset = foxtrot.bottom;
                        _fun00098_ip = 139; continue _fun00097;
 134:
                        offset = foxtrot.right;
 139:
                        foxtrot = zulu != offset;
                        yankee = 0;
                        if(!foxtrot) { _fun00098_ip = 151; continue _fun00097 }
 148:
                        yankee = offset;
 151:
                        offset = _closure3_slot0;
                        oscar = romeo - oscar;
                        oscar = oscar - yankee;
                        offset['containerSize'] = oscar;
                        if(!(zulu == tango)) { _fun00098_ip = 194; continue _fun00097 }
 173:
                        offset = options.setInfo;
                        oscar = _closure3_slot0;
                        oscar = oscar.containerSize;
                        oscar = offset.bind(options)(oscar);
 194:
                        if(!(zulu != golf)) { _fun00098_ip = 208; continue _fun00097 }
 198:
                        oscar = _closure3_slot0;
                        oscar = golf.bind(entity)(verify, oscar);
 208:
                        if(report) { _fun00098_ip = 227; continue _fun00097 }
 211:
                        oscar = _closure3_slot0;
                        report = oscar.computeBlocks;
                        report = report.bind(oscar)();
                        _fun00098_ip = 283; continue _fun00097;
 227:
                        if(!(zulu != tango)) { _fun00098_ip = 247; continue _fun00097 }
 231:
                        tango = _closure3_slot0;
                        zulu = tango.restoreScrollPosition;
                        zulu = zulu.bind(tango)();
                        _fun00098_ip = 283; continue _fun00097;
 247:
                        report = _closure3_slot0;
                        tango = report.setState;
                        golf = report.getInitialState;
                        oscar = report.containerSize;
                        zulu = false;
                        zulu = golf.bind(report)(oscar, options, zulu);
                        zulu = tango.bind(report)(zulu);
 283:
                        zulu = _closure3_slot0;
                        mike = zulu.queueViewabilityChange;
                        mike = mike.bind(zulu)();
                        return entity;
                    }
                };
                entity['handleLayout'] = report;
                report = function(argFoo) {
                    _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
                        entity = _closure3_slot0;
                        entity = entity.props;
                        zulu = entity.onScrollEnd;
                        entity = null;
                        if(!(entity != zulu)) { _fun00100_ip = 34; continue _fun00099 }
 24:
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
 34:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleMomentumScrollEnd'] = report;
                mike = function(argFoo) {
                    _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
                        mike = _closure3_slot0;
                        tango = mike.scrollAnchor;
                        zulu = tango.handleUserScroll;
                        zulu = zulu.bind(tango)();
                        mike = mike.props;
                        zulu = mike.onScrollBeginDrag;
                        mike = null;
                        if(!(mike != zulu)) { _fun00102_ip = 65; continue _fun00101 }
 42:
                        entity = _closure3_slot0;
                        zulu = entity.props;
                        mike = zulu.onScrollBeginDrag;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
 65:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleScrollBeginDrag'] = mike;
                mike = entity.props;
                report = mike.batchesToRender;
                golf = 12;
                if(!(oscar !== report)) { _fun00080_ip = 679; continue _fun00079 }
 676:
                golf = report;
 679:
                report = mike.getAnchorIdFromIndex;
                mike = mike.getAnchorIndexFromId;
                oscar = 5;
                if(!(!(golf < oscar))) { _fun00080_ip = 870; continue _fun00079 }
 701:
                if(!(zulu == report)) { _fun00080_ip = 709; continue _fun00079 }
 705:
                if(!(zulu != mike)) { _fun00080_ip = 753; continue _fun00079 }
 709:
                if(!(zulu != report)) { _fun00080_ip = 717; continue _fun00079 }
 713:
                if(!(zulu == mike)) { _fun00080_ip = 753; continue _fun00079 }
 717:
                mike = global;
                report = mike.Error;
                mike = report.prototype;
                zulu = Object.create(mike, {constructor: {value: report}});
                vacuum = 'FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither';
                sequence = zulu;
                mike = new sequence[report](vacuum, control);
                mike = mike instanceof Object ? mike : zulu;
                throw mike;
 753:
                mike = entity.getViewabilityConfig;
                mike = mike.bind(entity)();
                zulu = mike.minimumViewTime;
                if(!(!(zulu <= tango))) { _fun00080_ip = 834; continue _fun00079 }
 773:
                zulu = mike.visibilityThreshold;
                if(!(!(zulu <= tango))) { _fun00080_ip = 798; continue _fun00079 }
 783:
                zulu = mike.visibilityThreshold;
                mike = 1;
                if(!(!(zulu > mike))) { _fun00080_ip = 798; continue _fun00079 }
 796:
                return entity;
 798:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                vacuum = 'FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1';
                sequence = mike;
                entity = new sequence[zulu](vacuum, control);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
 834:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                vacuum = 'FastList: `viewabilityConfig.minimumViewTime` must be greater than 0';
                sequence = mike;
                entity = new sequence[zulu](vacuum, control);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
 870:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                vacuum = 'FastList: `batchesToRender` must be >= 6';
                sequence = mike;
                entity = new sequence[zulu](vacuum, control);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot7;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot10;
        oscar = {};
        mike = 'computeScrollPosition';
        oscar['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            entity = this;
            entity = entity.state;
            report = entity.fastListComputer;
            tango = report.computeScrollPosition;
            zulu = false;
            mike = argFoo;
            entity = argBar;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        };
        oscar['value'] = mike;
        mike = new Array(18);
        mike[0] = oscar;
        oscar = {};
        golf = 'getInitialState';
        oscar['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
                mike = argFoo;
                tango = argBar;
                offset = arguments[3];
                verify = this;
                backup = undefined;
                if(!(offset === backup)) { _fun00104_ip = 22; continue _fun00103 }
 18:
                offset = new Array(0);
 22:
                entity = verify.props;
                zulu = entity.initialScrollSection;
                options = 0;
                control = 0;
                if(!(backup !== zulu)) { _fun00104_ip = 44; continue _fun00103 }
 41:
                control = zulu;
 44:
                update = entity.initialScrollItem;
                zulu = entity.initialScrollOrientation;
                source = 'visible';
                if(!(backup !== zulu)) { _fun00104_ip = 67; continue _fun00103 }
 64:
                source = zulu;
 67:
                result = entity.initialScrollStart;
                zulu = entity.stickySectionsVariant;
                vacuum = 'default';
                kilo = vacuum;
                if(!(backup !== zulu)) { _fun00104_ip = 93; continue _fun00103 }
 90:
                kilo = zulu;
 93:
                zulu = entity.horizontal;
                romeo = backup !== zulu;
                if(!romeo) { _fun00104_ip = 109; continue _fun00103 }
 106:
                romeo = zulu;
 109:
                entity = entity.scrollPosValue;
                zulu = tango.setInfo;
                zulu = zulu.bind(tango)(mike);
                zulu = _closure1_slot39;
                golf = zulu.bind(backup)(mike);
                foxtrot = null;
                zulu = foxtrot != result;
                output = 0;
                if(!zulu) { _fun00104_ip = 152; continue _fun00103 }
 149:
                output = result;
 152:
                sizing = output + mike;
                if(!(foxtrot == result)) { _fun00104_ip = 345; continue _fun00103 }
 163:
                if(!(!(control > options))) { _fun00104_ip = 185; continue _fun00103 }
 167:
                echo = foxtrot != update;
                oscar = output;
                report = sizing;
                zulu = undefined;
                if(!echo) { _fun00104_ip = 362; continue _fun00103 }
 185:
                echo = mike > options;
                oscar = output;
                report = sizing;
                zulu = undefined;
                if(!echo) { _fun00104_ip = 362; continue _fun00103 }
 203:
                echo = tango.computeScrollPosition;
                kilo = vacuum === kilo;
                kilo = echo.bind(tango)(kilo, control, update);
                echo = foxtrot != kilo;
                oscar = output;
                report = sizing;
                zulu = undefined;
                if(!echo) { _fun00104_ip = 362; continue _fun00103 }
 238:
                update = verify._calculateScrollPosition;
                echo = {};
                echo['itemCoords'] = kilo;
                control = tango.getSize;
                control = control.bind(tango)();
                echo['fullSize'] = control;
                echo['orientation'] = source;
                source = 16;
                echo['paddingEnd'] = source;
                source = update.bind(verify)(echo);
                update = source;
                if(!(foxtrot == update)) { _fun00104_ip = 307; continue _fun00103 }
 291:
                echo = kilo.scrollPosition;
                kilo = kilo.sectionOffset;
                update = echo - kilo;
 307:
                echo = update + mike;
                kilo = foxtrot != source;
                oscar = update;
                report = echo;
                zulu = undefined;
                if(!kilo) { _fun00104_ip = 362; continue _fun00103 }
 326:
                kilo = verify._scrollPositionToPoint;
                zulu = kilo.bind(verify)(source);
                oscar = update;
                report = echo;
                _fun00104_ip = 362; continue _fun00103;
 345:
                kilo = verify._scrollPositionToPoint;
                zulu = kilo.bind(verify)(result);
                oscar = output;
                report = sizing;
 362:
                if(!(foxtrot == zulu)) { _fun00104_ip = 376; continue _fun00103 }
 366:
                zulu = {'x': 0, 'y': 0};
 376:
                if(romeo) { _fun00104_ip = 386; continue _fun00103 }
 379:
                romeo = zulu.y;
                _fun00104_ip = 391; continue _fun00103;
 386:
                romeo = zulu.x;
 391:
                if(!(foxtrot == entity)) { _fun00104_ip = 434; continue _fun00103 }
 395:
                foxtrot = _closure1_slot0;
                kilo = _closure1_slot2;
                yankee = 15;
                yankee = kilo[yankee];
                foxtrot = foxtrot.bind(backup)(yankee);
                yankee = foxtrot.makeMutable;
                yankee = yankee.bind(foxtrot)(romeo);
                verify['scrollPosValue'] = yankee;
                _fun00104_ip = 450; continue _fun00103;
 434:
                yankee = entity.set;
                yankee = yankee.bind(entity)(romeo);
                verify['scrollPosValue'] = entity;
 450:
                entity = {};
                if(!(!(mike > options))) { _fun00104_ip = 473; continue _fun00103 }
 456:
                mike = {};
                mike['size'] = options;
                options = new Array(0);
                mike['items'] = options;
                _fun00104_ip = 497; continue _fun00103;
 473:
                verify = tango.compute;
                sequence = true;
                papa = tango;
                context = oscar;
                record = report;
                config = offset;
                mike = papa[verify](context, record, config, sequence, vacuum);
 497:
                context = entity;
                record = mike;
                mike = copyDataProperties(context, record);
                mike = 'batchSize';
                entity[mike] = golf;
                mike = 'blockStart';
                entity[mike] = oscar;
                mike = 'blockEnd';
                entity[mike] = report;
                report = argBaz;
                mike = 'isFirstLayout';
                entity[mike] = report;
                mike = 'fastListComputer';
                entity[mike] = tango;
                mike = 'initialContentOffset';
                entity[mike] = zulu;
                zulu = false;
                mike = 'hasReachedEndBefore';
                entity[mike] = zulu;
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'componentDidMount';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
                zulu = this;
                report = zulu.scrollPosValue;
                var _closure3_slot0 = report;
                options = zulu.workletMounted;
                var _closure3_slot1 = options;
                entity = zulu.props;
                mike = entity.horizontal;
                entity = undefined;
                verify = entity !== mike;
                if(!verify) { _fun00106_ip = 48; continue _fun00105 }
 45:
                verify = mike;
 48:
                var _closure3_slot2 = verify;
                golf = _closure1_slot0;
                offset = _closure1_slot2;
                oscar = 15;
                oscar = offset[oscar];
                oscar = golf.bind(entity)(oscar);
                golf = oscar.WorkletEventHandler;
                oscar = function(argFoo) { // Original name: t
                    _fun00107: for(var _fun00108_ip = 0; ; ) switch(_fun00108_ip) {
 0:
                        mike = argFoo;
                        tango = _closure3_slot2;
                        zulu = mike.contentOffset;
                        if(tango) { _fun00108_ip = 26; continue _fun00107 }
 19:
                        oscar = zulu.y;
                        _fun00108_ip = 31; continue _fun00107;
 26:
                        oscar = zulu.x;
 31:
                        zulu = _closure3_slot2;
                        mike = mike.contentSize;
                        if(zulu) { _fun00108_ip = 51; continue _fun00107 }
 44:
                        report = mike.height;
                        _fun00108_ip = 56; continue _fun00107;
 51:
                        report = mike.width;
 56:
                        mike = 0;
                        mike = mike !== report;
                        if(mike) { _fun00108_ip = 78; continue _fun00107 }
 65:
                        tango = _closure3_slot1;
                        zulu = tango.get;
                        mike = zulu.bind(tango)();
 78:
                        if(!mike) { _fun00108_ip = 130; continue _fun00107 }
 81:
                        tango = _closure3_slot1;
                        zulu = tango.set;
                        mike = true;
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure3_slot0;
                        mike = zulu.set;
                        entity = global;
                        tango = entity.Math;
                        entity = tango.min;
                        entity = entity.bind(tango)(oscar, report);
                        entity = mike.bind(zulu)(entity);
 130:
                        entity = undefined;
                        return entity;
                    }
                };
                tango = {};
                tango['horizontal'] = verify;
                tango['workletMounted'] = options;
                tango['scrollPosValue'] = report;
                oscar['__closure'] = tango;
                tango = 13353994165730.0;
                oscar['__workletHash'] = tango;
                tango = _closure1_slot32;
                oscar['__initData'] = tango;
                tango = golf.prototype;
                report = Object.create(tango, {constructor: {value: golf}});
                yankee = ['onScroll'];
                foxtrot = report;
                romeo = oscar;
                tango = new foxtrot[golf](romeo, yankee, offset);
                tango = tango instanceof Object ? tango : report;
                zulu['worklet'] = tango;
                tango = _closure1_slot14;
                mike = zulu.scrollView;
                mike = mike.current;
                mike = tango.bind(entity)(mike);
                zulu['viewTag'] = mike;
                report = zulu.worklet;
                tango = report.registerForEvents;
                mike = zulu.viewTag;
                mike = tango.bind(report)(mike);
                mike = zulu.queueViewabilityChange;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[2] = oscar;
        oscar = {};
        golf = 'getSnapshotBeforeUpdate';
        oscar['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00109: for(var _fun00110_ip = 0; ; ) switch(_fun00110_ip) {
 0:
                tango = argBar;
                mike = this;
                entity = argFoo;
                golf = entity.getAnchorIdFromIndex;
                entity = mike.props;
                zulu = entity.EXPERIMENTAL_enableAnchorWhileScrolling;
                entity = undefined;
                entity = entity !== zulu;
                if(!entity) { _fun00110_ip = 38; continue _fun00109 }
 35:
                entity = zulu;
 38:
                zulu = mike.state;
                options = zulu.isFirstLayout;
                if(entity) { _fun00110_ip = 67; continue _fun00109 }
 52:
                zulu = mike.disableAnchoringTimeout;
                entity = null;
                zulu = entity == zulu;
                if(!zulu) { _fun00110_ip = 147; continue _fun00109 }
 67:
                zulu = null;
                report = zulu == golf;
                if(report) { _fun00110_ip = 79; continue _fun00109 }
 76:
                report = options;
 79:
                if(report) { _fun00110_ip = 92; continue _fun00109 }
 82:
                oscar = tango.isFirstLayout;
                report = options !== oscar;
 92:
                if(report) { _fun00110_ip = 121; continue _fun00109 }
 95:
                oscar = mike.scrollAnchor;
                report = oscar.findOrUpdateAnchor;
                tango = tango.items;
                tango = report.bind(oscar)(golf, tango);
 121:
                tango = mike.scrollAnchor;
                mike = tango.hasAnchor;
                mike = mike.bind(tango)();
                if(mike) { _fun00110_ip = 144; continue _fun00109 }
 142:
                mike = null;
 144:
                entity = mike;
 147:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[3] = oscar;
        oscar = {};
        golf = 'componentDidUpdate';
        oscar['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00111: for(var _fun00112_ip = 0; ; ) switch(_fun00112_ip) {
 0:
                entity = argBar;
                mike = this;
                var _closure3_slot0 = mike;
                tango = argFoo;
                report = tango.scrollPosValue;
                tango = mike.props;
                tango = tango.scrollPosValue;
                if(!(report === tango)) { _fun00112_ip = 167; continue _fun00111 }
 39:
                tango = mike.state;
                tango = tango.isFirstLayout;
                if(tango) { _fun00112_ip = 114; continue _fun00111 }
 53:
                tango = entity.isFirstLayout;
                if(!tango) { _fun00112_ip = 114; continue _fun00111 }
 62:
                tango = mike.props;
                report = tango.chunkBase;
                tango = null;
                if(!(tango == report)) { _fun00112_ip = 132; continue _fun00111 }
 79:
                report = mike.scrollView;
                report = report.current;
                if(!(tango != report)) { _fun00112_ip = 132; continue _fun00111 }
 94:
                tango = report.measure;
                zulu = function() {
                    mike = _closure3_slot0;
                    entity = mike.restoreScrollPosition;
                    entity = entity.bind(mike)();
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                _fun00112_ip = 132; continue _fun00111;
 114:
                zulu = argBaz;
                if(!zulu) { _fun00112_ip = 132; continue _fun00111 }
 120:
                zulu = mike.anchorScroll;
                zulu = zulu.bind(mike)();
 132:
                zulu = mike.state;
                zulu = zulu.items;
                entity = entity.items;
                if(!(zulu !== entity)) { _fun00112_ip = 163; continue _fun00111 }
 153:
                entity = mike.queueViewabilityChange;
                entity = entity.bind(mike)();
 163:
                entity = undefined;
                return entity;
 167:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                oscar = 'FastList: scrollPosValue cannot changed after mounting';
                golf = mike;
                entity = new golf[zulu](oscar, report);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        oscar['value'] = golf;
        mike[4] = oscar;
        oscar = {};
        golf = 'getViewabilityConfig';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00113: for(var _fun00114_ip = 0; ; ) switch(_fun00114_ip) {
 0:
                entity = this;
                entity = entity.props;
                tango = entity.viewabilityConfig;
                entity = {};
                mike = null;
                report = mike == tango;
                oscar = undefined;
                if(report) { _fun00114_ip = 33; continue _fun00113 }
 27:
                oscar = tango.minimumViewTime;
 33:
                golf = mike != oscar;
                report = 1000;
                if(!golf) { _fun00114_ip = 49; continue _fun00113 }
 46:
                report = oscar;
 49:
                entity['minimumViewTime'] = report;
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun00114_ip = 69; continue _fun00113 }
 63:
                zulu = tango.visibilityThreshold;
 69:
                tango = mike != zulu;
                mike = 0.5;
                if(!tango) { _fun00114_ip = 89; continue _fun00113 }
 86:
                mike = zulu;
 89:
                entity['visibilityThreshold'] = mike;
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[5] = oscar;
        oscar = {};
        golf = 'queueViewabilityChange';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00115: for(var _fun00116_ip = 0; ; ) switch(_fun00116_ip) {
 0:
                mike = this;
                entity = mike.props;
                zulu = entity.onViewableItemsChanged;
                entity = null;
                if(!(entity != zulu)) { _fun00116_ip = 81; continue _fun00115 }
 20:
                entity = mike.getViewabilityConfig;
                entity = entity.bind(mike)();
                report = entity.minimumViewTime;
                entity = global;
                oscar = entity.clearTimeout;
                zulu = mike.viewabilityDebounce;
                tango = undefined;
                zulu = oscar.bind(tango)(zulu);
                zulu = entity.setTimeout;
                entity = mike.handleViewabilityChange;
                entity = zulu.bind(tango)(entity, report);
                mike['viewabilityDebounce'] = entity;
 81:
                entity = undefined;
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[6] = oscar;
        oscar = {};
        golf = 'reset';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00117: for(var _fun00118_ip = 0; ; ) switch(_fun00118_ip) {
 0:
                zulu = this;
                entity = zulu.props;
                entity = entity.chunkBase;
                mike = zulu.state;
                golf = mike.fastListComputer;
                oscar = mike.items;
                mike = mike.isFirstLayout;
                if(mike) { _fun00118_ip = 89; continue _fun00117 }
 40:
                mike = zulu.setState;
                report = zulu.getInitialState;
                tango = null;
                options = tango != entity;
                tango = 0;
                if(!options) { _fun00118_ip = 66; continue _fun00117 }
 63:
                tango = entity;
 66:
                offset = false;
                foxtrot = zulu;
                romeo = tango;
                yankee = golf;
                verify = oscar;
                entity = foxtrot[report](romeo, yankee, offset, verify, options);
                entity = mike.bind(zulu)(entity);
 89:
                entity = undefined;
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[7] = oscar;
        oscar = {};
        golf = 'componentWillUnmount';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00119: for(var _fun00120_ip = 0; ; ) switch(_fun00120_ip) {
 0:
                entity = this;
                tango = entity.worklet;
                mike = null;
                if(!(mike != tango)) { _fun00120_ip = 32; continue _fun00119 }
 15:
                zulu = tango.unregisterFromEvents;
                mike = entity.viewTag;
                mike = zulu.bind(tango)(mike);
 32:
                zulu = entity.deferredCompute;
                mike = -1;
                if(!(mike !== zulu)) { _fun00120_ip = 69; continue _fun00119 }
 48:
                mike = global;
                tango = mike.cancelAnimationFrame;
                zulu = entity.deferredCompute;
                mike = undefined;
                mike = tango.bind(mike)(zulu);
 69:
                mike = global;
                zulu = mike.clearTimeout;
                mike = entity.viewabilityDebounce;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[8] = oscar;
        oscar = {};
        golf = 'anchorScroll';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00121: for(var _fun00122_ip = 0; ; ) switch(_fun00122_ip) {
 0:
                tango = this;
                entity = tango.props;
                options = entity.getAnchorIndexFromId;
                zulu = entity.stickySectionsVariant;
                offset = 'default';
                entity = undefined;
                mike = offset;
                if(!(entity !== zulu)) { _fun00122_ip = 36; continue _fun00121 }
 33:
                mike = zulu;
 36:
                zulu = tango.state;
                verify = zulu.fastListComputer;
                zulu = null;
                if(!(zulu != options)) { _fun00122_ip = 170; continue _fun00121 }
 53:
                report = tango.scrollAnchor;
                report = report.anchorOffset;
                if(!(zulu != report)) { _fun00122_ip = 170; continue _fun00121 }
 69:
                golf = tango.scrollAnchor;
                oscar = golf.getAnchorIndex;
                oscar = oscar.bind(golf)(options);
                if(!(zulu != oscar)) { _fun00122_ip = 170; continue _fun00121 }
 92:
                options = verify.computeScrollPosition;
                golf = oscar.section;
                oscar = oscar.item;
                mike = offset === mike;
                mike = options.bind(verify)(mike, golf, oscar);
                zulu = zulu != mike;
                if(!zulu) { _fun00122_ip = 146; continue _fun00121 }
 126:
                golf = tango.scrollPos;
                oscar = mike.scrollPosition;
                oscar = oscar - report;
                zulu = golf !== oscar;
 146:
                if(!zulu) { _fun00122_ip = 170; continue _fun00121 }
 149:
                zulu = tango.scrollTo;
                mike = mike.scrollPosition;
                mike = mike - report;
                mike = zulu.bind(tango)(mike);
 170:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[9] = oscar;
        oscar = {};
        golf = 'getSectionItemFromPosition';
        oscar['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            entity = this;
            entity = entity.state;
            tango = entity.fastListComputer;
            zulu = tango.getSectionItemFromPosition;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar['value'] = golf;
        mike[10] = oscar;
        oscar = {};
        golf = 'getScrollPositionFromEvent';
        oscar['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00123: for(var _fun00124_ip = 0; ; ) switch(_fun00124_ip) {
 0:
                entity = this;
                entity = entity.props;
                entity = entity.horizontal;
                mike = argFoo;
                mike = mike.nativeEvent;
                mike = mike.contentOffset;
                if(entity) { _fun00124_ip = 38; continue _fun00123 }
 31:
                entity = mike.y;
                _fun00124_ip = 43; continue _fun00123;
 38:
                entity = mike.x;
 43:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[11] = oscar;
        oscar = {};
        golf = 'restoreScrollPosition';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00125: for(var _fun00126_ip = 0; ; ) switch(_fun00126_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                report = zulu.props;
                yankee = report.initialScrollItem;
                mike = report.initialScrollSection;
                verify = 0;
                entity = undefined;
                offset = 0;
                if(!(entity !== mike)) { _fun00126_ip = 39; continue _fun00125 }
 36:
                offset = mike;
 39:
                oscar = report.initialScrollOrientation;
                mike = 'visible';
                if(!(entity !== oscar)) { _fun00126_ip = 56; continue _fun00125 }
 53:
                mike = oscar;
 56:
                report = report.initialScrollStart;
                golf = null;
                if(!(golf == yankee)) { _fun00126_ip = 79; continue _fun00125 }
 68:
                if(!(offset <= verify)) { _fun00126_ip = 79; continue _fun00125 }
 72:
                if(!(golf != report)) { _fun00126_ip = 246; continue _fun00125 }
 79:
                if(!(golf == report)) { _fun00126_ip = 230; continue _fun00125 }
 86:
                options = zulu.scrollToLocation;
                oscar = {};
                oscar['section'] = offset;
                romeo = golf != yankee;
                golf = -1;
                offset = golf;
                if(!romeo) { _fun00126_ip = 117; continue _fun00125 }
 114:
                offset = yankee;
 117:
                oscar['item'] = offset;
                oscar['orientation'] = mike;
                mike = 16;
                oscar['paddingEnd'] = mike;
                mike = true;
                oscar['setAnchor'] = mike;
                oscar = options.bind(zulu)(oscar);
                if(oscar) { _fun00126_ip = 222; continue _fun00125 }
 149:
                options = zulu.scrollPosValue;
                oscar = options.set;
                oscar = oscar.bind(options)(verify);
                oscar = zulu.deferredCompute;
                if(!(golf !== oscar)) { _fun00126_ip = 194; continue _fun00125 }
 175:
                oscar = global;
                golf = oscar.cancelAnimationFrame;
                oscar = zulu.deferredCompute;
                oscar = golf.bind(entity)(oscar);
 194:
                oscar = global;
                oscar = oscar.requestAnimationFrame;
                tango = function() {
                    mike = _closure3_slot0;
                    entity = mike.computeBlocks;
                    entity = entity.bind(mike)();
                    return entity;
                };
                tango = oscar.bind(entity)(tango);
                zulu['deferredCompute'] = tango;
                _fun00126_ip = 256; continue _fun00125;
 222:
                zulu['deferNextCompute'] = mike;
                _fun00126_ip = 256; continue _fun00125;
 230:
                tango = zulu.scrollTo;
                mike = false;
                mike = tango.bind(zulu)(report, mike);
                _fun00126_ip = 256; continue _fun00125;
 246:
                mike = zulu.computeBlocks;
                mike = mike.bind(zulu)();
 256:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[12] = oscar;
        oscar = {};
        golf = 'computeBlocks';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00127: for(var _fun00128_ip = 0; ; ) switch(_fun00128_ip) {
 0:
                tango = this;
                mike = tango.props;
                zulu = mike.batchesToRender;
                oscar = 12;
                entity = undefined;
                if(!(entity !== zulu)) { _fun00128_ip = 26; continue _fun00127 }
 23:
                oscar = zulu;
 26:
                yankee = mike.chunkBase;
                mike = tango.state;
                verify = mike.fastListComputer;
                options = mike.items;
                mike = null;
                if(!(mike == yankee)) { _fun00128_ip = 61; continue _fun00127 }
 55:
                yankee = tango.containerSize;
 61:
                golf = tango.scrollPos;
                offset = 0;
                if(!(offset !== yankee)) { _fun00128_ip = 211; continue _fun00127 }
 76:
                zulu = global;
                report = zulu.Math;
                mike = report.ceil;
                yankee = mike.bind(report)(yankee);
                report = zulu.Math;
                mike = report.floor;
                backup = mike.bind(report)(golf);
                mike = _closure1_slot39;
                mike = mike.bind(entity)(yankee);
                golf = zulu.Math;
                report = golf.max;
                foxtrot = zulu.Math;
                romeo = foxtrot.round;
                zulu = 2;
                yankee = yankee / zulu;
                yankee = backup + yankee;
                yankee = yankee / mike;
                yankee = romeo.bind(foxtrot)(yankee);
                zulu = oscar / zulu;
                zulu = yankee - zulu;
                zulu = report.bind(golf)(offset, zulu);
                zulu = zulu * mike;
                report = {};
                report['batchSize'] = mike;
                report['blockStart'] = zulu;
                mike = mike * oscar;
                mike = zulu + mike;
                report['blockEnd'] = mike;
                _fun00128_ip = 221; continue _fun00127;
 211:
                report = {'batchSize': 0, 'blockStart': 0, 'blockEnd': 0};
 221:
                zulu = report.batchSize;
                mike = tango.state;
                mike = mike.batchSize;
                mike = zulu === mike;
                if(!mike) { _fun00128_ip = 266; continue _fun00127 }
 245:
                oscar = report.blockStart;
                zulu = tango.state;
                zulu = zulu.blockStart;
                mike = oscar === zulu;
 266:
                if(!mike) { _fun00128_ip = 290; continue _fun00127 }
 269:
                oscar = report.blockEnd;
                zulu = tango.state;
                zulu = zulu.blockEnd;
                mike = oscar === zulu;
 290:
                if(mike) { _fun00128_ip = 359; continue _fun00127 }
 293:
                zulu = tango.setState;
                mike = {};
                output = mike;
                sizing = report;
                oscar = copyDataProperties(output, sizing);
                golf = verify.compute;
                oscar = report.blockStart;
                report = report.blockEnd;
                sizing = golf.bind(verify)(oscar, report, options);
                output = mike;
                report = copyDataProperties(output, sizing);
                oscar = false;
                report = 'isFirstLayout';
                mike[report] = oscar;
                mike = zulu.bind(tango)(mike);
 359:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[13] = oscar;
        oscar = {};
        golf = 'renderItems';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00129: for(var _fun00130_ip = 0; ; ) switch(_fun00130_ip) {
 0:
                control = this;
                entity = control.props;
                mike = entity.stickySectionsVariant;
                source = 'default';
                update = undefined;
                echo = source;
                if(!(update !== mike)) { _fun00130_ip = 32; continue _fun00129 }
 29:
                echo = mike;
 32:
                result = entity.renderHeader;
                if(!(update === result)) { _fun00130_ip = 49; continue _fun00129 }
 42:
                result = _closure1_slot37;
 49:
                var _closure3_slot0 = result;
                output = entity.renderFooter;
                if(!(update === output)) { _fun00130_ip = 70; continue _fun00129 }
 63:
                output = _closure1_slot37;
 70:
                var _closure3_slot1 = output;
                sizing = entity.renderSection;
                if(!(update === sizing)) { _fun00130_ip = 91; continue _fun00129 }
 84:
                sizing = _closure1_slot37;
 91:
                var _closure3_slot2 = sizing;
                kilo = entity.renderItem;
                var _closure3_slot3 = kilo;
                backup = entity.renderSectionFooter;
                if(!(update === backup)) { _fun00130_ip = 122; continue _fun00129 }
 115:
                backup = _closure1_slot37;
 122:
                var _closure3_slot4 = backup;
                mike = entity.optimizeListItemRender;
                foxtrot = update !== mike;
                if(!foxtrot) { _fun00130_ip = 142; continue _fun00129 }
 139:
                foxtrot = mike;
 142:
                mike = entity.disableContentWrappers;
                romeo = update !== mike;
                if(!romeo) { _fun00130_ip = 158; continue _fun00129 }
 155:
                romeo = mike;
 158:
                entity = entity.debugLayout;
                entity = control.state;
                zulu = entity.items;
                entity = control.props;
                entity = entity.horizontal;
                mike = null;
                yankee = mike != entity;
                if(!yankee) { _fun00130_ip = 198; continue _fun00129 }
 195:
                yankee = entity;
 198:
                offset = new Array(0);
                var _closure3_slot5 = offset;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun00131: for(var _fun00132_ip = 0; ; ) switch(_fun00132_ip) {
 0:
                        entity = argFoo;
                        mike = entity.type;
                        zulu = entity.layoutStart;
                        entity = _closure1_slot21;
                        entity = entity.SECTION;
                        if(!(mike === entity)) { _fun00132_ip = 48; continue _fun00131 }
 31:
                        mike = _closure3_slot5;
                        entity = mike.push;
                        entity = entity.bind(mike)(zulu);
 48:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                entity = new Array(0);
                mike = _closure1_slot35;
                options = mike.bind(update)(zulu);
                zulu = options.bind(update)();
                mike = zulu.done;
                golf = global;
                oscar = '';
                report = false;
                tango = 0;
                if(mike) { _fun00130_ip = 1118; continue _fun00129 }
 264:
                record = zulu.value;
                target = record.type;
                papa = record.key;
                sierra = record.layoutStart;
                sequence = record.recyclerKey;
                mike = record.layoutSize;
                config = record.section;
                record = record.item;
                if(!(tango !== mike)) { _fun00130_ip = 1100; continue _fun00129 }
 314:
                context = _closure1_slot21;
                context = context.SPACER;
                if(!(context !== target)) { _fun00130_ip = 1047; continue _fun00129 }
 331:
                context = _closure1_slot21;
                context = context.HEADER;
                if(!(context !== target)) { _fun00130_ip = 955; continue _fun00129 }
 348:
                context = _closure1_slot21;
                context = context.FOOTER;
                if(!(context !== target)) { _fun00130_ip = 860; continue _fun00129 }
 365:
                context = _closure1_slot21;
                context = context.SECTION;
                if(!(context !== target)) { _fun00130_ip = 615; continue _fun00129 }
 382:
                context = _closure1_slot21;
                context = context.ITEM;
                if(!(context !== target)) { _fun00130_ip = 512; continue _fun00129 }
 396:
                context = _closure1_slot21;
                context = context.SECTION_FOOTER;
                if(!(context === target)) { _fun00130_ip = 1100; continue _fun00129 }
 413:
                target = entity.push;
                whiskey = _closure1_slot16;
                lima = _closure1_slot27;
                status = {};
                status['recyclerKey'] = sequence;
                status['horizontal'] = yankee;
                status['disableWrapper'] = romeo;
                status['fastListInstance'] = control;
                status['layoutSize'] = mike;
                status['section'] = config;
                status['debug'] = report;
                context = backup;
                if(foxtrot) { _fun00130_ip = 475; continue _fun00129 }
 468:
                context = function(argFoo) {
                    golf = 0;
                    oscar = copyRestArgs(golf);
                    zulu = _closure3_slot4;
                    mike = new Array(0);
                    golf = mike;
                    report = 0;
                    entity = arraySpread(golf, oscar, report);
                    report = undefined;
                    golf = zulu;
                    oscar = mike;
                    entity = apply(golf, oscar, report);
                    return entity;
                };
 475:
                status['children'] = context;
                context = golf.HermesInternal;
                context = context.concat;
                context = context.bind(oscar)(papa);
                context = whiskey.bind(update)(lima, status, context);
                context = target.bind(entity)(context);
                _fun00130_ip = 1100; continue _fun00129;
 512:
                context = entity.push;
                lima = _closure1_slot16;
                status = _closure1_slot28;
                target = {};
                target['recyclerKey'] = sequence;
                target['horizontal'] = yankee;
                target['disableWrapper'] = romeo;
                target['layoutSize'] = mike;
                target['fastListInstance'] = control;
                target['section'] = config;
                target['item'] = record;
                target['debug'] = report;
                record = kilo;
                if(foxtrot) { _fun00130_ip = 578; continue _fun00129 }
 571:
                record = function(argFoo) {
                    golf = 0;
                    oscar = copyRestArgs(golf);
                    zulu = _closure3_slot3;
                    mike = new Array(0);
                    golf = mike;
                    report = 0;
                    entity = arraySpread(golf, oscar, report);
                    report = undefined;
                    golf = zulu;
                    oscar = mike;
                    entity = apply(golf, oscar, report);
                    return entity;
                };
 578:
                target['children'] = record;
                record = golf.HermesInternal;
                record = record.concat;
                record = record.bind(oscar)(papa);
                record = lima.bind(update)(status, target, record);
                record = context.bind(entity)(record);
                _fun00130_ip = 1100; continue _fun00129;
 615:
                record = offset.shift;
                record = record.bind(offset)();
                if(!(source === echo)) { _fun00130_ip = 756; continue _fun00129 }
 632:
                context = entity.push;
                lima = _closure1_slot16;
                status = _closure1_slot25;
                target = {};
                target['recyclerKey'] = sequence;
                target['horizontal'] = yankee;
                target['disableWrapper'] = romeo;
                target['layoutStart'] = sierra;
                target['layoutSize'] = mike;
                record = offset[tango];
                target['nextSectionLayoutPosition'] = record;
                record = control.scrollPosValue;
                target['scrollPosValue'] = record;
                target['fastListInstance'] = control;
                target['section'] = config;
                target['debug'] = report;
                record = sizing;
                if(foxtrot) { _fun00130_ip = 719; continue _fun00129 }
 712:
                record = function(argFoo) {
                    golf = 0;
                    oscar = copyRestArgs(golf);
                    zulu = _closure3_slot2;
                    mike = new Array(0);
                    golf = mike;
                    report = 0;
                    entity = arraySpread(golf, oscar, report);
                    report = undefined;
                    golf = zulu;
                    oscar = mike;
                    entity = apply(golf, oscar, report);
                    return entity;
                };
 719:
                target['children'] = record;
                record = golf.HermesInternal;
                record = record.concat;
                record = record.bind(oscar)(papa);
                record = lima.bind(update)(status, target, record);
                record = context.bind(entity)(record);
                _fun00130_ip = 1100; continue _fun00129;
 756:
                record = entity.push;
                status = _closure1_slot16;
                target = _closure1_slot26;
                context = {};
                context['recyclerKey'] = sequence;
                context['horizontal'] = yankee;
                context['disableWrapper'] = romeo;
                context['layoutStart'] = sierra;
                context['layoutSize'] = mike;
                context['fastListInstance'] = control;
                context['section'] = config;
                context['debug'] = report;
                config = sizing;
                if(foxtrot) { _fun00130_ip = 823; continue _fun00129 }
 816:
                config = function(argFoo) {
                    golf = 0;
                    oscar = copyRestArgs(golf);
                    zulu = _closure3_slot2;
                    mike = new Array(0);
                    golf = mike;
                    report = 0;
                    entity = arraySpread(golf, oscar, report);
                    report = undefined;
                    golf = zulu;
                    oscar = mike;
                    entity = apply(golf, oscar, report);
                    return entity;
                };
 823:
                context['children'] = config;
                config = golf.HermesInternal;
                config = config.concat;
                config = config.bind(oscar)(papa);
                config = status.bind(update)(target, context, config);
                config = record.bind(entity)(config);
                _fun00130_ip = 1100; continue _fun00129;
 860:
                record = entity.push;
                status = _closure1_slot16;
                target = _closure1_slot29;
                context = {};
                context['recyclerKey'] = sequence;
                context['horizontal'] = yankee;
                context['disableWrapper'] = romeo;
                context['fastListInstance'] = control;
                context['layoutSize'] = mike;
                context['debug'] = report;
                config = output;
                if(foxtrot) { _fun00130_ip = 918; continue _fun00129 }
 911:
                config = function(argFoo) {
                    golf = 0;
                    oscar = copyRestArgs(golf);
                    zulu = _closure3_slot1;
                    mike = new Array(0);
                    golf = mike;
                    report = 0;
                    entity = arraySpread(golf, oscar, report);
                    report = undefined;
                    golf = zulu;
                    oscar = mike;
                    entity = apply(golf, oscar, report);
                    return entity;
                };
 918:
                context['children'] = config;
                config = golf.HermesInternal;
                config = config.concat;
                config = config.bind(oscar)(papa);
                config = status.bind(update)(target, context, config);
                config = record.bind(entity)(config);
                _fun00130_ip = 1100; continue _fun00129;
 955:
                config = entity.push;
                target = _closure1_slot16;
                context = _closure1_slot29;
                record = {};
                record['recyclerKey'] = sequence;
                record['horizontal'] = yankee;
                record['disableWrapper'] = romeo;
                record['fastListInstance'] = control;
                record['layoutSize'] = mike;
                record['debug'] = report;
                sequence = result;
                if(foxtrot) { _fun00130_ip = 1013; continue _fun00129 }
 1006:
                sequence = function(argFoo) {
                    golf = 0;
                    oscar = copyRestArgs(golf);
                    zulu = _closure3_slot0;
                    mike = new Array(0);
                    golf = mike;
                    report = 0;
                    entity = arraySpread(golf, oscar, report);
                    report = undefined;
                    golf = zulu;
                    oscar = mike;
                    entity = apply(golf, oscar, report);
                    return entity;
                };
 1013:
                record['children'] = sequence;
                sequence = golf.HermesInternal;
                sequence = sequence.concat;
                sequence = sequence.bind(oscar)(papa);
                sequence = target.bind(update)(context, record, sequence);
                sequence = config.bind(entity)(sequence);
                _fun00130_ip = 1100; continue _fun00129;
 1047:
                sequence = entity.push;
                context = _closure1_slot16;
                record = _closure1_slot30;
                config = {};
                config['horizontal'] = yankee;
                config['layoutSize'] = mike;
                mike = golf.HermesInternal;
                mike = mike.concat;
                mike = mike.bind(oscar)(papa);
                mike = context.bind(update)(record, config, mike);
                mike = sequence.bind(entity)(mike);
 1100:
                sequence = options.bind(update)();
                mike = sequence.done;
                zulu = sequence;
                if(!mike) { _fun00130_ip = 264; continue _fun00129 }
 1118:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[14] = oscar;
        oscar = {};
        golf = 'isEmpty';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.props;
            tango = entity.sections;
            zulu = tango.reduce;
            entity = function(argFoo, argBar) {
                mike = argFoo;
                entity = argBar;
                entity = mike + entity;
                return entity;
            };
            mike = 0;
            entity = zulu.bind(tango)(entity, mike);
            entity = mike === entity;
            return entity;
        };
        oscar['value'] = golf;
        mike[15] = oscar;
        oscar = {};
        golf = 'setDisableRecycling';
        oscar['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            entity = entity.state;
            zulu = entity.fastListComputer;
            mike = zulu.setDisableRecycling;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        oscar['value'] = golf;
        mike[16] = oscar;
        oscar = {};
        golf = 'render';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00133: for(var _fun00134_ip = 0; ; ) switch(_fun00134_ip) {
 0:
                options = this;
                report = options.props;
                entity = report.manualRef;
                entity = report.onScroll;
                entity = report.onScrollEnd;
                entity = report.onLayout;
                entity = report.renderHeader;
                entity = report.renderFooter;
                entity = report.renderSection;
                entity = report.renderItem;
                entity = report.renderSectionFooter;
                entity = report.getRecyclerKey;
                entity = report.onEndReached;
                entity = report.endReachedThreshold;
                entity = report.headerSize;
                entity = report.footerSize;
                entity = report.sectionSize;
                entity = report.sectionFooterSize;
                entity = report.itemSize;
                entity = report.sections;
                entity = report.scrollPosValue;
                entity = report.batchesToRender;
                entity = report.optimizeListItemRender;
                entity = report.initialScrollSection;
                entity = report.initialScrollItem;
                entity = report.initialScrollOrientation;
                entity = report.initialScrollStart;
                entity = report.getAnchorIdFromIndex;
                entity = report.getAnchorIndexFromId;
                entity = report.EXPERIMENTAL_enableAnchorWhileScrolling;
                entity = report.chunkBase;
                entity = report.disableContentWrappers;
                entity = report.childrenWrapper;
                entity = report.stickyHeaderFooter;
                entity = report.stickySectionsVariant;
                entity = report.persistantKeys;
                entity = report.disableRecyclingOnFullCompute;
                entity = report.disableLegacyGestureHandling;
                entity = report.viewabilityConfig;
                entity = report.onViewableItemsChanged;
                entity = report.debugLayout;
                golf = report.renderAccessory;
                yankee = report.removeClippedSubviews;
                tango = undefined;
                if(!(tango === yankee)) { _fun00134_ip = 294; continue _fun00133 }
 262:
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 14;
                entity = zulu[entity];
                mike = mike.bind(tango)(entity);
                entity = mike.isAndroid;
                yankee = entity.bind(mike)();
 294:
                entity = report.inActionSheet;
                zulu = _closure1_slot4;
                mike = _closure1_slot3;
                romeo = zulu.bind(tango)(report, mike);
                if(entity) { _fun00134_ip = 326; continue _fun00133 }
 320:
                verify = _closure1_slot13;
                _fun00134_ip = 352; continue _fun00133;
 326:
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 18;
                entity = zulu[entity];
                entity = mike.bind(tango)(entity);
                verify = entity.BottomSheetScrollView;
 352:
                zulu = _closure1_slot15;
                mike = _closure1_slot17;
                entity = {};
                oscar = _closure1_slot16;
                report = {};
                kilo = report;
                backup = romeo;
                romeo = copyDataProperties(kilo, backup);
                foxtrot = 'list';
                romeo = 'accessibilityRole';
                report[romeo] = foxtrot;
                romeo = _closure1_slot1;
                foxtrot = _closure1_slot2;
                offset = 19;
                offset = foxtrot[offset];
                romeo = romeo.bind(tango)(offset);
                offset = options.scrollView;
                romeo = romeo.bind(tango)(offset);
                offset = 'ref';
                report[offset] = romeo;
                romeo = 16;
                offset = 'scrollEventThrottle';
                report[offset] = romeo;
                offset = options.state;
                romeo = offset.initialContentOffset;
                offset = 'contentOffset';
                report[offset] = romeo;
                romeo = options.handleScroll;
                offset = 'onScroll';
                report[offset] = romeo;
                romeo = options.handleLayout;
                offset = 'onLayout';
                report[offset] = romeo;
                romeo = options.handleMomentumScrollEnd;
                offset = 'onMomentumScrollEnd';
                report[offset] = romeo;
                romeo = options.handleScrollBeginDrag;
                offset = 'onScrollBeginDrag';
                report[offset] = romeo;
                offset = 'removeClippedSubviews';
                report[offset] = yankee;
                offset = options.renderItems;
                yankee = offset.bind(options)();
                offset = 'children';
                report[offset] = yankee;
                oscar = oscar.bind(tango)(verify, report);
                report = new Array(2);
                report[0] = oscar;
                oscar = null;
                verify = oscar != golf;
                if(!verify) { _fun00134_ip = 583; continue _fun00133 }
 578:
                oscar = golf.bind(tango)(options);
 583:
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[17] = oscar;
        oscar = {};
        golf = 'getDerivedStateFromProps';
        oscar['key'] = golf;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00135: for(var _fun00136_ip = 0; ; ) switch(_fun00136_ip) {
 0:
                report = argFoo;
                zulu = argBar;
                yankee = zulu.fastListComputer;
                mike = yankee.updateProps;
                entity = {};
                tango = report.headerSize;
                entity['headerSize'] = tango;
                tango = report.footerSize;
                entity['footerSize'] = tango;
                tango = report.sectionSize;
                entity['sectionSize'] = tango;
                tango = report.itemSize;
                entity['itemSize'] = tango;
                tango = report.sectionFooterSize;
                entity['sectionFooterSize'] = tango;
                tango = report.sections;
                entity['sections'] = tango;
                tango = report.insetStart;
                entity['insetStart'] = tango;
                tango = report.insetEnd;
                entity['insetEnd'] = tango;
                golf = report.stickyHeaderFooter;
                oscar = null;
                tango = oscar != golf;
                if(!tango) { _fun00136_ip = 126; continue _fun00135 }
 123:
                tango = golf;
 126:
                entity['stickyHeaderFooter'] = tango;
                tango = report.getRecyclerKey;
                entity['getRecyclerKey'] = tango;
                tango = report.persistantKeys;
                entity['persistantKeys'] = tango;
                golf = report.disableRecyclingOnFullCompute;
                tango = oscar != golf;
                if(!tango) { _fun00136_ip = 169; continue _fun00135 }
 166:
                tango = golf;
 169:
                entity['disableRecyclingOnFullCompute'] = tango;
                entity = mike.bind(yankee)(entity);
                entity = zulu.batchSize;
                tango = 0;
                if(!(tango !== entity)) { _fun00136_ip = 269; continue _fun00135 }
 191:
                entity = yankee.isDirty;
                mike = entity.bind(yankee)();
                entity = null;
                if(!mike) { _fun00136_ip = 267; continue _fun00135 }
 206:
                mike = {};
                kilo = mike;
                backup = zulu;
                golf = copyDataProperties(kilo, backup);
                offset = yankee.compute;
                verify = zulu.blockStart;
                options = zulu.blockEnd;
                golf = zulu.items;
                if(!(oscar == golf)) { _fun00136_ip = 250; continue _fun00135 }
 246:
                golf = new Array(0);
 250:
                backup = offset.bind(yankee)(verify, options, golf);
                kilo = mike;
                golf = copyDataProperties(kilo, backup);
                entity = mike;
 267:
                _fun00136_ip = 346; continue _fun00135;
 269:
                mike = {};
                kilo = mike;
                backup = zulu;
                zulu = copyDataProperties(kilo, backup);
                golf = report.insetStart;
                options = oscar != golf;
                zulu = 0;
                if(!options) { _fun00136_ip = 299; continue _fun00135 }
 296:
                zulu = golf;
 299:
                report = report.insetEnd;
                oscar = oscar != report;
                tango = 0;
                if(!oscar) { _fun00136_ip = 317; continue _fun00135 }
 314:
                tango = report;
 317:
                tango = zulu + tango;
                zulu = 'size';
                mike[zulu] = tango;
                tango = new Array(0);
                zulu = 'items';
                mike[zulu] = tango;
                entity = mike;
 346:
                return entity;
            }
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 15;
    mike = offset[mike];
    options = options.bind(entity)(mike);
    mike = options.createAnimatedComponent;
    mike = mike.bind(options)(golf);
    options = 20;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'lib/native/FastList.tsx';
    options = verify.bind(offset)(options);
    zulu['default'] = golf;
    oscar = function(argFoo, argBar, argBaz) { // Original name: getItemSizeOverrideKey
        entity = global;
        entity = entity.HermesInternal;
        oscar = entity.concat;
        romeo = '';
        yankee = argFoo;
        zulu = ':';
        verify = argBar;
        golf = argBaz;
        offset = zulu;
        options = zulu;
        entity = romeo[oscar](yankee, offset, verify, options, golf, oscar);
        return entity;
    };
    zulu['getItemSizeOverrideKey'] = oscar;
    zulu['FastListItemTypes'] = report;
    zulu['FastListComputer'] = tango;
    zulu['AnimatedFastList'] = mike;
    return entity;
})();