// app/lib/native/FastList.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    option = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = option;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot34;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot34 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00006_ip = 45; continue _fun00005 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00006_ip = 54; continue _fun00005 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00006_ip = 342; continue _fun00005 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00006_ip = 322; continue _fun00005 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00006_ip = 282; continue _fun00005 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00006_ip = 269; continue _fun00005 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00006_ip = 162; continue _fun00005 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00006_ip = 178; continue _fun00005 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00006_ip = 248; continue _fun00005 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00006_ip = 248; continue _fun00005 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00006_ip = 233; continue _fun00005 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00006_ip = 246; continue _fun00005 }
 233:
            verify = _closure1_slot36;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00006_ip = 264; continue _fun00005;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00006_ip = 282; continue _fun00005;
 269:
            golfie = _closure1_slot36;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00006_ip = 322; continue _fun00005 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00006_ip = 329; continue _fun00005 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00008_ip = 56; continue _fun00007 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00008_ip = 67; continue _fun00007;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00010_ip = 23; continue _fun00009 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00010_ip = 70; continue _fun00009 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00010_ip = 55; continue _fun00009 }
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
        zuuluu = entity.Math;
        michal = zuuluu.ceil;
        tangon = _closure1_slot18;
        entity = argFoo;
        entity = entity / tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot39 = entity;
    entity = ['manualRef', 'onScroll', 'onScrollEnd', 'onLayout', 'renderHeader', 'renderFooter', 'renderSection', 'renderItem', 'renderSectionFooter', 'getRecyclerKey', 'onEndReached', 'endReachedThreshold', 'headerSize', 'footerSize', 'sectionSize', 'sectionFooterSize', 'itemSize', 'sections', 'scrollPosValue', 'batchesToRender', 'optimizeListItemRender', 'initialScrollSection', 'initialScrollItem', 'initialScrollOrientation', 'initialScrollStart', 'getAnchorIdFromIndex', 'getAnchorIndexFromId', 'EXPERIMENTAL_enableAnchorWhileScrolling', 'chunkBase', 'disableContentWrappers', 'childrenWrapper', 'stickyHeaderFooter', 'stickySectionsVariant', 'persistantKeys', 'disableRecyclingOnFullCompute', 'disableLegacyGestureHandling', 'viewabilityConfig', 'onViewableItemsChanged', 'debugLayout', 'renderAccessory', 'removeClippedSubviews', 'inActionSheet'];
    var _closure1_slot3 = entity;
    tangon = global;
    golfie = tangon.Object;
    report = golfie.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(golfie)(zuuluu, entity, michal);
    golfie = 0;
    michal = offset[golfie];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = offset[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = offset[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 3;
    michal = offset[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    report = 4;
    michal = offset[report];
    michal = option.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 5;
    michal = offset[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 6;
    michal = offset[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 7;
    yankee = offset[michal];
    michal = argCor;
    michal = michal.bind(entity)(yankee);
    var _closure1_slot11 = michal;
    yankee = 8;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    romeon = yankee.PixelRatio;
    var _closure1_slot12 = romeon;
    romeon = yankee.ScrollView;
    var _closure1_slot13 = romeon;
    romeon = yankee.StyleSheet;
    yankee = yankee.findNodeHandle;
    var _closure1_slot14 = yankee;
    yankee = 9;
    romeon = offset[yankee];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.jsxs;
    var _closure1_slot15 = romeon;
    romeon = offset[yankee];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.jsx;
    var _closure1_slot16 = romeon;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.Fragment;
    var _closure1_slot17 = yankee;
    var _closure1_slot18 = report;
    report = {'top': 0, 'right': 0, 'left': 0, 'bottom': 0};
    var _closure1_slot19 = report;
    tangon = tangon.Map;
    report = tangon.prototype;
    report = Object.create(report, {constructor: {value: tangon}});
    sizing = report;
    tangon = new sizing[tangon](kiloes);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot20 = tangon;
    report = {};
    tangon = 'SPACER';
    report['SPACER'] = tangon;
    tangon = 'HEADER';
    report['HEADER'] = tangon;
    tangon = 'FOOTER';
    report['FOOTER'] = tangon;
    tangon = 'SECTION';
    report['SECTION'] = tangon;
    tangon = 'ITEM';
    report['ITEM'] = tangon;
    tangon = 'SECTION_FOOTER';
    report['SECTION_FOOTER'] = tangon;
    var _closure1_slot21 = report;
    tangon = function() {
        tangon = function(argFoo) { // Original name: FastListItemRecycler
            tangon = argFoo;
            report = this;
            var _closure3_slot0 = report;
            oscard = _closure1_slot9;
            zuuluu = _closure2_slot0;
            entity = undefined;
            zuuluu = oscard.bind(entity)(report, zuuluu);
            zuuluu = {};
            report['_items'] = zuuluu;
            zuuluu = {};
            report['_pendingItems'] = zuuluu;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                tangon = argFoo;
                report = tangon.type;
                zuuluu = tangon.recyclerKey;
                michal = _closure3_slot0;
                entity = michal._itemsForType;
                oscard = entity.bind(michal)(report);
                report = _closure1_slot8;
                entity = undefined;
                michal = 1;
                report = report.bind(entity)(oscard, michal);
                michal = 0;
                michal = report[michal];
                michal[zuuluu] = tangon;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot0 = tangon;
        zuuluu = _closure1_slot10;
        entity = {};
        michal = '_itemsForType';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                entity = zuuluu._items;
                michal = entity[report];
                tangon = null;
                if(!(tangon == michal)) { _fun00012_ip = 37; continue _fun00011 }
 22:
                oscard = zuuluu._items;
                entity = {};
                oscard[report] = entity;
                michal = entity;
 37:
                entity = new Array(2);
                entity[0] = michal;
                michal = zuuluu._pendingItems;
                michal = michal[report];
                if(!(tangon == michal)) { _fun00012_ip = 76; continue _fun00011 }
 59:
                tangon = zuuluu._pendingItems;
                zuuluu = new Array(0);
                tangon[report] = zuuluu;
                michal = zuuluu;
 76:
                entity[1] = michal;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(5);
        michal[0] = entity;
        entity = {};
        oscard = 'get';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                option = argFoo;
                golfie = arguments[4];
                oscard = arguments[5];
                zuuluu = this;
                report = undefined;
                if(!(golfie === report)) { _fun00014_ip = 20; continue _fun00013 }
 18:
                golfie = 0;
 20:
                if(!(oscard === report)) { _fun00014_ip = 30; continue _fun00013 }
 24:
                oscard = -1;
 30:
                entity = zuuluu._itemsForType;
                tangon = entity.bind(zuuluu)(option);
                michal = _closure1_slot8;
                entity = 2;
                michal = michal.bind(report)(tangon, entity);
                entity = 0;
                report = michal[entity];
                entity = 1;
                tangon = michal[entity];
                michal = zuuluu._get;
                entity = {};
                entity['type'] = option;
                option = argBar;
                entity['layoutStart'] = option;
                option = argBaz;
                entity['layoutSize'] = option;
                option = argCor;
                entity['customKey'] = option;
                entity['section'] = golfie;
                entity['item'] = oscard;
                entity['items'] = report;
                entity['pendingItems'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = '_get';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                verify = entity.type;
                option = entity.layoutStart;
                golfie = entity.layoutSize;
                zuuluu = entity.customKey;
                oscard = entity.section;
                report = entity.item;
                michal = entity.items;
                tangon = entity.pendingItems;
                entity = null;
                if(!(entity == zuuluu)) { _fun00016_ip = 94; continue _fun00015 }
 54:
                offset = global;
                offset = offset.HermesInternal;
                romeon = offset.concat;
                result = '';
                offset = ':';
                output = verify;
                sizing = offset;
                kiloes = oscard;
                backup = offset;
                foxtra = report;
                zuuluu = result[romeon](output, sizing, kiloes, backup, foxtra, romeon);
 94:
                offset = michal[zuuluu];
                if(!(entity != offset)) { _fun00016_ip = 144; continue _fun00015 }
 102:
                entity = {};
                output = entity;
                sizing = offset;
                offset = copyDataProperties(output, sizing);
                entity['layoutStart'] = option;
                entity['layoutSize'] = golfie;
                entity['section'] = oscard;
                entity['item'] = report;
                michal = delete michal[zuuluu];
                _fun00016_ip = 196; continue _fun00015;
 144:
                michal = {};
                michal['type'] = verify;
                verify = -1;
                michal['key'] = verify;
                michal['layoutStart'] = option;
                michal['layoutSize'] = golfie;
                michal['section'] = oscard;
                michal['item'] = report;
                michal['recyclerKey'] = zuuluu;
                zuuluu = tangon.push;
                zuuluu = zuuluu.bind(tangon)(michal);
                entity = michal;
 196:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'fill';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            entity = argFoo;
            var _closure3_slot1 = entity;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 10;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.forEach;
            zuuluu = _closure1_slot21;
            michal = function(argFoo) {
                oscard = _closure3_slot0;
                zuuluu = oscard._itemsForType;
                entity = argFoo;
                report = zuuluu.bind(oscard)(entity);
                tangon = _closure1_slot8;
                entity = undefined;
                zuuluu = 2;
                tangon = tangon.bind(entity)(report, zuuluu);
                zuuluu = 0;
                report = tangon[zuuluu];
                zuuluu = 1;
                tangon = tangon[zuuluu];
                zuuluu = oscard._fill;
                michal = _closure3_slot1;
                michal = zuuluu.bind(oscard)(report, tangon, michal);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = '_fill';
        entity['key'] = oscard;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = argBar;
                var _closure3_slot0 = michal;
                entity = 0;
                var _closure3_slot1 = entity;
                zuuluu = argBaz;
                if(zuuluu) { _fun00018_ip = 65; continue _fun00017 }
 21:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 10;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                golfie = report.bind(zuuluu)(tangon);
                report = golfie.forEach;
                tangon = argFoo;
                zuuluu = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.key;
                        tangon = _closure3_slot0;
                        entity = _closure3_slot1;
                        entity = tangon[entity];
                        tangon = null;
                        if(!(tangon != entity)) { _fun00020_ip = 50; continue _fun00019 }
 29:
                        entity['key'] = zuuluu;
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
                zuuluu = report.bind(golfie)(tangon, zuuluu);
 65:
                tangon = _closure3_slot1;
                zuuluu = michal.length;
                if(!(tangon < zuuluu)) { _fun00018_ip = 134; continue _fun00017 }
 81:
                zuuluu = _closure3_slot1;
                tangon = michal[zuuluu];
                golfie = _closure2_slot0;
                zuuluu = golfie._LAST_KEY;
                zuuluu = zuuluu + 1;
                golfie['_LAST_KEY'] = zuuluu;
                tangon['key'] = zuuluu;
                zuuluu = _closure3_slot1;
                tangon = zuuluu + 1;
                _closure3_slot1 = tangon;
                zuuluu = michal.length;
                if(tangon < zuuluu) { _fun00018_ip = 81; continue _fun00017 }
 134:
                michal['length'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[4] = entity;
        entity = undefined;
        entity = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot22 = tangon;
    tangon['_LAST_KEY'] = golfie;
    tangon = function() {
        tangon = _closure1_slot10;
        zuuluu = function(argFoo) { // Original name: FastListComputer
            tangon = argFoo;
            zuuluu = this;
            report = _closure1_slot9;
            michal = _closure2_slot0;
            entity = undefined;
            michal = report.bind(entity)(zuuluu, michal);
            report = 0;
            zuuluu['chunkSize'] = report;
            michal = false;
            zuuluu['uniform'] = michal;
            oscard = new Array(0);
            zuuluu['dataCache'] = oscard;
            zuuluu['size'] = report;
            report = true;
            zuuluu['dirty'] = report;
            report = -1;
            zuuluu['lastStartChunk'] = report;
            zuuluu['lastEndChunk'] = report;
            report = new Array(0);
            zuuluu['items'] = report;
            report = new Array(0);
            zuuluu['persistantItemData'] = report;
            zuuluu['disableRecycling'] = michal;
            zuuluu['props'] = tangon;
            michal = zuuluu.updateProps;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'updateProps';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                michal = this;
                zuuluu = michal.dirty;
                tangon = !zuuluu;
                zuuluu = !tangon;
                if(!tangon) { _fun00022_ip = 60; continue _fun00021 }
 21:
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                tangon = 11;
                tangon = oscard[tangon];
                oscard = undefined;
                report = report.bind(oscard)(tangon);
                tangon = michal.props;
                tangon = report.bind(oscard)(entity, tangon);
                zuuluu = !tangon;
 60:
                michal['dirty'] = zuuluu;
                michal['props'] = entity;
                entity = entity.itemSize;
                zuuluu = 'number';
                entity = typeof entity;
                entity = zuuluu === entity;
                michal['uniform'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(17);
        michal[0] = entity;
        entity = {};
        oscard = 'setInfo';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                michal = this;
                entity = global;
                tangon = entity.Math;
                zuuluu = tangon.ceil;
                report = _closure1_slot18;
                entity = argFoo;
                entity = entity / report;
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = michal.dirty;
                tangon = !zuuluu;
                zuuluu = !tangon;
                if(!tangon) { _fun00024_ip = 61; continue _fun00023 }
 51:
                tangon = michal.chunkSize;
                zuuluu = entity !== tangon;
 61:
                michal['dirty'] = zuuluu;
                michal['chunkSize'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getSizeForHeader';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = this;
                entity = entity.props;
                entity = entity.headerSize;
                michal = undefined;
                zuuluu = 0;
                if(!(michal !== entity)) { _fun00026_ip = 25; continue _fun00025 }
 22:
                zuuluu = entity;
 25:
                report = 'number';
                tangon = typeof zuuluu;
                entity = zuuluu;
                if(!(report !== tangon)) { _fun00026_ip = 43; continue _fun00025 }
 39:
                entity = zuuluu.bind(michal)();
 43:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'getSizeForFooter';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                entity = this;
                entity = entity.props;
                entity = entity.footerSize;
                michal = undefined;
                zuuluu = 0;
                if(!(michal !== entity)) { _fun00028_ip = 25; continue _fun00027 }
 22:
                zuuluu = entity;
 25:
                report = 'number';
                tangon = typeof zuuluu;
                entity = zuuluu;
                if(!(report !== tangon)) { _fun00028_ip = 43; continue _fun00027 }
 39:
                entity = zuuluu.bind(michal)();
 43:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'getSizeForSection';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = this;
                entity = entity.props;
                entity = entity.sectionSize;
                zuuluu = undefined;
                tangon = 0;
                if(!(zuuluu !== entity)) { _fun00030_ip = 25; continue _fun00029 }
 22:
                tangon = entity;
 25:
                report = 'number';
                michal = typeof tangon;
                entity = tangon;
                if(!(report !== michal)) { _fun00030_ip = 47; continue _fun00029 }
 39:
                michal = argFoo;
                entity = tangon.bind(zuuluu)(michal);
 47:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'getSizeForItem';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                entity = this;
                entity = entity.props;
                report = entity.itemSize;
                zuuluu = 'number';
                michal = typeof report;
                entity = report;
                if(!(zuuluu !== michal)) { _fun00032_ip = 42; continue _fun00031 }
 28:
                tangon = undefined;
                zuuluu = argFoo;
                michal = argBar;
                entity = report.bind(tangon)(zuuluu, michal);
 42:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'getSizeForSectionFooter';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = this;
                entity = entity.props;
                entity = entity.sectionFooterSize;
                zuuluu = undefined;
                tangon = 0;
                if(!(zuuluu !== entity)) { _fun00034_ip = 25; continue _fun00033 }
 22:
                tangon = entity;
 25:
                report = 'number';
                michal = typeof tangon;
                entity = tangon;
                if(!(report !== michal)) { _fun00034_ip = 47; continue _fun00033 }
 39:
                michal = argFoo;
                entity = tangon.bind(zuuluu)(michal);
 47:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'getChunk';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                verify = argFoo;
                entity = this;
                option = entity.dataCache;
                michal = option.length;
                golfie = 1;
                oscard = michal - golfie;
                michal = entity.chunkCache;
                report = null;
                if(!(report != michal)) { _fun00036_ip = 66; continue _fun00035 }
 36:
                michal = entity.chunkCache;
                michal = michal.start;
                if(!(verify >= michal)) { _fun00036_ip = 66; continue _fun00035 }
 51:
                michal = entity.chunkCache;
                michal = michal.end;
                if(!(!(verify <= michal))) { _fun00036_ip = 168; continue _fun00035 }
 66:
                zuuluu = 2;
                tangon = 0;
                if(!(tangon <= oscard)) { _fun00036_ip = 164; continue _fun00035 }
 75:
                michal = oscard - tangon;
                michal = michal / zuuluu;
                michal = michal | 0;
                yankee = tangon + michal;
                michal = option[yankee];
                if(!(report != michal)) { _fun00036_ip = 164; continue _fun00035 }
 98:
                offset = michal.start;
                if(!(verify >= offset)) { _fun00036_ip = 116; continue _fun00035 }
 107:
                offset = michal.end;
                if(!(!(verify <= offset))) { _fun00036_ip = 156; continue _fun00035 }
 116:
                offset = michal.start;
                if(!(!(verify < offset))) { _fun00036_ip = 140; continue _fun00035 }
 125:
                offset = michal.end;
                if(!(verify > offset)) { _fun00036_ip = 164; continue _fun00035 }
 134:
                offset = yankee + golfie;
                _fun00036_ip = 147; continue _fun00035;
 140:
                oscard = yankee - golfie;
                offset = tangon;
 147:
                tangon = offset;
                if(tangon <= oscard) { _fun00036_ip = 75; continue _fun00035 }
 154:
                _fun00036_ip = 164; continue _fun00035;
 156:
                entity['chunkCache'] = michal;
                return michal;
 164:
                michal = undefined;
                return michal;
 168:
                entity = entity.chunkCache;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'compute';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                option = argFoo;
                foxtra = argBar;
                entity = arguments[3];
                zuuluu = this;
                var _closure3_slot0 = option;
                var _closure3_slot1 = foxtra;
                romeon = undefined;
                if(!(entity === romeon)) { _fun00038_ip = 30; continue _fun00037 }
 28:
                entity = false;
 30:
                var _closure3_slot2 = entity;
                var _closure3_slot3 = romeon;
                var _closure3_slot4 = romeon;
                var _closure3_slot5 = romeon;
                var _closure3_slot6 = romeon;
                papara = function(argFoo, argBar, argBaz, argCor) { // Original name: addInitialSection
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        foxtra = argFoo;
                        tangon = argBar;
                        zuuluu = argBaz;
                        report = argCor;
                        verify = _closure3_slot4;
                        option = verify.push;
                        romeon = _closure3_slot5;
                        yankee = romeon.get;
                        entity = _closure1_slot21;
                        offset = entity.SECTION;
                        backup = _closure3_slot3;
                        golfie = entity.SECTION;
                        entity = undefined;
                        output = backup.bind(entity)(golfie, foxtra);
                        source = romeon;
                        update = offset;
                        echoed = tangon;
                        result = zuuluu;
                        sizing = foxtra;
                        golfie = source[yankee](update, echoed, result, output, sizing, kiloes);
                        golfie = option.bind(verify)(golfie);
                        offset = tangon + zuuluu;
                        if(!(offset < report)) { _fun00040_ip = 162; continue _fun00039 }
 96:
                        zuuluu = _closure3_slot6;
                        zuuluu = zuuluu + 1;
                        _closure3_slot6 = zuuluu;
                        tangon = _closure3_slot4;
                        zuuluu = tangon.push;
                        verify = _closure3_slot5;
                        option = verify.get;
                        oscard = _closure1_slot21;
                        update = oscard.SPACER;
                        result = report - offset;
                        kiloes = _closure3_slot6;
                        sizing = 0;
                        source = verify;
                        echoed = offset;
                        output = undefined;
                        michal = source[option](update, echoed, result, output, sizing, kiloes, backup);
                        michal = zuuluu.bind(tangon)(michal);
 162:
                        return entity;
                    }
                };
                cntext = function(argFoo, argBar) { // Original name: isVisible
                    _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                        tangon = argFoo;
                        entity = _closure3_slot2;
                        entity = !entity;
                        if(entity) { _fun00042_ip = 45; continue _fun00041 }
 16:
                        report = _closure3_slot0;
                        michal = argBar;
                        michal = report - michal;
                        michal = tangon >= michal;
                        if(!michal) { _fun00042_ip = 42; continue _fun00041 }
 34:
                        zuuluu = _closure3_slot1;
                        michal = tangon < zuuluu;
 42:
                        entity = michal;
 45:
                        return entity;
                    }
                };
                entity = zuuluu.dirty;
                if(entity) { _fun00038_ip = 117; continue _fun00037 }
 69:
                entity = zuuluu.lastStartChunk;
                golfie = false;
                if(!(option === entity)) { _fun00038_ip = 129; continue _fun00037 }
 81:
                entity = zuuluu.lastEndChunk;
                golfie = false;
                if(!(foxtra === entity)) { _fun00038_ip = 129; continue _fun00037 }
 93:
                entity = {};
                michal = zuuluu.size;
                entity['size'] = michal;
                michal = zuuluu.items;
                entity['items'] = michal;
                return entity;
 117:
                entity = zuuluu.fullCompute;
                entity = entity.bind(zuuluu)();
                golfie = true;
 129:
                entity = zuuluu.props;
                backup = entity.stickyHeaderFooter;
                record = entity.getRecyclerKey;
                if(!(romeon === record)) { _fun00038_ip = 157; continue _fun00037 }
 150:
                record = _closure1_slot38;
 157:
                _closure3_slot3 = record;
                zuuluu['lastStartChunk'] = option;
                zuuluu['lastEndChunk'] = foxtra;
                sizing = global;
                entity = sizing.Map;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                variable63 = michal;
                entity = new variable63[entity](variable62);
                oscard = entity instanceof Object ? entity : michal;
                michal = _closure1_slot35;
                entity = zuuluu.persistantItemData;
                report = michal.bind(romeon)(entity);
                michal = report.bind(romeon)();
                entity = michal.done;
                kiloes = null;
                if(entity) { _fun00038_ip = 311; continue _fun00037 }
 233:
                offset = michal.value;
                output = offset.type;
                verify = offset.section;
                echoed = offset.type;
                entity = _closure1_slot21;
                result = entity.ITEM;
                entity = undefined;
                if(!(echoed === result)) { _fun00038_ip = 274; continue _fun00037 }
 269:
                entity = offset.item;
 274:
                verify = record.bind(romeon)(output, verify, entity);
                if(!(kiloes != verify)) { _fun00038_ip = 296; continue _fun00037 }
 285:
                entity = oscard.set;
                entity = entity.bind(oscard)(verify, offset);
 296:
                verify = report.bind(romeon)();
                entity = verify.done;
                michal = verify;
                if(!entity) { _fun00038_ip = 233; continue _fun00037 }
 311:
                report = sizing.Math;
                michal = report.floor;
                entity = zuuluu.chunkSize;
                entity = option / entity;
                entity = michal.bind(report)(entity);
                option = sizing.Math;
                report = option.max;
                offset = sizing.Math;
                verify = offset.ceil;
                michal = zuuluu.chunkSize;
                michal = foxtra / michal;
                michal = verify.bind(offset)(michal);
                config = report.bind(option)(michal, entity);
                michal = zuuluu.chunkSize;
                sequen = entity * michal;
                michal = new Array(0);
                zuuluu['items'] = michal;
                _closure3_slot4 = michal;
                verify = _closure1_slot22;
                report = verify.prototype;
                option = Object.create(report, {constructor: {value: verify}});
                variable62 = argBaz;
                variable63 = option;
                report = new variable63[verify](variable62, variable61);
                report = report instanceof Object ? report : option;
                _closure3_slot5 = report;
                ctrled = {'initialSection': 4294967295, 'initialItem': 4294967295, 'lastSection': 4294967295, 'lastItem': 4294967295};
                vacuum = -1;
                offset = 0;
                _closure3_slot6 = offset;
                tangon = sizing.Set;
                option = tangon.prototype;
                option = Object.create(option, {constructor: {value: tangon}});
                variable63 = option;
                tangon = new variable63[tangon](variable62);
                tangon = tangon instanceof Object ? tangon : option;
                if(!(entity <= config)) { _fun00038_ip = 524; continue _fun00037 }
 489:
                option = zuuluu.getChunk;
                foxtra = option.bind(zuuluu)(entity);
                option = entity;
                if(!(kiloes != foxtra)) { _fun00038_ip = 517; continue _fun00037 }
 507:
                verify = tangon.add;
                verify = verify.bind(tangon)(foxtra);
 517:
                entity = option + 1;
                if(entity <= config) { _fun00038_ip = 489; continue _fun00037 }
 524:
                entity = _closure1_slot35;
                source = entity.bind(romeon)(tangon);
                tangon = source.bind(romeon)();
                entity = tangon.done;
                update = tangon;
                echoed = undefined;
                result = undefined;
                output = undefined;
                foxtra = undefined;
                verify = undefined;
                option = undefined;
                tangon = undefined;
                if(entity) { _fun00038_ip = 2253; continue _fun00037 }
 565:
                entity = update.value;
                quebec = sequen;
                whisks = output;
                limora = foxtra;
                sierra = verify;
                status = option;
                target = tangon;
                if(!(kiloes != entity)) { _fun00038_ip = 2217; continue _fun00037 }
 595:
                equals = _closure1_slot35;
                entity = entity.data;
                variable41 = equals.bind(romeon)(entity);
                variable42 = variable41.bind(romeon)();
                entity = variable42.done;
                variable40 = sequen;
                variable39 = variable42;
                variable38 = foxtra;
                variable37 = verify;
                variable36 = option;
                equals = tangon;
                quebec = variable40;
                echoed = variable39;
                result = variable41;
                whisks = output;
                limora = variable38;
                sierra = variable37;
                status = variable36;
                target = equals;
                if(entity) { _fun00038_ip = 2217; continue _fun00037 }
 666:
                variable46 = variable39.value;
                variable42 = variable46.layoutStart;
                entity = variable46.layoutSize;
                entity = variable42 + entity;
                variable48 = variable40;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equals;
                if(!(!(entity < variable40))) { _fun00038_ip = 2160; continue _fun00037 }
 709:
                variable47 = variable46.type;
                entity = _closure1_slot21;
                entity = entity.HEADER;
                if(!(entity !== variable47)) { _fun00038_ip = 2065; continue _fun00037 }
 731:
                entity = _closure1_slot21;
                entity = entity.SECTION;
                if(!(entity !== variable47)) { _fun00038_ip = 1857; continue _fun00037 }
 748:
                entity = _closure1_slot21;
                entity = entity.ITEM;
                if(!(entity !== variable47)) { _fun00038_ip = 1093; continue _fun00037 }
 765:
                entity = _closure1_slot21;
                entity = entity.SECTION_FOOTER;
                if(!(entity !== variable47)) { _fun00038_ip = 914; continue _fun00037 }
 782:
                entity = _closure1_slot21;
                entity = entity.FOOTER;
                variable48 = variable40;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equals;
                if(!(entity === variable47)) { _fun00038_ip = 2160; continue _fun00037 }
 814:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                entity = cntext.bind(romeon)(variable47, entity);
                if(!entity) { _fun00038_ip = 881; continue _fun00037 }
 835:
                variable47 = michal.push;
                variable51 = report.get;
                entity = _closure1_slot21;
                variable62 = entity.FOOTER;
                variable61 = variable46.layoutStart;
                variable60 = variable46.layoutSize;
                variable63 = report;
                variable59 = undefined;
                entity = variable63[variable51](variable62, variable61, variable60, variable59, variable58);
                entity = variable47.bind(michal)(entity);
 881:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                variable48 = variable47 + entity;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equals;
                _fun00038_ip = 2160; continue _fun00037;
 914:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                entity = cntext.bind(romeon)(variable47, entity);
                if(!entity) { _fun00038_ip = 1060; continue _fun00037 }
 938:
                entity = michal.length;
                if(!(offset === entity)) { _fun00038_ip = 988; continue _fun00037 }
 947:
                variable62 = variable46.section;
                entity = variable46.sectionData;
                variable61 = entity.layoutStart;
                entity = variable46.sectionData;
                variable60 = entity.layoutSize;
                variable59 = variable46.layoutStart;
                variable63 = undefined;
                entity = variable63[papara](variable62, variable61, variable60, variable59, variable58);
 988:
                variable47 = michal.push;
                variable53 = report.get;
                entity = _closure1_slot21;
                variable52 = entity.SECTION_FOOTER;
                variable51 = variable46.layoutStart;
                variable60 = variable46.layoutSize;
                variable49 = entity.SECTION_FOOTER;
                entity = variable46.section;
                variable59 = record.bind(romeon)(variable49, entity);
                variable58 = variable46.section;
                variable63 = report;
                variable62 = variable52;
                variable61 = variable51;
                entity = variable63[variable53](variable62, variable61, variable60, variable59, variable58, variable57);
                entity = variable47.bind(michal)(entity);
 1060:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                variable48 = variable47 + entity;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equals;
                _fun00038_ip = 2160; continue _fun00037;
 1093:
                entity = variable46.uniform;
                if(!(kiloes != entity)) { _fun00038_ip = 1566; continue _fun00037 }
 1106:
                entity = variable46.layoutStart;
                entity = variable40 > entity;
                variable51 = 0;
                if(!entity) { _fun00038_ip = 1158; continue _fun00037 }
 1121:
                variable49 = sizing.Math;
                variable47 = variable49.floor;
                entity = variable46.layoutStart;
                variable50 = variable40 - entity;
                entity = variable46.itemSize;
                entity = variable50 / entity;
                variable51 = variable47.bind(variable49)(entity);
 1158:
                variable47 = variable46.layoutStart;
                entity = variable46.itemSize;
                entity = entity * variable51;
                variable52 = variable47 + entity;
                entity = zuuluu.chunkSize;
                entity = config * entity;
                variable48 = variable52;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable51;
                variable42 = equals;
                if(!(variable52 < entity)) { _fun00038_ip = 2160; continue _fun00037 }
 1210:
                entity = variable46.items;
                variable50 = variable52;
                variable49 = variable51;
                variable47 = equals;
                variable48 = variable50;
                variable45 = variable38;
                variable44 = variable37;
                variable42 = variable47;
                variable43 = variable49;
                if(!(variable43 < entity)) { _fun00038_ip = 2160; continue _fun00037 }
 1247:
                entity = variable46.itemSize;
                entity = cntext.bind(romeon)(variable50, entity);
                variable51 = variable50;
                if(!entity) { _fun00038_ip = 1476; continue _fun00037 }
 1268:
                entity = michal.length;
                if(!(offset === entity)) { _fun00038_ip = 1315; continue _fun00037 }
 1277:
                variable62 = variable46.section;
                entity = variable46.sectionData;
                variable61 = entity.layoutStart;
                entity = variable46.sectionData;
                variable60 = entity.layoutSize;
                variable63 = undefined;
                variable59 = variable51;
                entity = variable63[papara](variable62, variable61, variable60, variable59, variable58);
 1315:
                entity = ctrled.initialSection;
                if(!(vacuum === entity)) { _fun00038_ip = 1336; continue _fun00037 }
 1325:
                entity = variable46.section;
                ctrled['initialSection'] = entity;
 1336:
                entity = ctrled.initialItem;
                if(!(vacuum === entity)) { _fun00038_ip = 1352; continue _fun00037 }
 1346:
                ctrled['initialItem'] = variable49;
 1352:
                entity = variable46.section;
                ctrled['lastSection'] = entity;
                ctrled['lastItem'] = variable49;
                entity = _closure1_slot21;
                variable52 = entity.ITEM;
                entity = variable46.section;
                entity = record.bind(romeon)(variable52, entity, variable49);
                variable52 = kiloes != entity;
                if(!variable52) { _fun00038_ip = 1408; continue _fun00037 }
 1398:
                variable53 = oscard.has;
                variable52 = variable53.bind(oscard)(entity);
 1408:
                if(!variable52) { _fun00038_ip = 1421; continue _fun00037 }
 1411:
                variable52 = oscard.delete;
                variable52 = variable52.bind(oscard)(entity);
 1421:
                variable53 = michal.push;
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
                variable52 = variable53.bind(michal)(variable52);
                variable47 = entity;
 1476:
                entity = variable46.itemSize;
                variable53 = variable51 + entity;
                variable51 = variable49 + 1;
                entity = zuuluu.chunkSize;
                entity = config * entity;
                variable52 = variable47;
                variable48 = variable53;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable51;
                variable42 = variable52;
                if(!(variable53 < entity)) { _fun00038_ip = 2160; continue _fun00037 }
 1524:
                entity = variable46.items;
                variable50 = variable53;
                variable49 = variable51;
                variable47 = variable52;
                variable48 = variable50;
                variable45 = variable38;
                variable44 = variable37;
                variable42 = variable47;
                variable43 = variable49;
                if(variable43 < entity) { _fun00038_ip = 1247; continue _fun00037 }
 1561:
                _fun00038_ip = 2160; continue _fun00037;
 1566:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                variable47 = cntext.bind(romeon)(variable47, entity);
                entity = variable37;
                if(!variable47) { _fun00038_ip = 1824; continue _fun00037 }
 1593:
                variable47 = michal.length;
                if(!(offset === variable47)) { _fun00038_ip = 1643; continue _fun00037 }
 1602:
                variable62 = variable46.section;
                variable47 = variable46.sectionData;
                variable61 = variable47.layoutStart;
                variable47 = variable46.sectionData;
                variable60 = variable47.layoutSize;
                variable59 = variable46.layoutStart;
                variable63 = undefined;
                variable47 = variable63[papara](variable62, variable61, variable60, variable59, variable58);
 1643:
                variable47 = ctrled.initialSection;
                if(!(vacuum === variable47)) { _fun00038_ip = 1664; continue _fun00037 }
 1653:
                variable47 = variable46.section;
                ctrled['initialSection'] = variable47;
 1664:
                variable47 = ctrled.initialItem;
                if(!(vacuum === variable47)) { _fun00038_ip = 1685; continue _fun00037 }
 1674:
                variable47 = variable46.item;
                ctrled['initialItem'] = variable47;
 1685:
                variable47 = variable46.section;
                ctrled['lastSection'] = variable47;
                variable47 = variable46.item;
                ctrled['lastItem'] = variable47;
                variable47 = _closure1_slot21;
                variable50 = variable47.ITEM;
                variable49 = variable46.section;
                variable47 = variable46.item;
                variable47 = record.bind(romeon)(variable50, variable49, variable47);
                variable49 = kiloes != variable47;
                if(!variable49) { _fun00038_ip = 1751; continue _fun00037 }
 1741:
                variable50 = oscard.has;
                variable49 = variable50.bind(oscard)(variable47);
 1751:
                if(!variable49) { _fun00038_ip = 1764; continue _fun00037 }
 1754:
                variable49 = oscard.delete;
                variable49 = variable49.bind(oscard)(variable47);
 1764:
                variable50 = michal.push;
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
                variable49 = variable50.bind(michal)(variable49);
                entity = variable47;
 1824:
                variable49 = variable46.layoutStart;
                variable47 = variable46.layoutSize;
                variable48 = variable49 + variable47;
                variable44 = entity;
                variable45 = variable38;
                variable43 = variable36;
                variable42 = equals;
                _fun00038_ip = 2160; continue _fun00037;
 1857:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                variable47 = cntext.bind(romeon)(variable47, entity);
                entity = variable38;
                if(!variable47) { _fun00038_ip = 2035; continue _fun00037 }
 1884:
                variable47 = ctrled.initialSection;
                if(!(vacuum !== variable47)) { _fun00038_ip = 1907; continue _fun00037 }
 1894:
                variable47 = variable46.section;
                ctrled['lastSection'] = variable47;
                _fun00038_ip = 1929; continue _fun00037;
 1907:
                variable47 = variable46.section;
                ctrled['initialSection'] = variable47;
                variable47 = variable46.section;
                ctrled['lastSection'] = variable47;
 1929:
                variable47 = _closure1_slot21;
                variable49 = variable47.SECTION;
                variable47 = variable46.section;
                variable47 = record.bind(romeon)(variable49, variable47);
                variable49 = kiloes != variable47;
                if(!variable49) { _fun00038_ip = 1967; continue _fun00037 }
 1957:
                variable50 = oscard.has;
                variable49 = variable50.bind(oscard)(variable47);
 1967:
                if(!variable49) { _fun00038_ip = 1980; continue _fun00037 }
 1970:
                variable49 = oscard.delete;
                variable49 = variable49.bind(oscard)(variable47);
 1980:
                variable50 = michal.push;
                variable54 = report.get;
                variable49 = _closure1_slot21;
                variable62 = variable49.SECTION;
                variable61 = variable46.layoutStart;
                variable60 = variable46.layoutSize;
                variable58 = variable46.section;
                variable63 = report;
                variable59 = variable47;
                variable49 = variable63[variable54](variable62, variable61, variable60, variable59, variable58, variable57);
                variable49 = variable50.bind(michal)(variable49);
                entity = variable47;
 2035:
                variable49 = variable46.layoutStart;
                variable47 = variable46.layoutSize;
                variable48 = variable49 + variable47;
                variable45 = entity;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equals;
                _fun00038_ip = 2160; continue _fun00037;
 2065:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                entity = cntext.bind(romeon)(variable47, entity);
                if(!entity) { _fun00038_ip = 2132; continue _fun00037 }
 2086:
                variable47 = michal.push;
                variable51 = report.get;
                entity = _closure1_slot21;
                variable62 = entity.HEADER;
                variable61 = variable46.layoutStart;
                variable60 = variable46.layoutSize;
                variable63 = report;
                variable59 = undefined;
                entity = variable63[variable51](variable62, variable61, variable60, variable59, variable58);
                entity = variable47.bind(michal)(entity);
 2132:
                variable47 = variable46.layoutStart;
                entity = variable46.layoutSize;
                variable48 = variable47 + entity;
                variable45 = variable38;
                variable44 = variable37;
                variable43 = variable36;
                variable42 = equals;
 2160:
                variable47 = variable41.bind(romeon)();
                entity = variable47.done;
                variable40 = variable48;
                variable38 = variable45;
                variable37 = variable44;
                variable36 = variable43;
                equals = variable42;
                variable39 = variable47;
                quebec = variable40;
                echoed = variable39;
                result = variable41;
                whisks = variable46;
                limora = variable38;
                sierra = variable37;
                status = variable36;
                target = equals;
                if(!entity) { _fun00038_ip = 666; continue _fun00037 }
 2217:
                equals = source.bind(romeon)();
                entity = equals.done;
                sequen = quebec;
                output = whisks;
                foxtra = limora;
                verify = sierra;
                option = status;
                tangon = target;
                update = equals;
                if(!entity) { _fun00038_ip = 565; continue _fun00037 }
 2253:
                foxtra = new Array(0);
                tangon = new Array(0);
                entity = _closure1_slot35;
                source = entity.bind(romeon)(oscard);
                oscard = source.bind(romeon)();
                entity = oscard.done;
                verify = 2;
                option = 1;
                update = oscard;
                echoed = 0;
                output = 0;
                result = 0;
                oscard = 0;
                if(entity) { _fun00038_ip = 2601; continue _fun00037 }
 2302:
                vacuum = update.value;
                entity = _closure1_slot8;
                entity = entity.bind(romeon)(vacuum, verify);
                papara = entity[offset];
                cntext = entity[option];
                vacuum = cntext.section;
                entity = ctrled.initialSection;
                if(!(!(vacuum < entity))) { _fun00038_ip = 2536; continue _fun00037 }
 2343:
                vacuum = cntext.section;
                entity = ctrled.lastSection;
                if(!(!(vacuum > entity))) { _fun00038_ip = 2499; continue _fun00037 }
 2361:
                config = cntext.type;
                entity = _closure1_slot21;
                entity = entity.ITEM;
                sequen = echoed;
                vacuum = output;
                if(!(config === entity)) { _fun00038_ip = 2571; continue _fun00037 }
 2389:
                config = cntext.section;
                entity = ctrled.initialSection;
                if(!(config === entity)) { _fun00038_ip = 2419; continue _fun00037 }
 2404:
                config = cntext.item;
                entity = ctrled.initialItem;
                if(!(!(config < entity))) { _fun00038_ip = 2456; continue _fun00037 }
 2419:
                entity = cntext.layoutSize;
                entity = output + entity;
                record = tangon.push;
                config = new Array(2);
                config[0] = papara;
                config[1] = cntext;
                config = record.bind(tangon)(config);
                config = echoed;
                _fun00038_ip = 2491; continue _fun00037;
 2456:
                record = cntext.layoutSize;
                config = echoed + record;
                status = foxtra.push;
                target = new Array(2);
                target[0] = papara;
                target[1] = cntext;
                target = status.bind(foxtra)(target);
                entity = output;
 2491:
                sequen = config;
                vacuum = entity;
                _fun00038_ip = 2571; continue _fun00037;
 2499:
                entity = cntext.layoutSize;
                vacuum = output + entity;
                record = tangon.push;
                config = new Array(2);
                config[0] = papara;
                config[1] = cntext;
                config = record.bind(tangon)(config);
                sequen = echoed;
                _fun00038_ip = 2571; continue _fun00037;
 2536:
                entity = cntext.layoutSize;
                sequen = echoed + entity;
                record = foxtra.push;
                config = new Array(2);
                config[0] = papara;
                config[1] = cntext;
                config = record.bind(foxtra)(config);
                vacuum = output;
 2571:
                config = source.bind(romeon)();
                entity = config.done;
                echoed = sequen;
                output = vacuum;
                update = config;
                result = echoed;
                oscard = output;
                if(!entity) { _fun00038_ip = 2302; continue _fun00037 }
 2601:
                entity = michal[offset];
                if(!(kiloes != entity)) { _fun00038_ip = 3045; continue _fun00037 }
 2612:
                output = entity.layoutStart;
                if(!(output > offset)) { _fun00038_ip = 3045; continue _fun00037 }
 2625:
                output = zuuluu.headerDataCache;
                sequen = entity.layoutStart;
                echoed = backup;
                if(!backup) { _fun00038_ip = 2647; continue _fun00037 }
 2643:
                echoed = kiloes != output;
 2647:
                if(!echoed) { _fun00038_ip = 2663; continue _fun00037 }
 2650:
                update = entity.type;
                entity = 'HEADER';
                echoed = entity !== update;
 2663:
                entity = sequen;
                if(!echoed) { _fun00038_ip = 2824; continue _fun00037 }
 2672:
                echoed = output.layoutStart;
                update = sequen - echoed;
                echoed = output.layoutSize;
                echoed = update - echoed;
                if(!(echoed > offset)) { _fun00038_ip = 2771; continue _fun00037 }
 2696:
                update = michal.unshift;
                vacuum = report.get;
                echoed = _closure1_slot21;
                variable62 = echoed.SPACER;
                source = output.layoutStart;
                echoed = output.layoutSize;
                variable61 = source + echoed;
                echoed = output.layoutStart;
                sequen = sequen - echoed;
                echoed = output.layoutSize;
                variable60 = sequen - echoed;
                variable63 = report;
                variable59 = undefined;
                variable58 = 0;
                variable57 = 0;
                echoed = variable63[vacuum](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                echoed = update.bind(michal)(echoed);
 2771:
                update = michal.unshift;
                vacuum = report.get;
                echoed = _closure1_slot21;
                variable62 = echoed.HEADER;
                variable61 = output.layoutStart;
                variable60 = output.layoutSize;
                variable63 = report;
                variable59 = undefined;
                echoed = variable63[vacuum](variable62, variable61, variable60, variable59, variable58);
                echoed = update.bind(michal)(echoed);
                entity = output.layoutStart;
 2824:
                output = sizing.Math;
                sizing = output.max;
                entity = entity - result;
                output = sizing.bind(output)(entity, offset);
                entity = _closure1_slot35;
                sizing = entity.bind(romeon)(foxtra);
                foxtra = sizing.bind(romeon)();
                entity = foxtra.done;
                if(entity) { _fun00038_ip = 2996; continue _fun00037 }
 2869:
                result = foxtra.value;
                entity = _closure1_slot8;
                entity = entity.bind(romeon)(result, verify);
                sequen = entity[offset];
                config = entity[option];
                result = michal.unshift;
                vacuum = report.get;
                ctrled = config.type;
                source = config.layoutStart;
                update = config.layoutSize;
                echoed = config.section;
                cntext = config.type;
                entity = _closure1_slot21;
                record = entity.ITEM;
                entity = undefined;
                if(!(cntext === record)) { _fun00038_ip = 2951; continue _fun00037 }
 2946:
                entity = config.item;
 2951:
                variable63 = report;
                variable62 = ctrled;
                variable61 = source;
                variable60 = update;
                variable59 = sequen;
                variable58 = echoed;
                variable57 = entity;
                entity = variable63[vacuum](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                entity = result.bind(michal)(entity);
                result = sizing.bind(romeon)();
                entity = result.done;
                foxtra = result;
                if(!entity) { _fun00038_ip = 2869; continue _fun00037 }
 2996:
                if(!(output > offset)) { _fun00038_ip = 3045; continue _fun00037 }
 3000:
                foxtra = michal.unshift;
                sizing = report.get;
                entity = _closure1_slot21;
                variable62 = entity.SPACER;
                variable63 = report;
                variable61 = 0;
                variable60 = output;
                variable59 = undefined;
                variable58 = 0;
                variable57 = option;
                entity = variable63[sizing](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                entity = foxtra.bind(michal)(entity);
 3045:
                entity = michal.length;
                entity = entity - option;
                entity = michal[entity];
                if(!(kiloes == entity)) { _fun00038_ip = 3069; continue _fun00037 }
 3062:
                result = zuuluu.size;
                _fun00038_ip = 3085; continue _fun00037;
 3069:
                sizing = entity.layoutStart;
                foxtra = entity.layoutSize;
                result = sizing + foxtra;
 3085:
                foxtra = zuuluu.size;
                if(!(result < foxtra)) { _fun00038_ip = 3484; continue _fun00037 }
 3097:
                foxtra = zuuluu.footerDataCache;
                if(!backup) { _fun00038_ip = 3110; continue _fun00037 }
 3106:
                backup = kiloes != foxtra;
 3110:
                if(!backup) { _fun00038_ip = 3126; continue _fun00037 }
 3113:
                kiloes = entity.type;
                entity = 'FOOTER';
                backup = entity !== kiloes;
 3126:
                entity = result;
                if(!backup) { _fun00038_ip = 3269; continue _fun00037 }
 3135:
                backup = foxtra.layoutStart;
                if(!(result < backup)) { _fun00038_ip = 3207; continue _fun00037 }
 3145:
                kiloes = michal.push;
                output = report.get;
                backup = _closure1_slot21;
                variable62 = backup.SPACER;
                echoed = foxtra.layoutStart;
                backup = foxtra.layoutSize;
                backup = echoed + backup;
                variable60 = backup - result;
                variable63 = report;
                variable61 = result;
                variable59 = undefined;
                variable58 = option;
                variable57 = 0;
                backup = variable63[output](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                backup = kiloes.bind(michal)(backup);
 3207:
                kiloes = michal.push;
                result = report.get;
                backup = _closure1_slot21;
                variable62 = backup.FOOTER;
                variable61 = foxtra.layoutStart;
                variable60 = foxtra.layoutSize;
                variable63 = report;
                variable59 = undefined;
                backup = variable63[result](variable62, variable61, variable60, variable59, variable58);
                backup = kiloes.bind(michal)(backup);
                backup = foxtra.layoutStart;
                foxtra = foxtra.layoutSize;
                entity = backup + foxtra;
 3269:
                kiloes = entity + oscard;
                entity = zuuluu.size;
                if(!(kiloes < entity)) { _fun00038_ip = 3334; continue _fun00037 }
 3282:
                oscard = michal.push;
                backup = report.get;
                entity = _closure1_slot21;
                variable62 = entity.SPACER;
                entity = zuuluu.size;
                variable60 = entity - kiloes;
                variable63 = report;
                variable61 = kiloes;
                variable59 = undefined;
                variable58 = option;
                variable57 = option;
                entity = variable63[backup](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                entity = oscard.bind(michal)(entity);
 3334:
                entity = _closure1_slot35;
                oscard = entity.bind(romeon)(tangon);
                tangon = oscard.bind(romeon)();
                entity = tangon.done;
                if(entity) { _fun00038_ip = 3484; continue _fun00037 }
 3358:
                foxtra = tangon.value;
                entity = _closure1_slot8;
                entity = entity.bind(romeon)(foxtra, verify);
                echoed = entity[offset];
                update = entity[option];
                foxtra = michal.push;
                result = report.get;
                output = update.type;
                sizing = update.layoutStart;
                kiloes = update.layoutSize;
                backup = update.section;
                ctrled = update.type;
                entity = _closure1_slot21;
                source = entity.ITEM;
                entity = undefined;
                if(!(ctrled === source)) { _fun00038_ip = 3439; continue _fun00037 }
 3434:
                entity = update.item;
 3439:
                variable63 = report;
                variable62 = output;
                variable61 = sizing;
                variable60 = kiloes;
                variable59 = echoed;
                variable58 = backup;
                variable57 = entity;
                entity = variable63[result](variable62, variable61, variable60, variable59, variable58, variable57, variable56);
                entity = foxtra.bind(michal)(entity);
                foxtra = oscard.bind(romeon)();
                entity = foxtra.done;
                tangon = foxtra;
                if(!entity) { _fun00038_ip = 3358; continue _fun00037 }
 3484:
                tangon = report.fill;
                entity = zuuluu.disableRecycling;
                if(entity) { _fun00038_ip = 3519; continue _fun00037 }
 3499:
                oscard = zuuluu.props;
                oscard = oscard.disableRecyclingOnFullCompute;
                if(!oscard) { _fun00038_ip = 3516; continue _fun00037 }
 3513:
                oscard = golfie;
 3516:
                entity = oscard;
 3519:
                entity = tangon.bind(report)(entity);
                entity = {};
                zuuluu = zuuluu.size;
                entity['size'] = zuuluu;
                entity['items'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'fullCompute';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                golfie = zuuluu.props;
                ctrled = golfie.sections;
                oscard = golfie.insetStart;
                report = 0;
                entity = undefined;
                tangon = 0;
                if(!(entity !== oscard)) { _fun00044_ip = 39; continue _fun00043 }
 36:
                tangon = oscard;
 39:
                option = golfie.insetEnd;
                oscard = 0;
                if(!(entity !== option)) { _fun00044_ip = 54; continue _fun00043 }
 51:
                oscard = option;
 54:
                source = golfie.getRecyclerKey;
                if(!(entity === source)) { _fun00044_ip = 71; continue _fun00043 }
 64:
                source = _closure1_slot38;
 71:
                golfie = global;
                verify = golfie.Set;
                golfie = zuuluu.props;
                variable43 = golfie.persistantKeys;
                option = verify.prototype;
                option = Object.create(option, {constructor: {value: verify}});
                variable44 = option;
                golfie = new variable44[verify](variable43, variable42);
                update = golfie instanceof Object ? golfie : option;
                golfie = new Array(0);
                zuuluu['persistantItemData'] = golfie;
                golfie = new Array(0);
                zuuluu['dataCache'] = golfie;
                var _closure3_slot1 = golfie;
                zuuluu['chunkCache'] = entity;
                golfie = zuuluu.chunkSize;
                var _closure3_slot2 = golfie;
                var _closure3_slot3 = tangon;
                zuuluu['headerDataCache'] = entity;
                zuuluu['footerDataCache'] = entity;
                verify = function(argFoo, argBar, argBaz) { // Original name: pushData
                    _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                        offset = argFoo;
                        verify = argBar;
                        zuuluu = argBaz;
                        michal = _closure3_slot3;
                        entity = verify - offset;
                        entity = michal + entity;
                        _closure3_slot3 = entity;
                        entity = global;
                        golfie = entity.Math;
                        oscard = golfie.max;
                        option = entity.Math;
                        report = option.floor;
                        michal = _closure3_slot2;
                        michal = offset / michal;
                        report = report.bind(option)(michal);
                        michal = 0;
                        oscard = oscard.bind(golfie)(report, michal);
                        report = entity.Math;
                        michal = report.max;
                        option = entity.Math;
                        golfie = option.floor;
                        entity = _closure3_slot2;
                        entity = verify / entity;
                        golfie = golfie.bind(option)(entity);
                        entity = 1;
                        entity = golfie - entity;
                        michal = michal.bind(report)(entity, oscard);
                        report = _closure3_slot0;
                        entity = report.getChunk;
                        entity = entity.bind(report)(oscard);
                        report = null;
                        if(!(report == entity)) { _fun00046_ip = 179; continue _fun00045 }
 144:
                        report = {};
                        report['start'] = oscard;
                        report['end'] = michal;
                        oscard = new Array(0);
                        report['data'] = oscard;
                        golfie = _closure3_slot1;
                        oscard = golfie.push;
                        oscard = oscard.bind(golfie)(report);
                        entity = report;
 179:
                        golfie = zuuluu.type;
                        oscard = _closure1_slot21;
                        oscard = oscard.HEADER;
                        if(!(golfie !== oscard)) { _fun00046_ip = 232; continue _fun00045 }
 201:
                        oscard = zuuluu.type;
                        report = _closure1_slot21;
                        report = report.FOOTER;
                        if(!(oscard === report)) { _fun00046_ip = 242; continue _fun00045 }
 220:
                        report = _closure3_slot0;
                        report['footerDataCache'] = zuuluu;
                        _fun00046_ip = 242; continue _fun00045;
 232:
                        tangon = _closure3_slot0;
                        tangon['headerDataCache'] = zuuluu;
 242:
                        entity['end'] = michal;
                        michal = entity.data;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
                        entity = undefined;
                        return entity;
                    }
                };
                tangon = zuuluu.getSizeForHeader;
                offset = tangon.bind(zuuluu)();
                tangon = offset > report;
                echoed = undefined;
                if(!tangon) { _fun00044_ip = 239; continue _fun00043 }
 192:
                tangon = _closure3_slot3;
                option = tangon + offset;
                golfie = {};
                yankee = _closure1_slot21;
                yankee = yankee.HEADER;
                golfie['type'] = yankee;
                golfie['layoutStart'] = tangon;
                golfie['layoutSize'] = offset;
                golfie = verify.bind(entity)(tangon, option, golfie);
                echoed = tangon;
 239:
                tangon = ctrled.length;
                golfie = report < tangon;
                result = true;
                output = null;
                sizing = 0;
                kiloes = undefined;
                backup = undefined;
                foxtra = undefined;
                romeon = undefined;
                yankee = undefined;
                offset = undefined;
                option = undefined;
                if(!golfie) { _fun00044_ip = 883; continue _fun00043 }
 277:
                quebec = ctrled[sizing];
                record = foxtra;
                config = romeon;
                sequen = yankee;
                vacuum = offset;
                if(!(report !== quebec)) { _fun00044_ip = 856; continue _fun00043 }
 300:
                cntext = _closure3_slot3;
                golfie = zuuluu.getSizeForSection;
                sierra = golfie.bind(zuuluu)(sizing);
                status = {};
                golfie = _closure1_slot21;
                golfie = golfie.SECTION;
                status['type'] = golfie;
                status['layoutStart'] = cntext;
                status['layoutSize'] = sierra;
                status['section'] = sizing;
                golfie = update.size;
                if(!(golfie > report)) { _fun00044_ip = 424; continue _fun00043 }
 356:
                golfie = _closure1_slot21;
                golfie = golfie.SECTION;
                golfie = source.bind(entity)(golfie, sizing);
                papara = output != golfie;
                if(!papara) { _fun00044_ip = 389; continue _fun00043 }
 379:
                target = update.has;
                papara = target.bind(update)(golfie);
 389:
                foxtra = golfie;
                if(!papara) { _fun00044_ip = 424; continue _fun00043 }
 395:
                target = zuuluu.persistantItemData;
                papara = target.push;
                papara = papara.bind(target)(status);
                papara = update.delete;
                papara = papara.bind(update)(golfie);
                foxtra = golfie;
 424:
                golfie = cntext + sierra;
                golfie = verify.bind(entity)(cntext, golfie, status);
                golfie = zuuluu.uniform;
                if(golfie) { _fun00044_ip = 644; continue _fun00043 }
 447:
                equals = report < quebec;
                whisks = 0;
                golfie = offset;
                limora = cntext;
                target = 0;
                papara = yankee;
                cntext = golfie;
                if(!equals) { _fun00044_ip = 741; continue _fun00043 }
 473:
                equals = zuuluu.getSizeForItem;
                equals = equals.bind(zuuluu)(sizing, whisks);
                variable38 = _closure3_slot3;
                variable37 = {};
                variable36 = _closure1_slot21;
                variable36 = variable36.ITEM;
                variable37['type'] = variable36;
                variable37['layoutStart'] = variable38;
                variable37['layoutSize'] = equals;
                variable37['section'] = sizing;
                variable37['item'] = whisks;
                variable37['sectionData'] = status;
                equals = variable38 + equals;
                equals = verify.bind(entity)(variable38, equals, variable37);
                variable36 = update.size;
                equals = whisks;
                if(!(variable36 > report)) { _fun00044_ip = 620; continue _fun00043 }
 551:
                variable36 = _closure1_slot21;
                variable36 = variable36.ITEM;
                variable36 = source.bind(entity)(variable36, sizing, equals);
                variable39 = output != variable36;
                if(!variable39) { _fun00044_ip = 585; continue _fun00043 }
 575:
                variable40 = update.has;
                variable39 = variable40.bind(update)(variable36);
 585:
                golfie = variable36;
                if(!variable39) { _fun00044_ip = 620; continue _fun00043 }
 591:
                variable40 = zuuluu.persistantItemData;
                variable39 = variable40.push;
                variable39 = variable39.bind(variable40)(variable37);
                variable39 = update.delete;
                variable39 = variable39.bind(update)(variable36);
                golfie = variable36;
 620:
                whisks = equals + 1;
                limora = variable38;
                papara = variable37;
                cntext = golfie;
                target = whisks;
                if(target < quebec) { _fun00044_ip = 473; continue _fun00043 }
 642:
                _fun00044_ip = 741; continue _fun00043;
 644:
                golfie = zuuluu.getSizeForItem;
                variable36 = golfie.bind(zuuluu)(sizing, report);
                golfie = _closure3_slot3;
                whisks = variable36 * quebec;
                equals = golfie + whisks;
                whisks = {};
                variable37 = _closure1_slot21;
                variable37 = variable37.ITEM;
                whisks['type'] = variable37;
                whisks['uniform'] = result;
                whisks['layoutStart'] = golfie;
                whisks['itemSize'] = variable36;
                variable36 = variable36 * quebec;
                whisks['layoutSize'] = variable36;
                whisks['section'] = sizing;
                whisks['items'] = quebec;
                whisks['sectionData'] = status;
                whisks = verify.bind(entity)(golfie, equals, whisks);
                limora = golfie;
                target = romeon;
                papara = yankee;
                cntext = offset;
 741:
                golfie = zuuluu.getSizeForSectionFooter;
                golfie = golfie.bind(zuuluu)(sizing);
                echoed = limora;
                kiloes = sierra;
                backup = status;
                record = foxtra;
                config = target;
                sequen = papara;
                vacuum = cntext;
                option = golfie;
                if(!(option > report)) { _fun00044_ip = 856; continue _fun00043 }
 782:
                limora = _closure3_slot3;
                equals = limora + golfie;
                whisks = {};
                quebec = _closure1_slot21;
                quebec = quebec.SECTION_FOOTER;
                whisks['type'] = quebec;
                whisks['layoutStart'] = limora;
                whisks['layoutSize'] = golfie;
                whisks['section'] = sizing;
                whisks['sectionData'] = status;
                whisks = verify.bind(entity)(limora, equals, whisks);
                echoed = limora;
                kiloes = sierra;
                backup = status;
                record = foxtra;
                config = target;
                sequen = papara;
                vacuum = cntext;
                option = golfie;
 856:
                sizing = sizing + 1;
                golfie = ctrled.length;
                foxtra = record;
                romeon = config;
                yankee = sequen;
                offset = vacuum;
                if(sizing < golfie) { _fun00044_ip = 277; continue _fun00043 }
 883:
                golfie = zuuluu.getSizeForFooter;
                offset = golfie.bind(zuuluu)();
                if(!(offset > report)) { _fun00044_ip = 940; continue _fun00043 }
 899:
                option = _closure3_slot3;
                golfie = option + offset;
                report = {};
                yankee = _closure1_slot21;
                yankee = yankee.FOOTER;
                report['type'] = yankee;
                report['layoutStart'] = option;
                report['layoutSize'] = offset;
                report = verify.bind(entity)(option, golfie, report);
 940:
                report = _closure3_slot3;
                report = report + oscard;
                _closure3_slot3 = report;
                report = _closure1_slot12;
                tangon = report.roundToNearestPixel;
                michal = _closure3_slot3;
                michal = tangon.bind(report)(michal);
                zuuluu['size'] = michal;
                michal = false;
                zuuluu['dirty'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'getChunkDataFromSectionItem';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                offset = argFoo;
                verify = argBar;
                entity = this;
                michal = entity.dirty;
                if(!michal) { _fun00048_ip = 28; continue _fun00047 }
 18:
                michal = entity.fullCompute;
                michal = michal.bind(entity)();
 28:
                zuuluu = _closure1_slot35;
                michal = entity.dataCache;
                entity = undefined;
                golfie = zuuluu.bind(entity)(michal);
                zuuluu = golfie.bind(entity)();
                michal = zuuluu.done;
                oscard = null;
                report = true;
                tangon = zuuluu;
                zuuluu = undefined;
                if(michal) { _fun00048_ip = 267; continue _fun00047 }
 72:
                foxtra = tangon.value;
                yankee = _closure1_slot35;
                michal = foxtra.data;
                romeon = yankee.bind(entity)(michal);
                yankee = romeon.bind(entity)();
                michal = yankee.done;
                if(michal) { _fun00048_ip = 249; continue _fun00047 }
 106:
                backup = yankee.value;
                kiloes = backup.type;
                michal = _closure1_slot21;
                michal = michal.ITEM;
                if(!(michal !== kiloes)) { _fun00048_ip = 161; continue _fun00047 }
 130:
                michal = _closure1_slot21;
                michal = michal.SECTION;
                if(!(michal === kiloes)) { _fun00048_ip = 228; continue _fun00047 }
 144:
                michal = backup.section;
                if(!(!(michal > offset))) { _fun00048_ip = 159; continue _fun00047 }
 153:
                if(!(oscard == verify)) { _fun00048_ip = 228; continue _fun00047 }
 157:
                return foxtra;
 159:
                return entity;
 161:
                if(!(oscard != verify)) { _fun00048_ip = 228; continue _fun00047 }
 165:
                michal = backup.uniform;
                if(!(report === michal)) { _fun00048_ip = 184; continue _fun00047 }
 175:
                michal = backup.section;
                if(!(michal !== offset)) { _fun00048_ip = 214; continue _fun00047 }
 184:
                michal = backup.uniform;
                if(!(oscard == michal)) { _fun00048_ip = 228; continue _fun00047 }
 194:
                michal = backup.section;
                if(!(michal === offset)) { _fun00048_ip = 228; continue _fun00047 }
 203:
                michal = backup.item;
                if(!(michal === verify)) { _fun00048_ip = 228; continue _fun00047 }
 212:
                return foxtra;
 214:
                michal = backup.items;
                if(!(!(verify > michal))) { _fun00048_ip = 226; continue _fun00047 }
 224:
                return foxtra;
 226:
                return entity;
 228:
                kiloes = romeon.bind(entity)();
                michal = kiloes.done;
                yankee = kiloes;
                zuuluu = backup;
                if(!michal) { _fun00048_ip = 106; continue _fun00047 }
 249:
                yankee = golfie.bind(entity)();
                michal = yankee.done;
                tangon = yankee;
                if(!michal) { _fun00048_ip = 72; continue _fun00047 }
 267:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'getChunkIndexFromSectionItem';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                entity = argFoo;
                offset = this;
                michal = entity.chunk;
                verify = entity.targetSection;
                option = entity.targetItem;
                golfie = entity.padBottom;
                entity = undefined;
                if(!(golfie === entity)) { _fun00050_ip = 43; continue _fun00049 }
 40:
                golfie = 16;
 43:
                zuuluu = _closure1_slot35;
                michal = michal.data;
                report = zuuluu.bind(entity)(michal);
                zuuluu = report.bind(entity)();
                michal = zuuluu.done;
                tangon = null;
                if(michal) { _fun00050_ip = 566; continue _fun00049 }
 77:
                yankee = zuuluu.value;
                romeon = yankee.type;
                michal = _closure1_slot21;
                michal = michal.ITEM;
                if(!(michal !== romeon)) { _fun00050_ip = 247; continue _fun00049 }
 104:
                michal = _closure1_slot21;
                michal = michal.SECTION;
                if(!(michal === romeon)) { _fun00050_ip = 548; continue _fun00049 }
 121:
                if(!(tangon == option)) { _fun00050_ip = 548; continue _fun00049 }
 128:
                michal = yankee.section;
                if(!(!(verify < michal))) { _fun00050_ip = 245; continue _fun00049 }
 137:
                michal = yankee.section;
                if(!(verify === michal)) { _fun00050_ip = 548; continue _fun00049 }
 149:
                michal = {};
                romeon = global;
                kiloes = romeon.Math;
                backup = kiloes.floor;
                sizing = yankee.layoutStart;
                foxtra = offset.chunkSize;
                foxtra = sizing / foxtra;
                foxtra = backup.bind(kiloes)(foxtra);
                michal['startIndex'] = foxtra;
                backup = romeon.Math;
                foxtra = backup.floor;
                kiloes = yankee.layoutStart;
                romeon = yankee.layoutSize;
                romeon = kiloes + romeon;
                kiloes = romeon + golfie;
                romeon = offset.chunkSize;
                romeon = kiloes / romeon;
                romeon = foxtra.bind(backup)(romeon);
                michal['endIndex'] = romeon;
                return michal;
 245:
                return entity;
 247:
                michal = yankee.section;
                if(!(michal === verify)) { _fun00050_ip = 548; continue _fun00049 }
 259:
                if(!(tangon != option)) { _fun00050_ip = 548; continue _fun00049 }
 266:
                michal = yankee.uniform;
                if(michal) { _fun00050_ip = 416; continue _fun00049 }
 278:
                michal = yankee.item;
                if(!(!(michal >= option))) { _fun00050_ip = 414; continue _fun00049 }
 290:
                michal = yankee.item;
                if(!(michal === option)) { _fun00050_ip = 548; continue _fun00049 }
 302:
                michal = {};
                romeon = global;
                kiloes = romeon.Math;
                backup = kiloes.floor;
                sizing = yankee.layoutStart;
                foxtra = yankee.sectionData;
                foxtra = foxtra.layoutSize;
                sizing = sizing - foxtra;
                foxtra = offset.chunkSize;
                foxtra = sizing / foxtra;
                foxtra = backup.bind(kiloes)(foxtra);
                michal['startIndex'] = foxtra;
                backup = romeon.Math;
                foxtra = backup.floor;
                kiloes = yankee.layoutStart;
                romeon = yankee.layoutSize;
                romeon = kiloes + romeon;
                kiloes = romeon + golfie;
                romeon = offset.chunkSize;
                romeon = kiloes / romeon;
                romeon = foxtra.bind(backup)(romeon);
                michal['endIndex'] = romeon;
                return michal;
 414:
                return entity;
 416:
                michal = yankee.items;
                if(!(!(option >= michal))) { _fun00050_ip = 546; continue _fun00049 }
 426:
                romeon = yankee.layoutStart;
                michal = yankee.sectionData;
                michal = michal.layoutSize;
                romeon = romeon + michal;
                michal = yankee.itemSize;
                michal = michal * option;
                backup = romeon + michal;
                michal = {};
                romeon = global;
                sizing = romeon.Math;
                kiloes = sizing.floor;
                foxtra = offset.chunkSize;
                foxtra = backup / foxtra;
                foxtra = kiloes.bind(sizing)(foxtra);
                michal['startIndex'] = foxtra;
                foxtra = romeon.Math;
                romeon = foxtra.floor;
                yankee = yankee.itemSize;
                yankee = backup + yankee;
                backup = yankee + golfie;
                yankee = offset.chunkSize;
                yankee = backup / yankee;
                yankee = romeon.bind(foxtra)(yankee);
                michal['endIndex'] = yankee;
                return michal;
 546:
                return entity;
 548:
                yankee = report.bind(entity)();
                michal = yankee.done;
                zuuluu = yankee;
                if(!michal) { _fun00050_ip = 77; continue _fun00049 }
 566:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'computeScrollPosition';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                romeon = argFoo;
                yankee = argBar;
                offset = argBaz;
                entity = this;
                verify = null;
                if(!(verify != offset)) { _fun00052_ip = 27; continue _fun00051 }
 18:
                michal = 0;
                if(!(!(offset < michal))) { _fun00052_ip = 490; continue _fun00051 }
 27:
                michal = entity.dirty;
                if(!michal) { _fun00052_ip = 46; continue _fun00051 }
 36:
                michal = entity.fullCompute;
                michal = michal.bind(entity)();
 46:
                michal = entity.dataCache;
                option = 0;
                if(!(!(yankee < option))) { _fun00052_ip = 478; continue _fun00051 }
 61:
                entity = _closure1_slot35;
                oscard = undefined;
                report = entity.bind(oscard)(michal);
                michal = report.bind(oscard)();
                entity = michal.done;
                tangon = true;
                zuuluu = michal;
                michal = undefined;
                if(entity) { _fun00052_ip = 490; continue _fun00051 }
 97:
                foxtra = _closure1_slot35;
                entity = zuuluu.value;
                entity = entity.data;
                backup = foxtra.bind(oscard)(entity);
                foxtra = backup.bind(oscard)();
                entity = foxtra.done;
                if(entity) { _fun00052_ip = 458; continue _fun00051 }
 131:
                kiloes = foxtra.value;
                sizing = kiloes.type;
                entity = _closure1_slot21;
                entity = entity.ITEM;
                if(!(entity !== sizing)) { _fun00052_ip = 232; continue _fun00051 }
 155:
                entity = _closure1_slot21;
                entity = entity.SECTION;
                if(!(entity === sizing)) { _fun00052_ip = 437; continue _fun00051 }
 172:
                entity = kiloes.section;
                if(!(!(entity > yankee))) { _fun00052_ip = 230; continue _fun00051 }
 181:
                if(!(verify == offset)) { _fun00052_ip = 437; continue _fun00051 }
 188:
                entity = kiloes.section;
                if(!(entity === yankee)) { _fun00052_ip = 437; continue _fun00051 }
 200:
                entity = {};
                sizing = kiloes.layoutStart;
                entity['scrollPosition'] = sizing;
                sizing = kiloes.layoutSize;
                entity['size'] = sizing;
                entity['sectionOffset'] = option;
                return entity;
 230:
                return oscard;
 232:
                if(!(verify != offset)) { _fun00052_ip = 437; continue _fun00051 }
 239:
                entity = kiloes.uniform;
                if(!(tangon === entity)) { _fun00052_ip = 258; continue _fun00051 }
 249:
                entity = kiloes.section;
                if(!(entity !== yankee)) { _fun00052_ip = 342; continue _fun00051 }
 258:
                entity = kiloes.uniform;
                if(!(verify == entity)) { _fun00052_ip = 437; continue _fun00051 }
 271:
                entity = kiloes.section;
                if(!(entity === yankee)) { _fun00052_ip = 437; continue _fun00051 }
 283:
                entity = kiloes.item;
                if(!(entity === offset)) { _fun00052_ip = 437; continue _fun00051 }
 295:
                entity = {};
                sizing = kiloes.layoutStart;
                entity['scrollPosition'] = sizing;
                sizing = kiloes.layoutSize;
                entity['size'] = sizing;
                sizing = 0;
                if(!romeon) { _fun00052_ip = 335; continue _fun00051 }
 323:
                output = kiloes.sectionData;
                sizing = output.layoutSize;
 335:
                entity['sectionOffset'] = sizing;
                return entity;
 342:
                entity = kiloes.items;
                if(!(!(offset > entity))) { _fun00052_ip = 435; continue _fun00051 }
 352:
                entity = {};
                sizing = kiloes.sectionData;
                output = sizing.layoutStart;
                sizing = kiloes.sectionData;
                sizing = sizing.layoutSize;
                output = output + sizing;
                sizing = kiloes.itemSize;
                sizing = sizing * offset;
                sizing = output + sizing;
                entity['scrollPosition'] = sizing;
                sizing = kiloes.itemSize;
                entity['size'] = sizing;
                option = 0;
                if(!romeon) { _fun00052_ip = 428; continue _fun00051 }
 416:
                sizing = kiloes.sectionData;
                option = sizing.layoutSize;
 428:
                entity['sectionOffset'] = option;
                return entity;
 435:
                return oscard;
 437:
                sizing = backup.bind(oscard)();
                entity = sizing.done;
                foxtra = sizing;
                michal = kiloes;
                if(!entity) { _fun00052_ip = 131; continue _fun00051 }
 458:
                foxtra = report.bind(oscard)();
                entity = foxtra.done;
                zuuluu = foxtra;
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
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'getSectionItemFromPosition';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                oscard = argFoo;
                backup = arguments[1];
                entity = this;
                foxtra = undefined;
                if(!(backup === foxtra)) { _fun00054_ip = 22; continue _fun00053 }
 15:
                backup = _closure1_slot20;
 22:
                michal = entity.dirty;
                if(!michal) { _fun00054_ip = 41; continue _fun00053 }
 31:
                michal = entity.fullCompute;
                michal = michal.bind(entity)();
 41:
                michal = _closure1_slot35;
                entity = entity.items;
                romeon = michal.bind(foxtra)(entity);
                michal = romeon.bind(foxtra)();
                entity = michal.done;
                yankee = 0;
                offset = null;
                verify = michal;
                option = 0;
                zuuluu = undefined;
                michal = 0;
                if(entity) { _fun00054_ip = 199; continue _fun00053 }
 84:
                tangon = verify.value;
                entity = tangon.layoutStart;
                entity = entity + option;
                golfie = backup.get;
                report = tangon.recyclerKey;
                sizing = golfie.bind(backup)(report);
                report = sizing;
                if(!(offset == report)) { _fun00054_ip = 128; continue _fun00053 }
 122:
                report = tangon.layoutSize;
 128:
                if(!(report > yankee)) { _fun00054_ip = 144; continue _fun00053 }
 132:
                if(!(oscard >= entity)) { _fun00054_ip = 144; continue _fun00053 }
 136:
                golfie = entity + report;
                if(!(!(oscard <= golfie))) { _fun00054_ip = 188; continue _fun00053 }
 144:
                kiloes = offset != sizing;
                golfie = 0;
                if(!kiloes) { _fun00054_ip = 163; continue _fun00053 }
 153:
                kiloes = tangon.layoutSize;
                golfie = sizing - kiloes;
 163:
                option = option + golfie;
                kiloes = romeon.bind(foxtra)();
                golfie = kiloes.done;
                verify = kiloes;
                zuuluu = undefined;
                michal = 0;
                if(golfie) { _fun00054_ip = 199; continue _fun00053 }
 186:
                _fun00054_ip = 84; continue _fun00053;
 188:
                entity = oscard - entity;
                michal = entity / report;
                zuuluu = tangon;
 199:
                entity = {};
                entity['item'] = zuuluu;
                entity['positionPercentage'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = 'setDisableRecycling';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            entity['disableRecycling'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[14] = entity;
        entity = {};
        oscard = 'getSize';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                entity = this;
                michal = entity.dirty;
                if(!michal) { _fun00056_ip = 22; continue _fun00055 }
 12:
                michal = entity.fullCompute;
                michal = michal.bind(entity)();
 22:
                entity = entity.size;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[15] = entity;
        entity = {};
        oscard = 'isDirty';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            entity = entity.dirty;
            return entity;
        };
        entity['value'] = report;
        michal[16] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot23 = tangon;
    golfie = {};
    yankee = 'function FastListTsx1(){const{scrollPosValue,interpolate,inputRange,outputRange,horizontal}=this.__closure;const interpolatedValue=scrollPosValue!=null?interpolate(scrollPosValue.get(),inputRange,outputRange):null;return{transform:interpolatedValue!=null?[horizontal?{translateX:interpolatedValue}:{translateY:interpolatedValue}]:undefined};}';
    golfie['code'] = yankee;
    var _closure1_slot24 = golfie;
    yankee = michal.memo;
    golfie = function(argFoo) { // Original name: _FastListStickySectionRenderer
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            zuuluu = argFoo;
            backup = zuuluu.layoutStart;
            romeon = zuuluu.layoutSize;
            foxtra = zuuluu.horizontal;
            var _closure2_slot0 = foxtra;
            report = zuuluu.nextSectionLayoutPosition;
            yankee = zuuluu.scrollPosValue;
            var _closure2_slot1 = yankee;
            offset = zuuluu.fastListInstance;
            verify = zuuluu.section;
            entity = zuuluu.children;
            tangon = zuuluu.debug;
            zuuluu = zuuluu.recyclerKey;
            output = new Array(2);
            tangon = -1;
            output[0] = tangon;
            oscard = 0;
            output[1] = oscard;
            var _closure2_slot2 = output;
            sizing = [0, 0];
            var _closure2_slot3 = sizing;
            zuuluu = output.push;
            zuuluu = zuuluu.bind(output)(backup);
            zuuluu = sizing.push;
            zuuluu = zuuluu.bind(sizing)(oscard);
            golfie = null;
            option = golfie != report;
            zuuluu = 0;
            if(!option) { _fun00058_ip = 143; continue _fun00057 }
 140:
            zuuluu = report;
 143:
            zuuluu = zuuluu - romeon;
            if(!(!(zuuluu >= backup))) { _fun00058_ip = 180; continue _fun00057 }
 151:
            kiloes = output.push;
            option = 1;
            report = backup + option;
            report = kiloes.bind(output)(report);
            report = sizing.push;
            report = report.bind(sizing)(option);
            _fun00058_ip = 267; continue _fun00057;
 180:
            kiloes = _closure1_slot0;
            option = _closure1_slot2;
            report = 14;
            option = option[report];
            report = undefined;
            option = kiloes.bind(report)(option);
            report = option.isAndroid;
            report = report.bind(option)();
            oscard = 0;
            if(!report) { _fun00058_ip = 222; continue _fun00057 }
 219:
            oscard = tangon;
 222:
            report = output.push;
            tangon = 1;
            tangon = zuuluu + tangon;
            tangon = report.bind(output)(zuuluu, tangon);
            report = sizing.push;
            tangon = zuuluu - backup;
            tangon = tangon + oscard;
            zuuluu = zuuluu - backup;
            zuuluu = zuuluu + oscard;
            zuuluu = report.bind(sizing)(tangon, zuuluu);
 267:
            echoed = _closure1_slot0;
            oscard = _closure1_slot2;
            result = 15;
            zuuluu = oscard[result];
            tangon = undefined;
            option = echoed.bind(tangon)(zuuluu);
            zuuluu = option.useAnimatedStyle;
            michal = function() { // Original name: z
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    entity = _closure2_slot1;
                    michal = null;
                    entity = michal != entity;
                    report = null;
                    if(!entity) { _fun00060_ip = 77; continue _fun00059 }
 18:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 15;
                    tangon = tangon[entity];
                    entity = undefined;
                    option = oscard.bind(entity)(tangon);
                    golfie = option.interpolate;
                    tangon = _closure2_slot1;
                    entity = tangon.get;
                    oscard = entity.bind(tangon)();
                    tangon = _closure2_slot2;
                    entity = _closure2_slot3;
                    report = golfie.bind(option)(oscard, tangon, entity);
 77:
                    entity = {};
                    tangon = michal != report;
                    michal = undefined;
                    if(!tangon) { _fun00060_ip = 126; continue _fun00059 }
 88:
                    tangon = _closure2_slot0;
                    zuuluu = {};
                    if(tangon) { _fun00060_ip = 107; continue _fun00059 }
 97:
                    zuuluu['translateY'] = report;
                    tangon = zuuluu;
                    _fun00060_ip = 115; continue _fun00059;
 107:
                    zuuluu['translateX'] = report;
                    tangon = zuuluu;
 115:
                    zuuluu = new Array(1);
                    zuuluu[0] = tangon;
                    michal = zuuluu;
 126:
                    entity['transform'] = michal;
                    return entity;
                }
            };
            kiloes = {};
            kiloes['scrollPosValue'] = yankee;
            result = oscard[result];
            result = echoed.bind(tangon)(result);
            result = result.interpolate;
            kiloes['interpolate'] = result;
            kiloes['inputRange'] = output;
            kiloes['outputRange'] = sizing;
            kiloes['horizontal'] = foxtra;
            michal['__closure'] = kiloes;
            kiloes = 699810682881.0;
            michal['__workletHash'] = kiloes;
            kiloes = _closure1_slot24;
            michal['__initData'] = kiloes;
            option = zuuluu.bind(option)(michal);
            michal = _closure1_slot11;
            zuuluu = michal.Children;
            michal = zuuluu.only;
            config = undefined;
            sequen = verify;
            vacuum = offset;
            ctrled = yankee;
            source = backup;
            entity = config[entity](sequen, vacuum, ctrled, source, update);
            offset = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot15;
            michal = _closure1_slot1;
            entity = 16;
            entity = oscard[entity];
            michal = michal.bind(tangon)(entity);
            entity = {'style': null, 'collapsable': false, 'preventClipping': true};
            oscard = golfie == offset;
            verify = undefined;
            if(oscard) { _fun00058_ip = 479; continue _fun00057 }
 460:
            oscard = offset.props;
            yankee = golfie == oscard;
            verify = undefined;
            if(yankee) { _fun00058_ip = 479; continue _fun00057 }
 474:
            verify = oscard.style;
 479:
            oscard = new Array(3);
            oscard[0] = verify;
            verify = {'zIndex': 10, 'position': 'relative'};
            yankee = undefined;
            if(foxtra) { _fun00058_ip = 505; continue _fun00057 }
 502:
            yankee = romeon;
 505:
            verify['height'] = yankee;
            yankee = undefined;
            if(!foxtra) { _fun00058_ip = 517; continue _fun00057 }
 514:
            yankee = romeon;
 517:
            verify['width'] = yankee;
            oscard[1] = verify;
            oscard[2] = option;
            entity['style'] = oscard;
            oscard = false;
            option = golfie != offset;
            golfie = undefined;
            if(!option) { _fun00058_ip = 577; continue _fun00057 }
 546:
            verify = _closure1_slot11;
            option = verify.cloneElement;
            report = {};
            yankee = {};
            romeon = 1;
            yankee['flex'] = romeon;
            report['style'] = yankee;
            golfie = option.bind(verify)(offset, report);
 577:
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    golfie = yankee.bind(michal)(golfie);
    var _closure1_slot25 = golfie;
    yankee = michal.memo;
    golfie = function(argFoo) { // Original name: _FastListSectionRenderer
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            zuuluu = argFoo;
            romeon = zuuluu.layoutSize;
            offset = zuuluu.horizontal;
            michal = zuuluu.disableWrapper;
            verify = zuuluu.children;
            option = zuuluu.fastListInstance;
            oscard = zuuluu.section;
            entity = zuuluu.debug;
            zuuluu = zuuluu.recyclerKey;
            if(!michal) { _fun00062_ip = 88; continue _fun00061 }
 52:
            if(entity) { _fun00062_ip = 88; continue _fun00061 }
 55:
            tangon = _closure1_slot16;
            zuuluu = _closure1_slot17;
            michal = {};
            entity = undefined;
            report = verify.bind(entity)(oscard, option);
            michal['children'] = report;
            entity = tangon.bind(entity)(zuuluu, michal);
            _fun00062_ip = 184; continue _fun00061;
 88:
            report = _closure1_slot15;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {'collapsable': false, 'style': null, 'preventClipping': true};
            golfie = false;
            yankee = {};
            if(offset) { _fun00062_ip = 143; continue _fun00061 }
 134:
            yankee['height'] = romeon;
            offset = yankee;
            _fun00062_ip = 150; continue _fun00061;
 143:
            yankee['width'] = romeon;
            offset = yankee;
 150:
            michal['style'] = offset;
            option = verify.bind(tangon)(oscard, option);
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = report.bind(tangon)(zuuluu, michal);
 184:
            return entity;
        }
    };
    golfie = yankee.bind(michal)(golfie);
    var _closure1_slot26 = golfie;
    yankee = michal.memo;
    golfie = function(argFoo) { // Original name: _FastListSectionFooterRenderer
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            zuuluu = argFoo;
            romeon = zuuluu.layoutSize;
            offset = zuuluu.horizontal;
            michal = zuuluu.disableWrapper;
            verify = zuuluu.fastListInstance;
            option = zuuluu.children;
            oscard = zuuluu.section;
            entity = zuuluu.debug;
            zuuluu = zuuluu.recyclerKey;
            if(!michal) { _fun00064_ip = 88; continue _fun00063 }
 52:
            if(entity) { _fun00064_ip = 88; continue _fun00063 }
 55:
            tangon = _closure1_slot16;
            zuuluu = _closure1_slot17;
            michal = {};
            entity = undefined;
            report = option.bind(entity)(oscard, verify);
            michal['children'] = report;
            entity = tangon.bind(entity)(zuuluu, michal);
            _fun00064_ip = 179; continue _fun00063;
 88:
            report = _closure1_slot15;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            golfie = false;
            michal['collapsable'] = golfie;
            yankee = {};
            if(offset) { _fun00064_ip = 140; continue _fun00063 }
 131:
            yankee['height'] = romeon;
            offset = yankee;
            _fun00064_ip = 147; continue _fun00063;
 140:
            yankee['width'] = romeon;
            offset = yankee;
 147:
            michal['style'] = offset;
            option = option.bind(tangon)(oscard, verify);
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = report.bind(tangon)(zuuluu, michal);
 179:
            return entity;
        }
    };
    golfie = yankee.bind(michal)(golfie);
    var _closure1_slot27 = golfie;
    yankee = michal.memo;
    golfie = function(argFoo) { // Original name: _FastListItemRenderer
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            zuuluu = argFoo;
            foxtra = zuuluu.layoutSize;
            option = zuuluu.horizontal;
            michal = zuuluu.disableWrapper;
            yankee = zuuluu.children;
            offset = zuuluu.section;
            verify = zuuluu.fastListInstance;
            oscard = zuuluu.item;
            entity = zuuluu.debug;
            zuuluu = zuuluu.recyclerKey;
            if(!michal) { _fun00066_ip = 82; continue _fun00065 }
 57:
            if(entity) { _fun00066_ip = 82; continue _fun00065 }
 60:
            entity = null;
            zuuluu = entity == yankee;
            michal = undefined;
            entity = undefined;
            if(zuuluu) { _fun00066_ip = 80; continue _fun00065 }
 73:
            entity = yankee.bind(michal)(offset, oscard, verify);
 80:
            _fun00066_ip = 185; continue _fun00065;
 82:
            report = _closure1_slot15;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            golfie = false;
            michal['collapsable'] = golfie;
            romeon = {};
            if(option) { _fun00066_ip = 134; continue _fun00065 }
 125:
            romeon['height'] = foxtra;
            option = romeon;
            _fun00066_ip = 141; continue _fun00065;
 134:
            romeon['width'] = foxtra;
            option = romeon;
 141:
            michal['style'] = option;
            option = null;
            romeon = option == yankee;
            option = undefined;
            if(romeon) { _fun00066_ip = 163; continue _fun00065 }
 156:
            option = yankee.bind(tangon)(offset, oscard, verify);
 163:
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = report.bind(tangon)(zuuluu, michal);
 185:
            return entity;
        }
    };
    golfie = yankee.bind(michal)(golfie);
    var _closure1_slot28 = golfie;
    yankee = michal.memo;
    golfie = function(argFoo) { // Original name: _FastListHeaderFooterRenderer
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            zuuluu = argFoo;
            yankee = zuuluu.layoutSize;
            verify = zuuluu.horizontal;
            michal = zuuluu.disableWrapper;
            option = zuuluu.children;
            oscard = zuuluu.fastListInstance;
            entity = zuuluu.debug;
            zuuluu = zuuluu.recyclerKey;
            if(!michal) { _fun00068_ip = 82; continue _fun00067 }
 47:
            if(entity) { _fun00068_ip = 82; continue _fun00067 }
 50:
            tangon = _closure1_slot16;
            zuuluu = _closure1_slot17;
            michal = {};
            entity = undefined;
            report = option.bind(entity)(oscard);
            michal['children'] = report;
            entity = tangon.bind(entity)(zuuluu, michal);
            _fun00068_ip = 177; continue _fun00067;
 82:
            report = _closure1_slot15;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {'collapsable': false, 'style': null, 'preventClipping': true};
            golfie = false;
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
            michal['style'] = verify;
            option = option.bind(tangon)(oscard);
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = report.bind(tangon)(zuuluu, michal);
 177:
            return entity;
        }
    };
    golfie = yankee.bind(michal)(golfie);
    var _closure1_slot29 = golfie;
    yankee = michal.memo;
    golfie = function(argFoo) { // Original name: _FastListSpacer
        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
            entity = argFoo;
            golfie = entity.layoutSize;
            report = entity.horizontal;
            tangon = _closure1_slot16;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 12;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            oscard = false;
            entity['collapsable'] = oscard;
            oscard = {};
            if(report) { _fun00070_ip = 67; continue _fun00069 }
 58:
            oscard['height'] = golfie;
            report = oscard;
            _fun00070_ip = 74; continue _fun00069;
 67:
            oscard['width'] = golfie;
            report = oscard;
 74:
            entity['style'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    golfie = yankee.bind(michal)(golfie);
    var _closure1_slot30 = golfie;
    golfie = function() {
        tangon = _closure1_slot10;
        zuuluu = function(argFoo) { // Original name: FastListScrollAnchor
            zuuluu = this;
            tangon = _closure1_slot9;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argFoo;
            zuuluu['getScrollPosition'] = michal;
            michal = false;
            zuuluu['isCustomAnchor'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'hasAnchor';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            michal = entity.anchorId;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(6);
        michal[0] = entity;
        entity = {};
        oscard = 'cleanAnchor';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                zuuluu = arguments[0];
                michal = this;
                entity = undefined;
                if(!(zuuluu === entity)) { _fun00072_ip = 14; continue _fun00071 }
 12:
                zuuluu = false;
 14:
                zuuluu = !zuuluu;
                if(!zuuluu) { _fun00072_ip = 26; continue _fun00071 }
 20:
                zuuluu = michal.isCustomAnchor;
 26:
                if(zuuluu) { _fun00072_ip = 49; continue _fun00071 }
 29:
                zuuluu = false;
                michal['isCustomAnchor'] = zuuluu;
                michal['anchorId'] = entity;
                michal['anchorOffset'] = entity;
 49:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'handleUserScroll';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.cleanAnchor;
            entity = true;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'setCustomAnchor';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                tangon = this;
                zuuluu = true;
                tangon['isCustomAnchor'] = zuuluu;
                entity = argBar;
                tangon['anchorOffset'] = entity;
                oscard = argFoo;
                entity = undefined;
                report = argBaz;
                michal = argCor;
                michal = oscard.bind(entity)(report, michal);
                tangon['anchorId'] = michal;
                report = tangon.anchorId;
                michal = null;
                if(!(michal == report)) { _fun00074_ip = 66; continue _fun00073 }
 55:
                michal = tangon.cleanAnchor;
                michal = michal.bind(tangon)(zuuluu);
 66:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'findOrUpdateAnchor';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                romeon = argFoo;
                zuuluu = this;
                entity = zuuluu.getScrollPosition;
                tangon = entity.bind(zuuluu)();
                entity = zuuluu.cleanAnchor;
                entity = entity.bind(zuuluu)();
                report = _closure1_slot35;
                entity = undefined;
                michal = argBar;
                offset = report.bind(entity)(michal);
                report = offset.bind(entity)();
                michal = report.done;
                verify = null;
                golfie = report;
                oscard = undefined;
                if(michal) { _fun00076_ip = 267; continue _fun00075 }
 65:
                michal = golfie.value;
                backup = michal.type;
                report = _closure1_slot21;
                report = report.ITEM;
                foxtra = oscard;
                if(!(backup === report)) { _fun00076_ip = 224; continue _fun00075 }
 95:
                report = zuuluu.isCustomAnchor;
                if(!report) { _fun00076_ip = 145; continue _fun00075 }
 104:
                backup = zuuluu.anchorId;
                sizing = michal.section;
                kiloes = michal.item;
                output = verify != kiloes;
                report = 0;
                if(!output) { _fun00076_ip = 132; continue _fun00075 }
 129:
                report = kiloes;
 132:
                report = romeon.bind(entity)(sizing, report);
                oscard = kiloes;
                if(!(backup !== report)) { _fun00076_ip = 247; continue _fun00075 }
 145:
                report = zuuluu.isCustomAnchor;
                foxtra = oscard;
                if(report) { _fun00076_ip = 224; continue _fun00075 }
 157:
                report = michal.layoutStart;
                foxtra = oscard;
                if(!(report >= tangon)) { _fun00076_ip = 224; continue _fun00075 }
 170:
                report = michal.layoutStart;
                report = report - tangon;
                zuuluu['anchorOffset'] = report;
                report = michal.section;
                backup = michal.item;
                kiloes = verify != backup;
                option = 0;
                if(!kiloes) { _fun00076_ip = 208; continue _fun00075 }
 205:
                option = backup;
 208:
                report = romeon.bind(entity)(report, option);
                zuuluu['anchorId'] = report;
                report = undefined;
                return report;
 224:
                backup = offset.bind(entity)();
                report = backup.done;
                oscard = foxtra;
                golfie = backup;
                if(report) { _fun00076_ip = 267; continue _fun00075 }
 242:
                _fun00076_ip = 65; continue _fun00075;
 247:
                michal = michal.layoutStart;
                michal = michal - tangon;
                zuuluu['anchorOffset'] = michal;
                michal = undefined;
                return michal;
 267:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'getAnchorIndex';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.anchorId;
                entity = null;
                if(!(entity == michal)) { _fun00078_ip = 19; continue _fun00077 }
 15:
                entity = undefined;
                return entity;
 19:
                tangon = zuuluu.anchorId;
                michal = argFoo;
                entity = undefined;
                entity = michal.bind(entity)(tangon);
                michal = zuuluu.cleanAnchor;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        entity['value'] = report;
        michal[5] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    golfie = golfie.bind(entity)();
    var _closure1_slot31 = golfie;
    golfie = {};
    yankee = 'function FastListTsx2(event){const{horizontal,workletMounted,scrollPosValue}=this.__closure;const scrollPosition=!horizontal?event.contentOffset.y:event.contentOffset.x;const contentSize=!horizontal?event.contentSize.height:event.contentSize.width;if(contentSize===0&&!workletMounted.get())return;workletMounted.set(true);scrollPosValue.set(Math.min(scrollPosition,contentSize));}';
    golfie['code'] = yankee;
    var _closure1_slot32 = golfie;
    golfie = michal.PureComponent;
    michal = function(argFoo) {
        report = function(argFoo) { // Original name: FastList
            _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                report = this;
                entity = _closure1_slot9;
                tangon = _closure2_slot0;
                oscard = undefined;
                entity = entity.bind(oscard)(report, tangon);
                zuuluu = _closure1_slot33;
                entity = new Array(1);
                option = argFoo;
                entity[0] = option;
                entity = zuuluu.bind(oscard)(report, tangon, entity);
                var _closure3_slot0 = entity;
                tangon = 0;
                entity['containerSize'] = tangon;
                entity['scrollPos'] = tangon;
                report = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 17;
                zuuluu = option[zuuluu];
                report = report.bind(oscard)(zuuluu);
                zuuluu = report.createFakeSharedValue;
                zuuluu = zuuluu.bind(report)(tangon);
                entity['scrollPosValue'] = zuuluu;
                zuuluu = entity.props;
                report = zuuluu.manualRef;
                zuuluu = null;
                if(!(zuuluu == report)) { _fun00080_ip = 135; continue _fun00079 }
 121:
                verify = _closure1_slot11;
                option = verify.createRef;
                report = option.bind(verify)();
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
                entity['disableAnchoringTimeout'] = oscard;
                entity['viewTag'] = zuuluu;
                option = _closure1_slot0;
                verify = _closure1_slot2;
                report = 15;
                report = verify[report];
                verify = option.bind(oscard)(report);
                report = verify.makeMutable;
                option = false;
                report = report.bind(verify)(option);
                entity['workletMounted'] = report;
                report = -1;
                entity['deferredCompute'] = report;
                entity['deferNextCompute'] = option;
                offset = _closure1_slot31;
                vacuum = entity.getScrollPosition;
                verify = offset.prototype;
                verify = Object.create(verify, {constructor: {value: offset}});
                sequen = verify;
                option = new sequen[offset](vacuum, ctrled);
                option = option instanceof Object ? option : verify;
                entity['scrollAnchor'] = option;
                entity['viewabilityDebounce'] = report;
                report = new Array(0);
                entity['previouslyViewableItems'] = report;
                report = function(argFoo) {
                    _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                        zuuluu = argFoo;
                        entity = _closure3_slot0;
                        entity = entity.props;
                        tangon = entity.horizontal;
                        entity = {};
                        report = 0;
                        if(!tangon) { _fun00082_ip = 31; continue _fun00081 }
 28:
                        report = zuuluu;
 31:
                        entity['x'] = report;
                        michal = 0;
                        if(tangon) { _fun00082_ip = 43; continue _fun00081 }
 40:
                        michal = zuuluu;
 43:
                        entity['y'] = michal;
                        return entity;
                    }
                };
                entity['_scrollPositionToPoint'] = report;
                report = function(argFoo) {
                    _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                        michal = argFoo;
                        yankee = michal.itemCoords;
                        option = michal.fullSize;
                        foxtra = michal.orientation;
                        entity = undefined;
                        if(!(foxtra === entity)) { _fun00084_ip = 31; continue _fun00083 }
 27:
                        foxtra = 'top';
 31:
                        report = michal.paddingStart;
                        if(!(report === entity)) { _fun00084_ip = 43; continue _fun00083 }
 41:
                        report = 0;
 43:
                        verify = michal.paddingEnd;
                        if(!(verify === entity)) { _fun00084_ip = 55; continue _fun00083 }
 53:
                        verify = 0;
 55:
                        zuuluu = yankee.scrollPosition;
                        oscard = yankee.size;
                        michal = yankee.sectionOffset;
                        entity = _closure3_slot0;
                        entity = entity.containerSize;
                        tangon = 0;
                        if(!(!(entity > tangon))) { _fun00084_ip = 122; continue _fun00083 }
 91:
                        entity = _closure3_slot0;
                        entity = entity.props;
                        golfie = entity.chunkBase;
                        entity = null;
                        romeon = entity != golfie;
                        entity = 0;
                        if(!romeon) { _fun00084_ip = 120; continue _fun00083 }
 117:
                        entity = golfie;
 120:
                        _fun00084_ip = 132; continue _fun00083;
 122:
                        golfie = _closure3_slot0;
                        entity = golfie.containerSize;
 132:
                        if(!(oscard >= entity)) { _fun00084_ip = 140; continue _fun00083 }
 136:
                        foxtra = 'top';
 140:
                        golfie = 'visible';
                        if(!(golfie !== foxtra)) { _fun00084_ip = 248; continue _fun00083 }
 148:
                        golfie = 'top';
                        if(!(golfie !== foxtra)) { _fun00084_ip = 238; continue _fun00083 }
 156:
                        romeon = 'center';
                        golfie = zuuluu;
                        if(!(romeon === foxtra)) { _fun00084_ip = 336; continue _fun00083 }
 170:
                        backup = yankee.scrollPosition;
                        foxtra = global;
                        sizing = foxtra.Math;
                        kiloes = sizing.floor;
                        romeon = yankee.size;
                        yankee = 2;
                        romeon = romeon / yankee;
                        romeon = kiloes.bind(sizing)(romeon);
                        romeon = backup + romeon;
                        backup = foxtra.Math;
                        foxtra = backup.floor;
                        yankee = entity / yankee;
                        yankee = foxtra.bind(backup)(yankee);
                        golfie = romeon - yankee;
                        _fun00084_ip = 336; continue _fun00083;
 238:
                        yankee = michal + report;
                        golfie = zuuluu - yankee;
                        _fun00084_ip = 336; continue _fun00083;
 248:
                        romeon = zuuluu + michal;
                        yankee = _closure3_slot0;
                        yankee = yankee.scrollPos;
                        yankee = yankee + report;
                        if(!(romeon >= yankee)) { _fun00084_ip = 296; continue _fun00083 }
 270:
                        romeon = zuuluu + oscard;
                        yankee = _closure3_slot0;
                        foxtra = yankee.scrollPos;
                        yankee = entity - verify;
                        yankee = foxtra + yankee;
                        if(!(!(romeon <= yankee))) { _fun00084_ip = 378; continue _fun00083 }
 296:
                        if(!(!(oscard > entity))) { _fun00084_ip = 328; continue _fun00083 }
 300:
                        offset = _closure3_slot0;
                        offset = offset.scrollPos;
                        if(!(!(zuuluu < offset))) { _fun00084_ip = 328; continue _fun00083 }
 314:
                        oscard = zuuluu + oscard;
                        oscard = oscard + verify;
                        golfie = oscard - entity;
                        _fun00084_ip = 336; continue _fun00083;
 328:
                        michal = michal + report;
                        golfie = zuuluu - michal;
 336:
                        report = global;
                        zuuluu = report.Math;
                        michal = zuuluu.max;
                        oscard = report.Math;
                        report = oscard.min;
                        entity = option - entity;
                        entity = report.bind(oscard)(golfie, entity);
                        entity = michal.bind(zuuluu)(tangon, entity);
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
                echoed = verify.footerSize;
                result = verify.sectionSize;
                output = verify.itemSize;
                sizing = verify.sectionFooterSize;
                kiloes = verify.sections;
                backup = verify.insetStart;
                foxtra = verify.insetEnd;
                option = verify.stickyHeaderFooter;
                romeon = oscard !== option;
                if(!romeon) { _fun00080_ip = 383; continue _fun00079 }
 380:
                romeon = option;
 383:
                yankee = verify.getRecyclerKey;
                option = verify.persistantKeys;
                offset = verify.disableRecyclingOnFullCompute;
                verify = _closure1_slot23;
                golfie = {};
                golfie['headerSize'] = update;
                golfie['footerSize'] = echoed;
                golfie['sectionSize'] = result;
                golfie['itemSize'] = output;
                golfie['sectionFooterSize'] = sizing;
                golfie['sections'] = kiloes;
                golfie['insetStart'] = backup;
                golfie['insetEnd'] = foxtra;
                golfie['stickyHeaderFooter'] = romeon;
                golfie['getRecyclerKey'] = yankee;
                golfie['persistantKeys'] = option;
                option = oscard !== offset;
                if(!option) { _fun00080_ip = 472; continue _fun00079 }
 469:
                option = offset;
 472:
                golfie['disableRecyclingOnFullCompute'] = option;
                option = verify.prototype;
                option = Object.create(option, {constructor: {value: verify}});
                sequen = option;
                vacuum = golfie;
                golfie = new sequen[verify](vacuum, ctrled);
                verify = golfie instanceof Object ? golfie : option;
                option = entity.getInitialState;
                offset = zuuluu != report;
                golfie = 0;
                if(!offset) { _fun00080_ip = 518; continue _fun00079 }
 515:
                golfie = report;
 518:
                report = true;
                report = option.bind(entity)(golfie, verify, report);
                entity['state'] = report;
                report = function() {
                    _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                        entity = _closure3_slot0;
                        entity = entity.props;
                        zuuluu = entity.onViewableItemsChanged;
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00086_ip = 299; continue _fun00085 }
 27:
                        entity = _closure3_slot0;
                        michal = entity.getViewabilityConfig;
                        michal = michal.bind(entity)();
                        romeon = michal.visibilityThreshold;
                        michal = entity.state;
                        golfie = michal.items;
                        yankee = entity.scrollPos;
                        michal = entity.scrollPos;
                        entity = entity.containerSize;
                        offset = michal + entity;
                        michal = new Array(0);
                        oscard = _closure1_slot35;
                        entity = undefined;
                        verify = oscard.bind(entity)(golfie);
                        golfie = verify.bind(entity)();
                        oscard = golfie.done;
                        option = global;
                        if(oscard) { _fun00086_ip = 239; continue _fun00085 }
 115:
                        oscard = golfie.value;
                        foxtra = oscard.layoutStart;
                        if(!(!(foxtra > offset))) { _fun00086_ip = 239; continue _fun00085 }
 130:
                        kiloes = option.Math;
                        backup = kiloes.max;
                        foxtra = oscard.layoutStart;
                        backup = backup.bind(kiloes)(foxtra, yankee);
                        sizing = option.Math;
                        kiloes = sizing.min;
                        output = oscard.layoutStart;
                        foxtra = oscard.layoutSize;
                        foxtra = output + foxtra;
                        foxtra = kiloes.bind(sizing)(foxtra, offset);
                        if(!(!(backup >= foxtra))) { _fun00086_ip = 224; continue _fun00085 }
 190:
                        backup = foxtra - backup;
                        foxtra = oscard.layoutSize;
                        foxtra = backup / foxtra;
                        if(!(foxtra >= romeon)) { _fun00086_ip = 224; continue _fun00085 }
 208:
                        foxtra = michal.push;
                        oscard = oscard.recyclerKey;
                        oscard = foxtra.bind(michal)(oscard);
 224:
                        foxtra = verify.bind(entity)();
                        oscard = foxtra.done;
                        golfie = foxtra;
                        if(!oscard) { _fun00086_ip = 115; continue _fun00085 }
 239:
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        report = 11;
                        report = golfie[report];
                        golfie = oscard.bind(entity)(report);
                        oscard = golfie.areArraysShallowEqual;
                        report = _closure3_slot0;
                        report = report.previouslyViewableItems;
                        report = oscard.bind(golfie)(michal, report);
                        if(report) { _fun00086_ip = 299; continue _fun00085 }
 284:
                        tangon = _closure3_slot0;
                        tangon['previouslyViewableItems'] = michal;
                        entity = zuuluu.bind(entity)(michal);
 299:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleViewabilityChange'] = report;
                report = function(argFoo) {
                    _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                        zuuluu = argFoo;
                        entity = _closure3_slot0;
                        entity = entity.scrollPos;
                        entity = zuuluu >= entity;
                        if(!entity) { _fun00088_ip = 47; continue _fun00087 }
 23:
                        michal = _closure3_slot0;
                        tangon = michal.scrollPos;
                        michal = michal.containerSize;
                        michal = tangon + michal;
                        entity = zuuluu <= michal;
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
                        michal = _closure3_slot0;
                        zuuluu = michal.scrollView;
                        oscard = null;
                        michal = oscard == zuuluu;
                        tangon = zuuluu;
                        if(michal) { _fun00090_ip = 48; continue _fun00089 }
 36:
                        zuuluu = zuuluu.current;
                        michal = oscard == zuuluu;
                        tangon = zuuluu;
 48:
                        if(michal) { _fun00090_ip = 77; continue _fun00089 }
 51:
                        zuuluu = tangon.scrollTo;
                        michal = {'x': 0, 'y': 0};
                        michal['animated'] = report;
                        michal = zuuluu.bind(tangon)(michal);
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
                        oscard = entity.animated;
                        sizing = undefined;
                        if(!(oscard === sizing)) { _fun00092_ip = 27; continue _fun00091 }
 25:
                        oscard = false;
 27:
                        kiloes = entity.orientation;
                        if(!(kiloes === sizing)) { _fun00092_ip = 41; continue _fun00091 }
 37:
                        kiloes = 'top';
 41:
                        backup = entity.paddingStart;
                        if(!(backup === sizing)) { _fun00092_ip = 53; continue _fun00091 }
 51:
                        backup = 0;
 53:
                        foxtra = entity.paddingEnd;
                        if(!(foxtra === sizing)) { _fun00092_ip = 65; continue _fun00091 }
 63:
                        foxtra = 0;
 65:
                        golfie = entity.setAnchor;
                        if(!(golfie === sizing)) { _fun00092_ip = 77; continue _fun00091 }
 75:
                        golfie = false;
 77:
                        entity = _closure3_slot0;
                        entity = entity.scrollView;
                        tangon = entity.current;
                        entity = null;
                        if(!(entity != tangon)) { _fun00092_ip = 455; continue _fun00091 }
 104:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.props;
                        verify = michal.getAnchorIdFromIndex;
                        romeon = michal.stickySectionsVariant;
                        option = 'default';
                        michal = option;
                        if(!(sizing !== romeon)) { _fun00092_ip = 139; continue _fun00091 }
 136:
                        michal = romeon;
 139:
                        zuuluu = zuuluu.state;
                        output = zuuluu.fastListComputer;
                        zuuluu = output.computeScrollPosition;
                        michal = option === michal;
                        michal = zuuluu.bind(output)(michal, yankee, offset);
                        if(!(entity != michal)) { _fun00092_ip = 451; continue _fun00091 }
 174:
                        zuuluu = 'visible';
                        if(!(zuuluu === kiloes)) { _fun00092_ip = 209; continue _fun00091 }
 182:
                        romeon = _closure3_slot0;
                        option = romeon.isVisible;
                        zuuluu = michal.scrollPosition;
                        zuuluu = option.bind(romeon)(zuuluu);
                        if(zuuluu) { _fun00092_ip = 447; continue _fun00091 }
 209:
                        romeon = _closure3_slot0;
                        option = romeon._calculateScrollPosition;
                        zuuluu = {};
                        zuuluu['itemCoords'] = michal;
                        sizing = output.getSize;
                        sizing = sizing.bind(output)();
                        zuuluu['fullSize'] = sizing;
                        zuuluu['orientation'] = kiloes;
                        zuuluu['paddingStart'] = backup;
                        zuuluu['paddingEnd'] = foxtra;
                        option = option.bind(romeon)(zuuluu);
                        zuuluu = !oscard;
                        if(!zuuluu) { _fun00092_ip = 270; continue _fun00091 }
 267:
                        zuuluu = golfie;
 270:
                        if(!zuuluu) { _fun00092_ip = 277; continue _fun00091 }
 273:
                        zuuluu = entity != verify;
 277:
                        if(!zuuluu) { _fun00092_ip = 336; continue _fun00091 }
 280:
                        zuuluu = _closure3_slot0;
                        golfie = zuuluu.scrollAnchor;
                        zuuluu = golfie.setCustomAnchor;
                        romeon = michal.scrollPosition;
                        foxtra = entity != option;
                        michal = 0;
                        if(!foxtra) { _fun00092_ip = 316; continue _fun00091 }
 313:
                        michal = option;
 316:
                        update = romeon - michal;
                        ctrled = golfie;
                        source = verify;
                        echoed = yankee;
                        result = offset;
                        michal = ctrled[zuuluu](source, update, echoed, result, output);
 336:
                        entity = entity != option;
                        if(!entity) { _fun00092_ip = 357; continue _fun00091 }
 343:
                        michal = _closure3_slot0;
                        michal = michal.scrollPos;
                        entity = option !== michal;
 357:
                        if(!entity) { _fun00092_ip = 445; continue _fun00091 }
 360:
                        if(oscard) { _fun00092_ip = 399; continue _fun00091 }
 363:
                        zuuluu = _closure3_slot0;
                        golfie = zuuluu.scrollPosValue;
                        michal = golfie.set;
                        michal = michal.bind(golfie)(option);
                        zuuluu['scrollPos'] = option;
                        michal = zuuluu.computeBlocks;
                        michal = michal.bind(zuuluu)();
 399:
                        zuuluu = tangon.scrollTo;
                        michal = {};
                        golfie = _closure3_slot0;
                        report = golfie._scrollPositionToPoint;
                        update = report.bind(golfie)(option);
                        source = michal;
                        report = copyDataProperties(source, update);
                        report = 'animated';
                        michal[report] = oscard;
                        michal = zuuluu.bind(tangon)(michal);
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
                        golfie = arguments[1];
                        entity = undefined;
                        if(!(golfie === entity)) { _fun00094_ip = 14; continue _fun00093 }
 12:
                        golfie = false;
 14:
                        entity = _closure3_slot0;
                        michal = entity.scrollView;
                        report = michal.current;
                        entity = entity.state;
                        zuuluu = entity.fastListComputer;
                        entity = null;
                        entity = entity != report;
                        if(!entity) { _fun00094_ip = 149; continue _fun00093 }
 52:
                        michal = zuuluu.getSize;
                        zuuluu = michal.bind(zuuluu)();
                        michal = _closure3_slot0;
                        michal = michal.containerSize;
                        michal = zuuluu - michal;
                        michal = verify <= michal;
                        if(!michal) { _fun00094_ip = 97; continue _fun00093 }
 83:
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.scrollPos;
                        michal = verify !== zuuluu;
 97:
                        if(!michal) { _fun00094_ip = 146; continue _fun00093 }
 100:
                        tangon = report.scrollTo;
                        zuuluu = {};
                        option = _closure3_slot0;
                        oscard = option._scrollPositionToPoint;
                        offset = oscard.bind(option)(verify);
                        yankee = zuuluu;
                        oscard = copyDataProperties(yankee, offset);
                        oscard = 'animated';
                        zuuluu[oscard] = golfie;
                        zuuluu = tangon.bind(report)(zuuluu);
                        michal = true;
 146:
                        entity = michal;
 149:
                        return entity;
                    }
                };
                entity['scrollTo'] = report;
                report = function(argFoo) {
                    _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                        option = argFoo;
                        zuuluu = _closure3_slot0;
                        tangon = zuuluu.props;
                        golfie = tangon.contentInset;
                        entity = undefined;
                        if(!(entity === golfie)) { _fun00096_ip = 36; continue _fun00095 }
 29:
                        golfie = _closure1_slot19;
 36:
                        verify = tangon.horizontal;
                        kiloes = tangon.onScroll;
                        oscard = tangon.onEndReached;
                        romeon = tangon.endReachedThreshold;
                        tangon = tangon.EXPERIMENTAL_enableAnchorWhileScrolling;
                        backup = entity !== tangon;
                        if(!backup) { _fun00096_ip = 76; continue _fun00095 }
 73:
                        backup = tangon;
 76:
                        zuuluu = zuuluu.state;
                        update = zuuluu.fastListComputer;
                        tangon = zuuluu.hasReachedEndBefore;
                        zuuluu = option.nativeEvent;
                        zuuluu = zuuluu.layoutMeasurement;
                        if(verify) { _fun00096_ip = 114; continue _fun00095 }
 107:
                        offset = zuuluu.height;
                        _fun00096_ip = 119; continue _fun00095;
 114:
                        offset = zuuluu.width;
 119:
                        if(verify) { _fun00096_ip = 129; continue _fun00095 }
 122:
                        sizing = golfie.top;
                        _fun00096_ip = 134; continue _fun00095;
 129:
                        sizing = golfie.left;
 134:
                        foxtra = null;
                        output = foxtra != sizing;
                        report = 0;
                        zuuluu = 0;
                        if(!output) { _fun00096_ip = 150; continue _fun00095 }
 147:
                        zuuluu = sizing;
 150:
                        if(verify) { _fun00096_ip = 160; continue _fun00095 }
 153:
                        sizing = golfie.bottom;
                        _fun00096_ip = 165; continue _fun00095;
 160:
                        sizing = golfie.right;
 165:
                        output = foxtra != sizing;
                        golfie = 0;
                        if(!output) { _fun00096_ip = 177; continue _fun00095 }
 174:
                        golfie = sizing;
 177:
                        sizing = _closure3_slot0;
                        zuuluu = offset - zuuluu;
                        zuuluu = zuuluu - golfie;
                        sizing['containerSize'] = zuuluu;
                        zuuluu = global;
                        echoed = zuuluu.Math;
                        result = echoed.min;
                        source = zuuluu.Math;
                        output = source.max;
                        golfie = sizing.getScrollPositionFromEvent;
                        golfie = golfie.bind(sizing)(option);
                        output = output.bind(source)(report, golfie);
                        golfie = update.getSize;
                        update = golfie.bind(update)();
                        golfie = sizing.containerSize;
                        golfie = update - golfie;
                        golfie = result.bind(echoed)(output, golfie);
                        sizing['scrollPos'] = golfie;
                        if(!(foxtra != kiloes)) { _fun00096_ip = 279; continue _fun00095 }
 274:
                        kiloes = kiloes.bind(entity)(option);
 279:
                        kiloes = _closure3_slot0;
                        sizing = kiloes.deferNextCompute;
                        kiloes = _closure3_slot0;
                        if(sizing) { _fun00096_ip = 308; continue _fun00095 }
 296:
                        sizing = kiloes.computeBlocks;
                        sizing = sizing.bind(kiloes)();
                        _fun00096_ip = 379; continue _fun00095;
 308:
                        sizing = false;
                        kiloes['deferNextCompute'] = sizing;
                        sizing = kiloes.deferredCompute;
                        kiloes = -1;
                        if(!(kiloes !== sizing)) { _fun00096_ip = 353; continue _fun00095 }
 332:
                        sizing = zuuluu.cancelAnimationFrame;
                        kiloes = _closure3_slot0;
                        kiloes = kiloes.deferredCompute;
                        kiloes = sizing.bind(entity)(kiloes);
 353:
                        sizing = _closure3_slot0;
                        output = zuuluu.requestAnimationFrame;
                        kiloes = function() {
                            michal = _closure3_slot0;
                            entity = michal.computeBlocks;
                            entity = entity.bind(michal)();
                            return entity;
                        };
                        kiloes = output.bind(entity)(kiloes);
                        sizing['deferredCompute'] = kiloes;
 379:
                        if(backup) { _fun00096_ip = 429; continue _fun00095 }
 382:
                        sizing = zuuluu.clearTimeout;
                        backup = _closure3_slot0;
                        kiloes = backup.disableAnchoringTimeout;
                        kiloes = sizing.bind(entity)(kiloes);
                        sizing = zuuluu.setTimeout;
                        kiloes = function() {
                            entity = global;
                            tangon = entity.clearTimeout;
                            michal = _closure3_slot0;
                            zuuluu = michal.disableAnchoringTimeout;
                            entity = undefined;
                            zuuluu = tangon.bind(entity)(zuuluu);
                            michal['disableAnchoringTimeout'] = entity;
                            return entity;
                        };
                        yankee = 100;
                        yankee = sizing.bind(entity)(kiloes, yankee);
                        backup['disableAnchoringTimeout'] = yankee;
 429:
                        if(!(foxtra != oscard)) { _fun00096_ip = 604; continue _fun00095 }
 436:
                        option = option.nativeEvent;
                        option = option.contentSize;
                        if(verify) { _fun00096_ip = 457; continue _fun00095 }
 450:
                        yankee = option.height;
                        _fun00096_ip = 462; continue _fun00095;
 457:
                        yankee = option.width;
 462:
                        verify = zuuluu.Math;
                        option = verify.ceil;
                        foxtra = foxtra != romeon;
                        report = 0;
                        if(!foxtra) { _fun00096_ip = 486; continue _fun00095 }
 483:
                        report = romeon;
 486:
                        report = yankee - report;
                        report = report - offset;
                        option = option.bind(verify)(report);
                        report = zuuluu.Math;
                        zuuluu = report.ceil;
                        golfie = zuuluu.bind(report)(golfie);
                        report = golfie >= option;
                        if(!report) { _fun00096_ip = 568; continue _fun00095 }
 523:
                        if(tangon) { _fun00096_ip = 568; continue _fun00095 }
 526:
                        offset = _closure3_slot0;
                        verify = offset.setState;
                        zuuluu = {};
                        yankee = true;
                        zuuluu['hasReachedEndBefore'] = yankee;
                        zuuluu = verify.bind(offset)(zuuluu);
                        zuuluu = {};
                        golfie = golfie - option;
                        zuuluu['distanceFromEnd'] = golfie;
                        zuuluu = oscard.bind(entity)(zuuluu);
                        _fun00096_ip = 604; continue _fun00095;
 568:
                        zuuluu = !report;
                        if(report) { _fun00096_ip = 577; continue _fun00095 }
 574:
                        zuuluu = tangon;
 577:
                        if(!zuuluu) { _fun00096_ip = 604; continue _fun00095 }
 580:
                        report = _closure3_slot0;
                        tangon = report.setState;
                        zuuluu = {};
                        oscard = false;
                        zuuluu['hasReachedEndBefore'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
 604:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.queueViewabilityChange;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    }
                };
                entity['handleScroll'] = report;
                report = function(argFoo) {
                    _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
                        verify = argFoo;
                        zuuluu = verify.nativeEvent;
                        entity = _closure3_slot0;
                        tangon = entity.state;
                        report = tangon.isFirstLayout;
                        option = tangon.fastListComputer;
                        tangon = entity.props;
                        foxtra = tangon.contentInset;
                        entity = undefined;
                        if(!(entity === foxtra)) { _fun00098_ip = 56; continue _fun00097 }
 49:
                        foxtra = _closure1_slot19;
 56:
                        golfie = tangon.onLayout;
                        offset = tangon.horizontal;
                        tangon = tangon.chunkBase;
                        zuuluu = zuuluu.layout;
                        if(offset) { _fun00098_ip = 90; continue _fun00097 }
 83:
                        romeon = zuuluu.height;
                        _fun00098_ip = 95; continue _fun00097;
 90:
                        romeon = zuuluu.width;
 95:
                        if(offset) { _fun00098_ip = 105; continue _fun00097 }
 98:
                        backup = foxtra.top;
                        _fun00098_ip = 110; continue _fun00097;
 105:
                        backup = foxtra.left;
 110:
                        zuuluu = null;
                        kiloes = zuuluu != backup;
                        oscard = 0;
                        if(!kiloes) { _fun00098_ip = 124; continue _fun00097 }
 121:
                        oscard = backup;
 124:
                        if(offset) { _fun00098_ip = 134; continue _fun00097 }
 127:
                        offset = foxtra.bottom;
                        _fun00098_ip = 139; continue _fun00097;
 134:
                        offset = foxtra.right;
 139:
                        foxtra = zuuluu != offset;
                        yankee = 0;
                        if(!foxtra) { _fun00098_ip = 151; continue _fun00097 }
 148:
                        yankee = offset;
 151:
                        offset = _closure3_slot0;
                        oscard = romeon - oscard;
                        oscard = oscard - yankee;
                        offset['containerSize'] = oscard;
                        if(!(zuuluu == tangon)) { _fun00098_ip = 194; continue _fun00097 }
 173:
                        offset = option.setInfo;
                        oscard = _closure3_slot0;
                        oscard = oscard.containerSize;
                        oscard = offset.bind(option)(oscard);
 194:
                        if(!(zuuluu != golfie)) { _fun00098_ip = 208; continue _fun00097 }
 198:
                        oscard = _closure3_slot0;
                        oscard = golfie.bind(entity)(verify, oscard);
 208:
                        if(report) { _fun00098_ip = 227; continue _fun00097 }
 211:
                        oscard = _closure3_slot0;
                        report = oscard.computeBlocks;
                        report = report.bind(oscard)();
                        _fun00098_ip = 283; continue _fun00097;
 227:
                        if(!(zuuluu != tangon)) { _fun00098_ip = 247; continue _fun00097 }
 231:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.restoreScrollPosition;
                        zuuluu = zuuluu.bind(tangon)();
                        _fun00098_ip = 283; continue _fun00097;
 247:
                        report = _closure3_slot0;
                        tangon = report.setState;
                        golfie = report.getInitialState;
                        oscard = report.containerSize;
                        zuuluu = false;
                        zuuluu = golfie.bind(report)(oscard, option, zuuluu);
                        zuuluu = tangon.bind(report)(zuuluu);
 283:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.queueViewabilityChange;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    }
                };
                entity['handleLayout'] = report;
                report = function(argFoo) {
                    _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
                        entity = _closure3_slot0;
                        entity = entity.props;
                        zuuluu = entity.onScrollEnd;
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00100_ip = 34; continue _fun00099 }
 24:
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
 34:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleMomentumScrollEnd'] = report;
                michal = function(argFoo) {
                    _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
                        michal = _closure3_slot0;
                        tangon = michal.scrollAnchor;
                        zuuluu = tangon.handleUserScroll;
                        zuuluu = zuuluu.bind(tangon)();
                        michal = michal.props;
                        zuuluu = michal.onScrollBeginDrag;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00102_ip = 65; continue _fun00101 }
 42:
                        entity = _closure3_slot0;
                        zuuluu = entity.props;
                        michal = zuuluu.onScrollBeginDrag;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
 65:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleScrollBeginDrag'] = michal;
                michal = entity.props;
                report = michal.batchesToRender;
                golfie = 12;
                if(!(oscard !== report)) { _fun00080_ip = 653; continue _fun00079 }
 650:
                golfie = report;
 653:
                report = michal.getAnchorIdFromIndex;
                michal = michal.getAnchorIndexFromId;
                oscard = 5;
                if(!(!(golfie < oscard))) { _fun00080_ip = 844; continue _fun00079 }
 675:
                if(!(zuuluu == report)) { _fun00080_ip = 683; continue _fun00079 }
 679:
                if(!(zuuluu != michal)) { _fun00080_ip = 727; continue _fun00079 }
 683:
                if(!(zuuluu != report)) { _fun00080_ip = 691; continue _fun00079 }
 687:
                if(!(zuuluu == michal)) { _fun00080_ip = 727; continue _fun00079 }
 691:
                michal = global;
                report = michal.Error;
                michal = report.prototype;
                zuuluu = Object.create(michal, {constructor: {value: report}});
                vacuum = 'FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither';
                sequen = zuuluu;
                michal = new sequen[report](vacuum, ctrled);
                michal = michal instanceof Object ? michal : zuuluu;
                throw michal;
 727:
                michal = entity.getViewabilityConfig;
                michal = michal.bind(entity)();
                zuuluu = michal.minimumViewTime;
                if(!(!(zuuluu <= tangon))) { _fun00080_ip = 808; continue _fun00079 }
 747:
                zuuluu = michal.visibilityThreshold;
                if(!(!(zuuluu <= tangon))) { _fun00080_ip = 772; continue _fun00079 }
 757:
                zuuluu = michal.visibilityThreshold;
                michal = 1;
                if(!(!(zuuluu > michal))) { _fun00080_ip = 772; continue _fun00079 }
 770:
                return entity;
 772:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                vacuum = 'FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1';
                sequen = michal;
                entity = new sequen[zuuluu](vacuum, ctrled);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
 808:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                vacuum = 'FastList: `viewabilityConfig.minimumViewTime` must be greater than 0';
                sequen = michal;
                entity = new sequen[zuuluu](vacuum, ctrled);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
 844:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                vacuum = 'FastList: `batchesToRender` must be >= 6';
                sequen = michal;
                entity = new sequen[zuuluu](vacuum, ctrled);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot7;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot10;
        oscard = {};
        michal = 'computeScrollPosition';
        oscard['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            entity = this;
            entity = entity.state;
            report = entity.fastListComputer;
            tangon = report.computeScrollPosition;
            zuuluu = false;
            michal = argFoo;
            entity = argBar;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        };
        oscard['value'] = michal;
        michal = new Array(18);
        michal[0] = oscard;
        oscard = {};
        golfie = 'getInitialState';
        oscard['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
                michal = argFoo;
                tangon = argBar;
                offset = arguments[3];
                verify = this;
                backup = undefined;
                if(!(offset === backup)) { _fun00104_ip = 22; continue _fun00103 }
 18:
                offset = new Array(0);
 22:
                entity = verify.props;
                zuuluu = entity.initialScrollSection;
                option = 0;
                ctrled = 0;
                if(!(backup !== zuuluu)) { _fun00104_ip = 44; continue _fun00103 }
 41:
                ctrled = zuuluu;
 44:
                update = entity.initialScrollItem;
                zuuluu = entity.initialScrollOrientation;
                source = 'visible';
                if(!(backup !== zuuluu)) { _fun00104_ip = 67; continue _fun00103 }
 64:
                source = zuuluu;
 67:
                result = entity.initialScrollStart;
                zuuluu = entity.stickySectionsVariant;
                vacuum = 'default';
                kiloes = vacuum;
                if(!(backup !== zuuluu)) { _fun00104_ip = 93; continue _fun00103 }
 90:
                kiloes = zuuluu;
 93:
                zuuluu = entity.horizontal;
                romeon = backup !== zuuluu;
                if(!romeon) { _fun00104_ip = 109; continue _fun00103 }
 106:
                romeon = zuuluu;
 109:
                entity = entity.scrollPosValue;
                zuuluu = tangon.setInfo;
                zuuluu = zuuluu.bind(tangon)(michal);
                zuuluu = _closure1_slot39;
                golfie = zuuluu.bind(backup)(michal);
                foxtra = null;
                zuuluu = foxtra != result;
                output = 0;
                if(!zuuluu) { _fun00104_ip = 152; continue _fun00103 }
 149:
                output = result;
 152:
                sizing = output + michal;
                if(!(foxtra == result)) { _fun00104_ip = 345; continue _fun00103 }
 163:
                if(!(!(ctrled > option))) { _fun00104_ip = 185; continue _fun00103 }
 167:
                echoed = foxtra != update;
                oscard = output;
                report = sizing;
                zuuluu = undefined;
                if(!echoed) { _fun00104_ip = 362; continue _fun00103 }
 185:
                echoed = michal > option;
                oscard = output;
                report = sizing;
                zuuluu = undefined;
                if(!echoed) { _fun00104_ip = 362; continue _fun00103 }
 203:
                echoed = tangon.computeScrollPosition;
                kiloes = vacuum === kiloes;
                kiloes = echoed.bind(tangon)(kiloes, ctrled, update);
                echoed = foxtra != kiloes;
                oscard = output;
                report = sizing;
                zuuluu = undefined;
                if(!echoed) { _fun00104_ip = 362; continue _fun00103 }
 238:
                update = verify._calculateScrollPosition;
                echoed = {};
                echoed['itemCoords'] = kiloes;
                ctrled = tangon.getSize;
                ctrled = ctrled.bind(tangon)();
                echoed['fullSize'] = ctrled;
                echoed['orientation'] = source;
                source = 16;
                echoed['paddingEnd'] = source;
                source = update.bind(verify)(echoed);
                update = source;
                if(!(foxtra == update)) { _fun00104_ip = 307; continue _fun00103 }
 291:
                echoed = kiloes.scrollPosition;
                kiloes = kiloes.sectionOffset;
                update = echoed - kiloes;
 307:
                echoed = update + michal;
                kiloes = foxtra != source;
                oscard = update;
                report = echoed;
                zuuluu = undefined;
                if(!kiloes) { _fun00104_ip = 362; continue _fun00103 }
 326:
                kiloes = verify._scrollPositionToPoint;
                zuuluu = kiloes.bind(verify)(source);
                oscard = update;
                report = echoed;
                _fun00104_ip = 362; continue _fun00103;
 345:
                kiloes = verify._scrollPositionToPoint;
                zuuluu = kiloes.bind(verify)(result);
                oscard = output;
                report = sizing;
 362:
                if(!(foxtra == zuuluu)) { _fun00104_ip = 376; continue _fun00103 }
 366:
                zuuluu = {'x': 0, 'y': 0};
 376:
                if(romeon) { _fun00104_ip = 386; continue _fun00103 }
 379:
                romeon = zuuluu.y;
                _fun00104_ip = 391; continue _fun00103;
 386:
                romeon = zuuluu.x;
 391:
                if(!(foxtra == entity)) { _fun00104_ip = 434; continue _fun00103 }
 395:
                foxtra = _closure1_slot0;
                kiloes = _closure1_slot2;
                yankee = 15;
                yankee = kiloes[yankee];
                foxtra = foxtra.bind(backup)(yankee);
                yankee = foxtra.makeMutable;
                yankee = yankee.bind(foxtra)(romeon);
                verify['scrollPosValue'] = yankee;
                _fun00104_ip = 450; continue _fun00103;
 434:
                yankee = entity.set;
                yankee = yankee.bind(entity)(romeon);
                verify['scrollPosValue'] = entity;
 450:
                entity = {};
                if(!(!(michal > option))) { _fun00104_ip = 473; continue _fun00103 }
 456:
                michal = {};
                michal['size'] = option;
                option = new Array(0);
                michal['items'] = option;
                _fun00104_ip = 497; continue _fun00103;
 473:
                verify = tangon.compute;
                sequen = true;
                papara = tangon;
                cntext = oscard;
                record = report;
                config = offset;
                michal = papara[verify](cntext, record, config, sequen, vacuum);
 497:
                cntext = entity;
                record = michal;
                michal = copyDataProperties(cntext, record);
                michal = 'batchSize';
                entity[michal] = golfie;
                michal = 'blockStart';
                entity[michal] = oscard;
                michal = 'blockEnd';
                entity[michal] = report;
                report = argBaz;
                michal = 'isFirstLayout';
                entity[michal] = report;
                michal = 'fastListComputer';
                entity[michal] = tangon;
                michal = 'initialContentOffset';
                entity[michal] = zuuluu;
                zuuluu = false;
                michal = 'hasReachedEndBefore';
                entity[michal] = zuuluu;
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'componentDidMount';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
                zuuluu = this;
                report = zuuluu.scrollPosValue;
                var _closure3_slot0 = report;
                option = zuuluu.workletMounted;
                var _closure3_slot1 = option;
                entity = zuuluu.props;
                michal = entity.horizontal;
                entity = undefined;
                verify = entity !== michal;
                if(!verify) { _fun00106_ip = 48; continue _fun00105 }
 45:
                verify = michal;
 48:
                var _closure3_slot2 = verify;
                golfie = _closure1_slot0;
                offset = _closure1_slot2;
                oscard = 15;
                oscard = offset[oscard];
                oscard = golfie.bind(entity)(oscard);
                golfie = oscard.WorkletEventHandler;
                oscard = function(argFoo) { // Original name: t
                    _fun00107: for(var _fun00108_ip = 0; ; ) switch(_fun00108_ip) {
 0:
                        michal = argFoo;
                        tangon = _closure3_slot2;
                        zuuluu = michal.contentOffset;
                        if(tangon) { _fun00108_ip = 26; continue _fun00107 }
 19:
                        oscard = zuuluu.y;
                        _fun00108_ip = 31; continue _fun00107;
 26:
                        oscard = zuuluu.x;
 31:
                        zuuluu = _closure3_slot2;
                        michal = michal.contentSize;
                        if(zuuluu) { _fun00108_ip = 51; continue _fun00107 }
 44:
                        report = michal.height;
                        _fun00108_ip = 56; continue _fun00107;
 51:
                        report = michal.width;
 56:
                        michal = 0;
                        michal = michal !== report;
                        if(michal) { _fun00108_ip = 78; continue _fun00107 }
 65:
                        tangon = _closure3_slot1;
                        zuuluu = tangon.get;
                        michal = zuuluu.bind(tangon)();
 78:
                        if(!michal) { _fun00108_ip = 130; continue _fun00107 }
 81:
                        tangon = _closure3_slot1;
                        zuuluu = tangon.set;
                        michal = true;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.set;
                        entity = global;
                        tangon = entity.Math;
                        entity = tangon.min;
                        entity = entity.bind(tangon)(oscard, report);
                        entity = michal.bind(zuuluu)(entity);
 130:
                        entity = undefined;
                        return entity;
                    }
                };
                tangon = {};
                tangon['horizontal'] = verify;
                tangon['workletMounted'] = option;
                tangon['scrollPosValue'] = report;
                oscard['__closure'] = tangon;
                tangon = 13353994165730.0;
                oscard['__workletHash'] = tangon;
                tangon = _closure1_slot32;
                oscard['__initData'] = tangon;
                tangon = golfie.prototype;
                report = Object.create(tangon, {constructor: {value: golfie}});
                yankee = ['onScroll'];
                foxtra = report;
                romeon = oscard;
                tangon = new foxtra[golfie](romeon, yankee, offset);
                tangon = tangon instanceof Object ? tangon : report;
                zuuluu['worklet'] = tangon;
                tangon = _closure1_slot14;
                michal = zuuluu.scrollView;
                michal = michal.current;
                michal = tangon.bind(entity)(michal);
                zuuluu['viewTag'] = michal;
                report = zuuluu.worklet;
                tangon = report.registerForEvents;
                michal = zuuluu.viewTag;
                michal = tangon.bind(report)(michal);
                michal = zuuluu.queueViewabilityChange;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'getSnapshotBeforeUpdate';
        oscard['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00109: for(var _fun00110_ip = 0; ; ) switch(_fun00110_ip) {
 0:
                tangon = argBar;
                michal = this;
                entity = argFoo;
                golfie = entity.getAnchorIdFromIndex;
                entity = michal.props;
                zuuluu = entity.EXPERIMENTAL_enableAnchorWhileScrolling;
                entity = undefined;
                entity = entity !== zuuluu;
                if(!entity) { _fun00110_ip = 38; continue _fun00109 }
 35:
                entity = zuuluu;
 38:
                zuuluu = michal.state;
                option = zuuluu.isFirstLayout;
                if(entity) { _fun00110_ip = 67; continue _fun00109 }
 52:
                zuuluu = michal.disableAnchoringTimeout;
                entity = null;
                zuuluu = entity == zuuluu;
                if(!zuuluu) { _fun00110_ip = 147; continue _fun00109 }
 67:
                zuuluu = null;
                report = zuuluu == golfie;
                if(report) { _fun00110_ip = 79; continue _fun00109 }
 76:
                report = option;
 79:
                if(report) { _fun00110_ip = 92; continue _fun00109 }
 82:
                oscard = tangon.isFirstLayout;
                report = option !== oscard;
 92:
                if(report) { _fun00110_ip = 121; continue _fun00109 }
 95:
                oscard = michal.scrollAnchor;
                report = oscard.findOrUpdateAnchor;
                tangon = tangon.items;
                tangon = report.bind(oscard)(golfie, tangon);
 121:
                tangon = michal.scrollAnchor;
                michal = tangon.hasAnchor;
                michal = michal.bind(tangon)();
                if(michal) { _fun00110_ip = 144; continue _fun00109 }
 142:
                michal = null;
 144:
                entity = michal;
 147:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'componentDidUpdate';
        oscard['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00111: for(var _fun00112_ip = 0; ; ) switch(_fun00112_ip) {
 0:
                entity = argBar;
                michal = this;
                var _closure3_slot0 = michal;
                tangon = argFoo;
                report = tangon.scrollPosValue;
                tangon = michal.props;
                tangon = tangon.scrollPosValue;
                if(!(report === tangon)) { _fun00112_ip = 165; continue _fun00111 }
 39:
                tangon = michal.state;
                tangon = tangon.isFirstLayout;
                if(tangon) { _fun00112_ip = 112; continue _fun00111 }
 53:
                tangon = entity.isFirstLayout;
                if(!tangon) { _fun00112_ip = 112; continue _fun00111 }
 62:
                tangon = michal.props;
                report = tangon.chunkBase;
                tangon = null;
                if(!(tangon == report)) { _fun00112_ip = 130; continue _fun00111 }
 79:
                report = michal.scrollView;
                report = report.current;
                if(!(tangon != report)) { _fun00112_ip = 130; continue _fun00111 }
 94:
                tangon = report.measure;
                zuuluu = function() {
                    michal = _closure3_slot0;
                    entity = michal.restoreScrollPosition;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                _fun00112_ip = 130; continue _fun00111;
 112:
                zuuluu = argBaz;
                if(!zuuluu) { _fun00112_ip = 130; continue _fun00111 }
 118:
                zuuluu = michal.anchorScroll;
                zuuluu = zuuluu.bind(michal)();
 130:
                zuuluu = michal.state;
                zuuluu = zuuluu.items;
                entity = entity.items;
                if(!(zuuluu !== entity)) { _fun00112_ip = 161; continue _fun00111 }
 151:
                entity = michal.queueViewabilityChange;
                entity = entity.bind(michal)();
 161:
                entity = undefined;
                return entity;
 165:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                oscard = 'FastList: scrollPosValue cannot changed after mounting';
                golfie = michal;
                entity = new golfie[zuuluu](oscard, report);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        oscard['value'] = golfie;
        michal[4] = oscard;
        oscard = {};
        golfie = 'getViewabilityConfig';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00113: for(var _fun00114_ip = 0; ; ) switch(_fun00114_ip) {
 0:
                entity = this;
                entity = entity.props;
                tangon = entity.viewabilityConfig;
                entity = {};
                michal = null;
                report = michal == tangon;
                oscard = undefined;
                if(report) { _fun00114_ip = 33; continue _fun00113 }
 27:
                oscard = tangon.minimumViewTime;
 33:
                golfie = michal != oscard;
                report = 1000;
                if(!golfie) { _fun00114_ip = 49; continue _fun00113 }
 46:
                report = oscard;
 49:
                entity['minimumViewTime'] = report;
                report = michal == tangon;
                zuuluu = undefined;
                if(report) { _fun00114_ip = 69; continue _fun00113 }
 63:
                zuuluu = tangon.visibilityThreshold;
 69:
                tangon = michal != zuuluu;
                michal = 0.5;
                if(!tangon) { _fun00114_ip = 89; continue _fun00113 }
 86:
                michal = zuuluu;
 89:
                entity['visibilityThreshold'] = michal;
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[5] = oscard;
        oscard = {};
        golfie = 'queueViewabilityChange';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00115: for(var _fun00116_ip = 0; ; ) switch(_fun00116_ip) {
 0:
                michal = this;
                entity = michal.props;
                zuuluu = entity.onViewableItemsChanged;
                entity = null;
                if(!(entity != zuuluu)) { _fun00116_ip = 81; continue _fun00115 }
 20:
                entity = michal.getViewabilityConfig;
                entity = entity.bind(michal)();
                report = entity.minimumViewTime;
                entity = global;
                oscard = entity.clearTimeout;
                zuuluu = michal.viewabilityDebounce;
                tangon = undefined;
                zuuluu = oscard.bind(tangon)(zuuluu);
                zuuluu = entity.setTimeout;
                entity = michal.handleViewabilityChange;
                entity = zuuluu.bind(tangon)(entity, report);
                michal['viewabilityDebounce'] = entity;
 81:
                entity = undefined;
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[6] = oscard;
        oscard = {};
        golfie = 'reset';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00117: for(var _fun00118_ip = 0; ; ) switch(_fun00118_ip) {
 0:
                zuuluu = this;
                entity = zuuluu.props;
                entity = entity.chunkBase;
                michal = zuuluu.state;
                golfie = michal.fastListComputer;
                oscard = michal.items;
                michal = michal.isFirstLayout;
                if(michal) { _fun00118_ip = 89; continue _fun00117 }
 40:
                michal = zuuluu.setState;
                report = zuuluu.getInitialState;
                tangon = null;
                option = tangon != entity;
                tangon = 0;
                if(!option) { _fun00118_ip = 66; continue _fun00117 }
 63:
                tangon = entity;
 66:
                offset = false;
                foxtra = zuuluu;
                romeon = tangon;
                yankee = golfie;
                verify = oscard;
                entity = foxtra[report](romeon, yankee, offset, verify, option);
                entity = michal.bind(zuuluu)(entity);
 89:
                entity = undefined;
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[7] = oscard;
        oscard = {};
        golfie = 'componentWillUnmount';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00119: for(var _fun00120_ip = 0; ; ) switch(_fun00120_ip) {
 0:
                entity = this;
                tangon = entity.worklet;
                michal = null;
                if(!(michal != tangon)) { _fun00120_ip = 32; continue _fun00119 }
 15:
                zuuluu = tangon.unregisterFromEvents;
                michal = entity.viewTag;
                michal = zuuluu.bind(tangon)(michal);
 32:
                zuuluu = entity.deferredCompute;
                michal = -1;
                if(!(michal !== zuuluu)) { _fun00120_ip = 69; continue _fun00119 }
 48:
                michal = global;
                tangon = michal.cancelAnimationFrame;
                zuuluu = entity.deferredCompute;
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
 69:
                michal = global;
                zuuluu = michal.clearTimeout;
                michal = entity.viewabilityDebounce;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[8] = oscard;
        oscard = {};
        golfie = 'anchorScroll';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00121: for(var _fun00122_ip = 0; ; ) switch(_fun00122_ip) {
 0:
                tangon = this;
                entity = tangon.props;
                option = entity.getAnchorIndexFromId;
                zuuluu = entity.stickySectionsVariant;
                offset = 'default';
                entity = undefined;
                michal = offset;
                if(!(entity !== zuuluu)) { _fun00122_ip = 36; continue _fun00121 }
 33:
                michal = zuuluu;
 36:
                zuuluu = tangon.state;
                verify = zuuluu.fastListComputer;
                zuuluu = null;
                if(!(zuuluu != option)) { _fun00122_ip = 170; continue _fun00121 }
 53:
                report = tangon.scrollAnchor;
                report = report.anchorOffset;
                if(!(zuuluu != report)) { _fun00122_ip = 170; continue _fun00121 }
 69:
                golfie = tangon.scrollAnchor;
                oscard = golfie.getAnchorIndex;
                oscard = oscard.bind(golfie)(option);
                if(!(zuuluu != oscard)) { _fun00122_ip = 170; continue _fun00121 }
 92:
                option = verify.computeScrollPosition;
                golfie = oscard.section;
                oscard = oscard.item;
                michal = offset === michal;
                michal = option.bind(verify)(michal, golfie, oscard);
                zuuluu = zuuluu != michal;
                if(!zuuluu) { _fun00122_ip = 146; continue _fun00121 }
 126:
                golfie = tangon.scrollPos;
                oscard = michal.scrollPosition;
                oscard = oscard - report;
                zuuluu = golfie !== oscard;
 146:
                if(!zuuluu) { _fun00122_ip = 170; continue _fun00121 }
 149:
                zuuluu = tangon.scrollTo;
                michal = michal.scrollPosition;
                michal = michal - report;
                michal = zuuluu.bind(tangon)(michal);
 170:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[9] = oscard;
        oscard = {};
        golfie = 'getSectionItemFromPosition';
        oscard['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            entity = this;
            entity = entity.state;
            tangon = entity.fastListComputer;
            zuuluu = tangon.getSectionItemFromPosition;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        oscard['value'] = golfie;
        michal[10] = oscard;
        oscard = {};
        golfie = 'getScrollPositionFromEvent';
        oscard['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00123: for(var _fun00124_ip = 0; ; ) switch(_fun00124_ip) {
 0:
                entity = this;
                entity = entity.props;
                entity = entity.horizontal;
                michal = argFoo;
                michal = michal.nativeEvent;
                michal = michal.contentOffset;
                if(entity) { _fun00124_ip = 38; continue _fun00123 }
 31:
                entity = michal.y;
                _fun00124_ip = 43; continue _fun00123;
 38:
                entity = michal.x;
 43:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[11] = oscard;
        oscard = {};
        golfie = 'restoreScrollPosition';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00125: for(var _fun00126_ip = 0; ; ) switch(_fun00126_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                report = zuuluu.props;
                yankee = report.initialScrollItem;
                michal = report.initialScrollSection;
                verify = 0;
                entity = undefined;
                offset = 0;
                if(!(entity !== michal)) { _fun00126_ip = 39; continue _fun00125 }
 36:
                offset = michal;
 39:
                oscard = report.initialScrollOrientation;
                michal = 'visible';
                if(!(entity !== oscard)) { _fun00126_ip = 56; continue _fun00125 }
 53:
                michal = oscard;
 56:
                report = report.initialScrollStart;
                golfie = null;
                if(!(golfie == yankee)) { _fun00126_ip = 79; continue _fun00125 }
 68:
                if(!(offset <= verify)) { _fun00126_ip = 79; continue _fun00125 }
 72:
                if(!(golfie != report)) { _fun00126_ip = 244; continue _fun00125 }
 79:
                if(!(golfie == report)) { _fun00126_ip = 228; continue _fun00125 }
 86:
                option = zuuluu.scrollToLocation;
                oscard = {};
                oscard['section'] = offset;
                romeon = golfie != yankee;
                golfie = -1;
                offset = golfie;
                if(!romeon) { _fun00126_ip = 117; continue _fun00125 }
 114:
                offset = yankee;
 117:
                oscard['item'] = offset;
                oscard['orientation'] = michal;
                michal = 16;
                oscard['paddingEnd'] = michal;
                michal = true;
                oscard['setAnchor'] = michal;
                oscard = option.bind(zuuluu)(oscard);
                if(oscard) { _fun00126_ip = 220; continue _fun00125 }
 149:
                option = zuuluu.scrollPosValue;
                oscard = option.set;
                oscard = oscard.bind(option)(verify);
                oscard = zuuluu.deferredCompute;
                if(!(golfie !== oscard)) { _fun00126_ip = 194; continue _fun00125 }
 175:
                oscard = global;
                golfie = oscard.cancelAnimationFrame;
                oscard = zuuluu.deferredCompute;
                oscard = golfie.bind(entity)(oscard);
 194:
                oscard = global;
                oscard = oscard.requestAnimationFrame;
                tangon = function() {
                    michal = _closure3_slot0;
                    entity = michal.computeBlocks;
                    entity = entity.bind(michal)();
                    return entity;
                };
                tangon = oscard.bind(entity)(tangon);
                zuuluu['deferredCompute'] = tangon;
                _fun00126_ip = 254; continue _fun00125;
 220:
                zuuluu['deferNextCompute'] = michal;
                _fun00126_ip = 254; continue _fun00125;
 228:
                tangon = zuuluu.scrollTo;
                michal = false;
                michal = tangon.bind(zuuluu)(report, michal);
                _fun00126_ip = 254; continue _fun00125;
 244:
                michal = zuuluu.computeBlocks;
                michal = michal.bind(zuuluu)();
 254:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[12] = oscard;
        oscard = {};
        golfie = 'computeBlocks';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00127: for(var _fun00128_ip = 0; ; ) switch(_fun00128_ip) {
 0:
                tangon = this;
                michal = tangon.props;
                zuuluu = michal.batchesToRender;
                oscard = 12;
                entity = undefined;
                if(!(entity !== zuuluu)) { _fun00128_ip = 26; continue _fun00127 }
 23:
                oscard = zuuluu;
 26:
                yankee = michal.chunkBase;
                michal = tangon.state;
                verify = michal.fastListComputer;
                option = michal.items;
                michal = null;
                if(!(michal == yankee)) { _fun00128_ip = 61; continue _fun00127 }
 55:
                yankee = tangon.containerSize;
 61:
                golfie = tangon.scrollPos;
                offset = 0;
                if(!(offset !== yankee)) { _fun00128_ip = 211; continue _fun00127 }
 76:
                zuuluu = global;
                report = zuuluu.Math;
                michal = report.ceil;
                yankee = michal.bind(report)(yankee);
                report = zuuluu.Math;
                michal = report.floor;
                backup = michal.bind(report)(golfie);
                michal = _closure1_slot39;
                michal = michal.bind(entity)(yankee);
                golfie = zuuluu.Math;
                report = golfie.max;
                foxtra = zuuluu.Math;
                romeon = foxtra.round;
                zuuluu = 2;
                yankee = yankee / zuuluu;
                yankee = backup + yankee;
                yankee = yankee / michal;
                yankee = romeon.bind(foxtra)(yankee);
                zuuluu = oscard / zuuluu;
                zuuluu = yankee - zuuluu;
                zuuluu = report.bind(golfie)(offset, zuuluu);
                zuuluu = zuuluu * michal;
                report = {};
                report['batchSize'] = michal;
                report['blockStart'] = zuuluu;
                michal = michal * oscard;
                michal = zuuluu + michal;
                report['blockEnd'] = michal;
                _fun00128_ip = 221; continue _fun00127;
 211:
                report = {'batchSize': 0, 'blockStart': 0, 'blockEnd': 0};
 221:
                zuuluu = report.batchSize;
                michal = tangon.state;
                michal = michal.batchSize;
                michal = zuuluu === michal;
                if(!michal) { _fun00128_ip = 266; continue _fun00127 }
 245:
                oscard = report.blockStart;
                zuuluu = tangon.state;
                zuuluu = zuuluu.blockStart;
                michal = oscard === zuuluu;
 266:
                if(!michal) { _fun00128_ip = 290; continue _fun00127 }
 269:
                oscard = report.blockEnd;
                zuuluu = tangon.state;
                zuuluu = zuuluu.blockEnd;
                michal = oscard === zuuluu;
 290:
                if(michal) { _fun00128_ip = 359; continue _fun00127 }
 293:
                zuuluu = tangon.setState;
                michal = {};
                output = michal;
                sizing = report;
                oscard = copyDataProperties(output, sizing);
                golfie = verify.compute;
                oscard = report.blockStart;
                report = report.blockEnd;
                sizing = golfie.bind(verify)(oscard, report, option);
                output = michal;
                report = copyDataProperties(output, sizing);
                oscard = false;
                report = 'isFirstLayout';
                michal[report] = oscard;
                michal = zuuluu.bind(tangon)(michal);
 359:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[13] = oscard;
        oscard = {};
        golfie = 'renderItems';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00129: for(var _fun00130_ip = 0; ; ) switch(_fun00130_ip) {
 0:
                ctrled = this;
                entity = ctrled.props;
                michal = entity.stickySectionsVariant;
                source = 'default';
                update = undefined;
                echoed = source;
                if(!(update !== michal)) { _fun00130_ip = 32; continue _fun00129 }
 29:
                echoed = michal;
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
                kiloes = entity.renderItem;
                var _closure3_slot3 = kiloes;
                backup = entity.renderSectionFooter;
                if(!(update === backup)) { _fun00130_ip = 122; continue _fun00129 }
 115:
                backup = _closure1_slot37;
 122:
                var _closure3_slot4 = backup;
                michal = entity.optimizeListItemRender;
                foxtra = update !== michal;
                if(!foxtra) { _fun00130_ip = 142; continue _fun00129 }
 139:
                foxtra = michal;
 142:
                michal = entity.disableContentWrappers;
                romeon = update !== michal;
                if(!romeon) { _fun00130_ip = 158; continue _fun00129 }
 155:
                romeon = michal;
 158:
                entity = entity.debugLayout;
                entity = ctrled.state;
                zuuluu = entity.items;
                entity = ctrled.props;
                entity = entity.horizontal;
                michal = null;
                yankee = michal != entity;
                if(!yankee) { _fun00130_ip = 198; continue _fun00129 }
 195:
                yankee = entity;
 198:
                offset = new Array(0);
                var _closure3_slot5 = offset;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    _fun00131: for(var _fun00132_ip = 0; ; ) switch(_fun00132_ip) {
 0:
                        entity = argFoo;
                        michal = entity.type;
                        zuuluu = entity.layoutStart;
                        entity = _closure1_slot21;
                        entity = entity.SECTION;
                        if(!(michal === entity)) { _fun00132_ip = 48; continue _fun00131 }
 31:
                        michal = _closure3_slot5;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
 48:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                entity = new Array(0);
                michal = _closure1_slot35;
                option = michal.bind(update)(zuuluu);
                zuuluu = option.bind(update)();
                michal = zuuluu.done;
                golfie = global;
                oscard = '';
                report = false;
                tangon = 0;
                if(michal) { _fun00130_ip = 1104; continue _fun00129 }
 262:
                record = zuuluu.value;
                target = record.type;
                papara = record.key;
                sierra = record.layoutStart;
                sequen = record.recyclerKey;
                michal = record.layoutSize;
                config = record.section;
                record = record.item;
                if(!(tangon !== michal)) { _fun00130_ip = 1086; continue _fun00129 }
 312:
                cntext = _closure1_slot21;
                cntext = cntext.SPACER;
                if(!(cntext !== target)) { _fun00130_ip = 1033; continue _fun00129 }
 329:
                cntext = _closure1_slot21;
                cntext = cntext.HEADER;
                if(!(cntext !== target)) { _fun00130_ip = 943; continue _fun00129 }
 346:
                cntext = _closure1_slot21;
                cntext = cntext.FOOTER;
                if(!(cntext !== target)) { _fun00130_ip = 850; continue _fun00129 }
 363:
                cntext = _closure1_slot21;
                cntext = cntext.SECTION;
                if(!(cntext !== target)) { _fun00130_ip = 609; continue _fun00129 }
 380:
                cntext = _closure1_slot21;
                cntext = cntext.ITEM;
                if(!(cntext !== target)) { _fun00130_ip = 508; continue _fun00129 }
 394:
                cntext = _closure1_slot21;
                cntext = cntext.SECTION_FOOTER;
                if(!(cntext === target)) { _fun00130_ip = 1086; continue _fun00129 }
 411:
                target = entity.push;
                whisks = _closure1_slot16;
                limora = _closure1_slot27;
                status = {};
                status['recyclerKey'] = sequen;
                status['horizontal'] = yankee;
                status['disableWrapper'] = romeon;
                status['fastListInstance'] = ctrled;
                status['layoutSize'] = michal;
                status['section'] = config;
                status['debug'] = report;
                cntext = backup;
                if(foxtra) { _fun00130_ip = 471; continue _fun00129 }
 466:
                cntext = function(argFoo) {
                    golfie = 0;
                    oscard = copyRestArgs(golfie);
                    zuuluu = _closure3_slot4;
                    michal = new Array(0);
                    golfie = michal;
                    report = 0;
                    entity = arraySpread(golfie, oscard, report);
                    report = undefined;
                    golfie = zuuluu;
                    oscard = michal;
                    entity = apply(golfie, oscard, report);
                    return entity;
                };
 471:
                status['children'] = cntext;
                cntext = golfie.HermesInternal;
                cntext = cntext.concat;
                cntext = cntext.bind(oscard)(papara);
                cntext = whisks.bind(update)(limora, status, cntext);
                cntext = target.bind(entity)(cntext);
                _fun00130_ip = 1086; continue _fun00129;
 508:
                cntext = entity.push;
                limora = _closure1_slot16;
                status = _closure1_slot28;
                target = {};
                target['recyclerKey'] = sequen;
                target['horizontal'] = yankee;
                target['disableWrapper'] = romeon;
                target['layoutSize'] = michal;
                target['fastListInstance'] = ctrled;
                target['section'] = config;
                target['item'] = record;
                target['debug'] = report;
                record = kiloes;
                if(foxtra) { _fun00130_ip = 572; continue _fun00129 }
 567:
                record = function(argFoo) {
                    golfie = 0;
                    oscard = copyRestArgs(golfie);
                    zuuluu = _closure3_slot3;
                    michal = new Array(0);
                    golfie = michal;
                    report = 0;
                    entity = arraySpread(golfie, oscard, report);
                    report = undefined;
                    golfie = zuuluu;
                    oscard = michal;
                    entity = apply(golfie, oscard, report);
                    return entity;
                };
 572:
                target['children'] = record;
                record = golfie.HermesInternal;
                record = record.concat;
                record = record.bind(oscard)(papara);
                record = limora.bind(update)(status, target, record);
                record = cntext.bind(entity)(record);
                _fun00130_ip = 1086; continue _fun00129;
 609:
                record = offset.shift;
                record = record.bind(offset)();
                if(!(source === echoed)) { _fun00130_ip = 748; continue _fun00129 }
 626:
                cntext = entity.push;
                limora = _closure1_slot16;
                status = _closure1_slot25;
                target = {};
                target['recyclerKey'] = sequen;
                target['horizontal'] = yankee;
                target['disableWrapper'] = romeon;
                target['layoutStart'] = sierra;
                target['layoutSize'] = michal;
                record = offset[tangon];
                target['nextSectionLayoutPosition'] = record;
                record = ctrled.scrollPosValue;
                target['scrollPosValue'] = record;
                target['fastListInstance'] = ctrled;
                target['section'] = config;
                target['debug'] = report;
                record = sizing;
                if(foxtra) { _fun00130_ip = 711; continue _fun00129 }
 706:
                record = function(argFoo) {
                    golfie = 0;
                    oscard = copyRestArgs(golfie);
                    zuuluu = _closure3_slot2;
                    michal = new Array(0);
                    golfie = michal;
                    report = 0;
                    entity = arraySpread(golfie, oscard, report);
                    report = undefined;
                    golfie = zuuluu;
                    oscard = michal;
                    entity = apply(golfie, oscard, report);
                    return entity;
                };
 711:
                target['children'] = record;
                record = golfie.HermesInternal;
                record = record.concat;
                record = record.bind(oscard)(papara);
                record = limora.bind(update)(status, target, record);
                record = cntext.bind(entity)(record);
                _fun00130_ip = 1086; continue _fun00129;
 748:
                record = entity.push;
                status = _closure1_slot16;
                target = _closure1_slot26;
                cntext = {};
                cntext['recyclerKey'] = sequen;
                cntext['horizontal'] = yankee;
                cntext['disableWrapper'] = romeon;
                cntext['layoutStart'] = sierra;
                cntext['layoutSize'] = michal;
                cntext['fastListInstance'] = ctrled;
                cntext['section'] = config;
                cntext['debug'] = report;
                config = sizing;
                if(foxtra) { _fun00130_ip = 813; continue _fun00129 }
 808:
                config = function(argFoo) {
                    golfie = 0;
                    oscard = copyRestArgs(golfie);
                    zuuluu = _closure3_slot2;
                    michal = new Array(0);
                    golfie = michal;
                    report = 0;
                    entity = arraySpread(golfie, oscard, report);
                    report = undefined;
                    golfie = zuuluu;
                    oscard = michal;
                    entity = apply(golfie, oscard, report);
                    return entity;
                };
 813:
                cntext['children'] = config;
                config = golfie.HermesInternal;
                config = config.concat;
                config = config.bind(oscard)(papara);
                config = status.bind(update)(target, cntext, config);
                config = record.bind(entity)(config);
                _fun00130_ip = 1086; continue _fun00129;
 850:
                record = entity.push;
                status = _closure1_slot16;
                target = _closure1_slot29;
                cntext = {};
                cntext['recyclerKey'] = sequen;
                cntext['horizontal'] = yankee;
                cntext['disableWrapper'] = romeon;
                cntext['fastListInstance'] = ctrled;
                cntext['layoutSize'] = michal;
                cntext['debug'] = report;
                config = output;
                if(foxtra) { _fun00130_ip = 906; continue _fun00129 }
 901:
                config = function(argFoo) {
                    golfie = 0;
                    oscard = copyRestArgs(golfie);
                    zuuluu = _closure3_slot1;
                    michal = new Array(0);
                    golfie = michal;
                    report = 0;
                    entity = arraySpread(golfie, oscard, report);
                    report = undefined;
                    golfie = zuuluu;
                    oscard = michal;
                    entity = apply(golfie, oscard, report);
                    return entity;
                };
 906:
                cntext['children'] = config;
                config = golfie.HermesInternal;
                config = config.concat;
                config = config.bind(oscard)(papara);
                config = status.bind(update)(target, cntext, config);
                config = record.bind(entity)(config);
                _fun00130_ip = 1086; continue _fun00129;
 943:
                config = entity.push;
                target = _closure1_slot16;
                cntext = _closure1_slot29;
                record = {};
                record['recyclerKey'] = sequen;
                record['horizontal'] = yankee;
                record['disableWrapper'] = romeon;
                record['fastListInstance'] = ctrled;
                record['layoutSize'] = michal;
                record['debug'] = report;
                sequen = result;
                if(foxtra) { _fun00130_ip = 999; continue _fun00129 }
 994:
                sequen = function(argFoo) {
                    golfie = 0;
                    oscard = copyRestArgs(golfie);
                    zuuluu = _closure3_slot0;
                    michal = new Array(0);
                    golfie = michal;
                    report = 0;
                    entity = arraySpread(golfie, oscard, report);
                    report = undefined;
                    golfie = zuuluu;
                    oscard = michal;
                    entity = apply(golfie, oscard, report);
                    return entity;
                };
 999:
                record['children'] = sequen;
                sequen = golfie.HermesInternal;
                sequen = sequen.concat;
                sequen = sequen.bind(oscard)(papara);
                sequen = target.bind(update)(cntext, record, sequen);
                sequen = config.bind(entity)(sequen);
                _fun00130_ip = 1086; continue _fun00129;
 1033:
                sequen = entity.push;
                cntext = _closure1_slot16;
                record = _closure1_slot30;
                config = {};
                config['horizontal'] = yankee;
                config['layoutSize'] = michal;
                michal = golfie.HermesInternal;
                michal = michal.concat;
                michal = michal.bind(oscard)(papara);
                michal = cntext.bind(update)(record, config, michal);
                michal = sequen.bind(entity)(michal);
 1086:
                sequen = option.bind(update)();
                michal = sequen.done;
                zuuluu = sequen;
                if(!michal) { _fun00130_ip = 262; continue _fun00129 }
 1104:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[14] = oscard;
        oscard = {};
        golfie = 'isEmpty';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            entity = entity.props;
            tangon = entity.sections;
            zuuluu = tangon.reduce;
            entity = function(argFoo, argBar) {
                michal = argFoo;
                entity = argBar;
                entity = michal + entity;
                return entity;
            };
            michal = 0;
            entity = zuuluu.bind(tangon)(entity, michal);
            entity = michal === entity;
            return entity;
        };
        oscard['value'] = golfie;
        michal[15] = oscard;
        oscard = {};
        golfie = 'setDisableRecycling';
        oscard['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            entity = entity.state;
            zuuluu = entity.fastListComputer;
            michal = zuuluu.setDisableRecycling;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        oscard['value'] = golfie;
        michal[16] = oscard;
        oscard = {};
        golfie = 'render';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00133: for(var _fun00134_ip = 0; ; ) switch(_fun00134_ip) {
 0:
                option = this;
                report = option.props;
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
                golfie = report.renderAccessory;
                yankee = report.removeClippedSubviews;
                tangon = undefined;
                if(!(tangon === yankee)) { _fun00134_ip = 294; continue _fun00133 }
 262:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 14;
                entity = zuuluu[entity];
                michal = michal.bind(tangon)(entity);
                entity = michal.isAndroid;
                yankee = entity.bind(michal)();
 294:
                entity = report.inActionSheet;
                zuuluu = _closure1_slot4;
                michal = _closure1_slot3;
                romeon = zuuluu.bind(tangon)(report, michal);
                if(entity) { _fun00134_ip = 326; continue _fun00133 }
 320:
                verify = _closure1_slot13;
                _fun00134_ip = 352; continue _fun00133;
 326:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 18;
                entity = zuuluu[entity];
                entity = michal.bind(tangon)(entity);
                verify = entity.BottomSheetScrollView;
 352:
                zuuluu = _closure1_slot15;
                michal = _closure1_slot17;
                entity = {};
                oscard = _closure1_slot16;
                report = {};
                kiloes = report;
                backup = romeon;
                romeon = copyDataProperties(kiloes, backup);
                foxtra = 'list';
                romeon = 'accessibilityRole';
                report[romeon] = foxtra;
                romeon = _closure1_slot1;
                foxtra = _closure1_slot2;
                offset = 19;
                offset = foxtra[offset];
                romeon = romeon.bind(tangon)(offset);
                offset = option.scrollView;
                romeon = romeon.bind(tangon)(offset);
                offset = 'ref';
                report[offset] = romeon;
                romeon = 16;
                offset = 'scrollEventThrottle';
                report[offset] = romeon;
                offset = option.state;
                romeon = offset.initialContentOffset;
                offset = 'contentOffset';
                report[offset] = romeon;
                romeon = option.handleScroll;
                offset = 'onScroll';
                report[offset] = romeon;
                romeon = option.handleLayout;
                offset = 'onLayout';
                report[offset] = romeon;
                romeon = option.handleMomentumScrollEnd;
                offset = 'onMomentumScrollEnd';
                report[offset] = romeon;
                romeon = option.handleScrollBeginDrag;
                offset = 'onScrollBeginDrag';
                report[offset] = romeon;
                offset = 'removeClippedSubviews';
                report[offset] = yankee;
                offset = option.renderItems;
                yankee = offset.bind(option)();
                offset = 'children';
                report[offset] = yankee;
                oscard = oscard.bind(tangon)(verify, report);
                report = new Array(2);
                report[0] = oscard;
                oscard = null;
                verify = oscard != golfie;
                if(!verify) { _fun00134_ip = 583; continue _fun00133 }
 578:
                oscard = golfie.bind(tangon)(option);
 583:
                report[1] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[17] = oscard;
        oscard = {};
        golfie = 'getDerivedStateFromProps';
        oscard['key'] = golfie;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00135: for(var _fun00136_ip = 0; ; ) switch(_fun00136_ip) {
 0:
                report = argFoo;
                zuuluu = argBar;
                yankee = zuuluu.fastListComputer;
                michal = yankee.updateProps;
                entity = {};
                tangon = report.headerSize;
                entity['headerSize'] = tangon;
                tangon = report.footerSize;
                entity['footerSize'] = tangon;
                tangon = report.sectionSize;
                entity['sectionSize'] = tangon;
                tangon = report.itemSize;
                entity['itemSize'] = tangon;
                tangon = report.sectionFooterSize;
                entity['sectionFooterSize'] = tangon;
                tangon = report.sections;
                entity['sections'] = tangon;
                tangon = report.insetStart;
                entity['insetStart'] = tangon;
                tangon = report.insetEnd;
                entity['insetEnd'] = tangon;
                golfie = report.stickyHeaderFooter;
                oscard = null;
                tangon = oscard != golfie;
                if(!tangon) { _fun00136_ip = 126; continue _fun00135 }
 123:
                tangon = golfie;
 126:
                entity['stickyHeaderFooter'] = tangon;
                tangon = report.getRecyclerKey;
                entity['getRecyclerKey'] = tangon;
                tangon = report.persistantKeys;
                entity['persistantKeys'] = tangon;
                golfie = report.disableRecyclingOnFullCompute;
                tangon = oscard != golfie;
                if(!tangon) { _fun00136_ip = 169; continue _fun00135 }
 166:
                tangon = golfie;
 169:
                entity['disableRecyclingOnFullCompute'] = tangon;
                entity = michal.bind(yankee)(entity);
                entity = zuuluu.batchSize;
                tangon = 0;
                if(!(tangon !== entity)) { _fun00136_ip = 269; continue _fun00135 }
 191:
                entity = yankee.isDirty;
                michal = entity.bind(yankee)();
                entity = null;
                if(!michal) { _fun00136_ip = 267; continue _fun00135 }
 206:
                michal = {};
                kiloes = michal;
                backup = zuuluu;
                golfie = copyDataProperties(kiloes, backup);
                offset = yankee.compute;
                verify = zuuluu.blockStart;
                option = zuuluu.blockEnd;
                golfie = zuuluu.items;
                if(!(oscard == golfie)) { _fun00136_ip = 250; continue _fun00135 }
 246:
                golfie = new Array(0);
 250:
                backup = offset.bind(yankee)(verify, option, golfie);
                kiloes = michal;
                golfie = copyDataProperties(kiloes, backup);
                entity = michal;
 267:
                _fun00136_ip = 346; continue _fun00135;
 269:
                michal = {};
                kiloes = michal;
                backup = zuuluu;
                zuuluu = copyDataProperties(kiloes, backup);
                golfie = report.insetStart;
                option = oscard != golfie;
                zuuluu = 0;
                if(!option) { _fun00136_ip = 299; continue _fun00135 }
 296:
                zuuluu = golfie;
 299:
                report = report.insetEnd;
                oscard = oscard != report;
                tangon = 0;
                if(!oscard) { _fun00136_ip = 317; continue _fun00135 }
 314:
                tangon = report;
 317:
                tangon = zuuluu + tangon;
                zuuluu = 'size';
                michal[zuuluu] = tangon;
                tangon = new Array(0);
                zuuluu = 'items';
                michal[zuuluu] = tangon;
                entity = michal;
 346:
                return entity;
            }
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 15;
    michal = offset[michal];
    option = option.bind(entity)(michal);
    michal = option.createAnimatedComponent;
    michal = michal.bind(option)(golfie);
    option = 20;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'lib/native/FastList.tsx';
    option = verify.bind(offset)(option);
    zuuluu['default'] = golfie;
    oscard = function(argFoo, argBar, argBaz) { // Original name: getItemSizeOverrideKey
        entity = global;
        entity = entity.HermesInternal;
        oscard = entity.concat;
        romeon = '';
        yankee = argFoo;
        zuuluu = ':';
        verify = argBar;
        golfie = argBaz;
        offset = zuuluu;
        option = zuuluu;
        entity = romeon[oscard](yankee, offset, verify, option, golfie, oscard);
        return entity;
    };
    zuuluu['getItemSizeOverrideKey'] = oscard;
    zuuluu['FastListItemTypes'] = report;
    zuuluu['FastListComputer'] = tangon;
    zuuluu['AnimatedFastList'] = michal;
    return entity;
})();