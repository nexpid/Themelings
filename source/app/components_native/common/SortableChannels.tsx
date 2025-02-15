// app/components_native/common/SortableChannels.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun125889: for(var _fun125889_ip = 0; ; ) switch(_fun125889_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun125889_ip = 46; continue _fun125889 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun125889_ip = 55; continue _fun125889 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun125889_ip = 345; continue _fun125889 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun125889_ip = 323; continue _fun125889 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun125889_ip = 283; continue _fun125889 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun125889_ip = 270; continue _fun125889 }
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
            if(!golf) { _fun125889_ip = 163; continue _fun125889 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun125889_ip = 179; continue _fun125889 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun125889_ip = 249; continue _fun125889 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun125889_ip = 249; continue _fun125889 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun125889_ip = 234; continue _fun125889 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun125889_ip = 247; continue _fun125889 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun125889_ip = 265; continue _fun125889;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun125889_ip = 283; continue _fun125889;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun125889_ip = 323; continue _fun125889 }
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
            if(!tango) { _fun125889_ip = 330; continue _fun125889 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun125890: for(var _fun125890_ip = 0; ; ) switch(_fun125890_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun125890_ip = 56; continue _fun125890 }
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
                    _fun125890_ip = 67; continue _fun125890;
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
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun125891: for(var _fun125891_ip = 0; ; ) switch(_fun125891_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun125891_ip = 23; continue _fun125891 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun125891_ip = 33; continue _fun125891 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun125891_ip = 70; continue _fun125891 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun125891_ip = 55; continue _fun125891 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun125892: for(var _fun125892_ip = 0; ; ) switch(_fun125892_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot21;
            entity = entity.bind(zulu)();
            if(entity) { _fun125892_ip = 51; continue _fun125892 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun125892_ip = 92; continue _fun125892;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun125892_ip = 71; continue _fun125892 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun125893: for(var _fun125893_ip = 0; ; ) switch(_fun125893_ip) {
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
            _fun125893_ip = 76; continue _fun125893;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    verify = 5;
    golf = oscar[verify];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot5 = tango;
    golf = 6;
    golf = oscar[golf];
    offset = report.bind(entity)(golf);
    golf = offset.View;
    var _closure1_slot6 = golf;
    golf = offset.Animated;
    var _closure1_slot7 = golf;
    golf = offset.PanResponder;
    var _closure1_slot8 = golf;
    golf = offset.StyleSheet;
    offset = offset.SectionList;
    var _closure1_slot9 = offset;
    offset = 7;
    offset = oscar[offset];
    offset = options.bind(entity)(offset);
    var _closure1_slot10 = offset;
    offset = 8;
    yankee = oscar[offset];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.jsxs;
    var _closure1_slot11 = yankee;
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot12 = offset;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.createElement;
    var _closure1_slot13 = verify;
    verify = golf.hairlineWidth;
    golf = 45;
    golf = golf + verify;
    var _closure1_slot14 = golf;
    golf = 9;
    golf = oscar[golf];
    verify = options.bind(entity)(golf);
    options = verify.memoize;
    golf = function(argFoo) {
        tango = argFoo;
        zulu = tango.map;
        mike = function(argFoo) {
            mike = argFoo;
            zulu = {};
            entity = 'section';
            zulu['type'] = entity;
            entity = mike.category;
            zulu['data'] = entity;
            entity = new Array(1);
            entity[0] = zulu;
            tango = mike.data;
            zulu = tango.map;
            mike = function(argFoo) {
                entity = {};
                mike = 'row';
                entity['type'] = mike;
                mike = argFoo;
                entity['data'] = mike;
                return entity;
            };
            oscar = zulu.bind(tango)(mike);
            report = 1;
            golf = entity;
            mike = arraySpread(golf, oscar, report);
            return entity;
        };
        tango = zulu.bind(tango)(mike);
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            entity = new Array(0);
            report = argFoo;
            tango = 0;
            oscar = entity;
            tango = arraySpread(oscar, report, tango);
            report = argBar;
            oscar = entity;
            mike = arraySpread(oscar, report, tango);
            return entity;
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    golf = options.bind(verify)(golf);
    var _closure1_slot15 = golf;
    options = tango.Component;
    golf = function(argFoo) {
        tango = function(argFoo) { // Original name: Row
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot0;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot20;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = function(argFoo) {
                _fun125902: for(var _fun125902_ip = 0; ; ) switch(_fun125902_ip) {
 0:
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    mike = _closure3_slot0;
                    zulu = mike.props;
                    tango = zulu.onRowActive;
                    var _closure4_slot1 = tango;
                    zulu = zulu.rowData;
                    var _closure4_slot2 = zulu;
                    zulu = mike._view;
                    mike = null;
                    if(!(mike != zulu)) { _fun125902_ip = 71; continue _fun125902 }
 53:
                    mike = zulu.measure;
                    entity = function(argFoo, argBar, argBaz, argCorge, argGrault, argFred) {
                        _fun125903: for(var _fun125903_ip = 0; ; ) switch(_fun125903_ip) {
 0:
                            zulu = _closure4_slot1;
                            mike = null;
                            if(!(mike != zulu)) { _fun125903_ip = 72; continue _fun125903 }
 13:
                            zulu = _closure4_slot1;
                            mike = {};
                            tango = {};
                            report = argCorge;
                            tango['frameHeight'] = report;
                            report = argFred;
                            tango['pageY'] = report;
                            mike['layout'] = tango;
                            tango = _closure4_slot2;
                            mike['rowData'] = tango;
                            entity = _closure4_slot0;
                            entity = entity.nativeEvent;
                            mike['touch'] = entity;
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
 72:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleLongPress'] = zulu;
            zulu = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                mike['_view'] = entity;
                entity = undefined;
                return entity;
            };
            entity['setViewRef'] = zulu;
            mike = function(argFoo) {
                _fun125905: for(var _fun125905_ip = 0; ; ) switch(_fun125905_ip) {
 0:
                    entity = _closure3_slot0;
                    zulu = entity._view;
                    entity = null;
                    if(!(entity != zulu)) { _fun125905_ip = 33; continue _fun125905 }
 19:
                    mike = zulu.measure;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
 33:
                    entity = undefined;
                    return entity;
                }
            };
            entity['measure'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot4;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot1;
        report = {};
        oscar = 'render';
        report['key'] = oscar;
        entity = function() { // Original name: value
            _fun125906: for(var _fun125906_ip = 0; ; ) switch(_fun125906_ip) {
 0:
                report = this;
                entity = report.props;
                mike = entity.rowData;
                yankee = entity.active;
                zulu = entity.renderItem;
                kilo = entity.list;
                golf = entity.activeDivider;
                offset = entity.isAfter;
                romeo = entity.style;
                backup = entity.sortingEnabled;
                entity = kilo.state;
                entity = entity.active;
                verify = null;
                oscar = verify != entity;
                tango = -1;
                if(!oscar) { _fun125906_ip = 94; continue _fun125906 }
 83:
                entity = entity.rowData;
                tango = entity.index;
 94:
                entity = mike.index;
                options = tango !== entity;
                foxtrot = _closure1_slot5;
                oscar = foxtrot.cloneElement;
                mike = mike.data;
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = null;
                if(!backup) { _fun125906_ip = 189; continue _fun125906 }
 133:
                backup = {};
                sizing = {};
                output = report.handleLongPress;
                sizing['onLongPress'] = output;
                output = kilo.cancel;
                sizing['onPressOut'] = output;
                backup['sortHandlers'] = sizing;
                sizing = report.handleLongPress;
                backup['onLongPress'] = sizing;
                kilo = kilo.cancel;
                backup['onPressOut'] = kilo;
                mike = backup;
 189:
                oscar = oscar.bind(foxtrot)(zulu, mike);
                zulu = _closure1_slot11;
                mike = _closure1_slot6;
                entity = {};
                foxtrot = null;
                if(!yankee) { _fun125906_ip = 229; continue _fun125906 }
 210:
                yankee = {};
                backup = 0.2;
                yankee['opacity'] = backup;
                foxtrot = yankee;
 229:
                yankee = new Array(2);
                yankee[0] = foxtrot;
                yankee[1] = romeo;
                entity['style'] = yankee;
                report = report.setViewRef;
                entity['ref'] = report;
                report = false;
                entity['collapsable'] = report;
                yankee = null;
                if(offset) { _fun125906_ip = 284; continue _fun125906 }
 267:
                yankee = null;
                if(!options) { _fun125906_ip = 284; continue _fun125906 }
 272:
                report = verify != golf;
                yankee = null;
                if(!report) { _fun125906_ip = 284; continue _fun125906 }
 281:
                yankee = golf;
 284:
                report = new Array(3);
                report[0] = yankee;
                report[1] = oscar;
                oscar = null;
                if(!offset) { _fun125906_ip = 318; continue _fun125906 }
 301:
                oscar = null;
                if(!options) { _fun125906_ip = 318; continue _fun125906 }
 306:
                options = verify != golf;
                oscar = null;
                if(!options) { _fun125906_ip = 318; continue _fun125906 }
 315:
                oscar = golf;
 318:
                report[2] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = golf.bind(entity)(options);
    var _closure1_slot16 = golf;
    options = tango.Component;
    golf = function(argFoo) {
        tango = function(argFoo) { // Original name: SortRow
            _fun125908: for(var _fun125908_ip = 0; ; ) switch(_fun125908_ip) {
 0:
                golf = argFoo;
                report = this;
                mike = _closure1_slot0;
                tango = _closure2_slot0;
                zulu = undefined;
                mike = mike.bind(zulu)(report, tango);
                mike = _closure1_slot20;
                entity = new Array(1);
                entity[0] = golf;
                entity = mike.bind(zulu)(report, tango, entity);
                mike = golf.list;
                mike = mike.state;
                mike = mike.active;
                oscar = null;
                if(!(oscar != mike)) { _fun125908_ip = 200; continue _fun125908 }
 73:
                mike = golf.list;
                mike = mike.state;
                mike = mike.active;
                report = mike.layout;
                mike = golf.list;
                tango = mike.wrapperLayout;
                mike = {};
                zulu = {'position': 'absolute', 'left': 0, 'right': 0, 'opacity': null, 'height': null, 'overflow': 'hidden', 'backgroundColor': 'transparent'};
                golf = golf.activeOpacity;
                options = oscar != golf;
                oscar = 0.8;
                if(!options) { _fun125908_ip = 150; continue _fun125908 }
 147:
                oscar = golf;
 150:
                zulu['opacity'] = oscar;
                oscar = report.frameHeight;
                zulu['height'] = oscar;
                report = report.pageY;
                tango = tango.pageY;
                tango = report - tango;
                zulu['marginTop'] = tango;
                mike['style'] = zulu;
                entity['state'] = mike;
                return entity;
 200:
                entity = global;
                entity = entity.Error;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                romeo = mike;
                entity = new romeo[entity](yankee);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot4;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot1;
        report = {};
        oscar = 'render';
        report['key'] = oscar;
        entity = function() { // Original name: value
            report = this;
            mike = report.props;
            options = mike.sortRowStyle;
            oscar = mike.list;
            entity = mike.rowData;
            golf = mike.renderItem;
            tango = _closure1_slot12;
            mike = _closure1_slot7;
            zulu = mike.View;
            mike = {};
            report = report.state;
            verify = report.style;
            report = new Array(3);
            report[0] = verify;
            report[1] = options;
            oscar = oscar.state;
            options = oscar.pan;
            oscar = options.getLayout;
            oscar = oscar.bind(options)();
            report[2] = oscar;
            mike['style'] = report;
            oscar = entity.data;
            entity = undefined;
            report = true;
            report = golf.bind(entity)(oscar, report);
            mike['children'] = report;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = golf.bind(entity)(options);
    var _closure1_slot17 = golf;
    tango = tango.Component;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: SortableChannels
            options = argFoo;
            golf = this;
            entity = _closure1_slot0;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(golf, report);
            zulu = _closure1_slot20;
            entity = new Array(1);
            entity[0] = options;
            entity = zulu.bind(tango)(golf, report, entity);
            var _closure3_slot0 = entity;
            zulu = function() {
                _fun125912: for(var _fun125912_ip = 0; ; ) switch(_fun125912_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike.moved;
                    if(mike) { _fun125912_ip = 89; continue _fun125912 }
 16:
                    mike = _closure3_slot0;
                    zulu = mike.state;
                    tango = zulu.active;
                    mike = mike.props;
                    zulu = mike.onMoveCancel;
                    mike = null;
                    if(!(mike != tango)) { _fun125912_ip = 60; continue _fun125912 }
 50:
                    if(!(mike != zulu)) { _fun125912_ip = 60; continue _fun125912 }
 54:
                    mike = undefined;
                    mike = zulu.bind(mike)();
 60:
                    zulu = _closure3_slot0;
                    mike = zulu.setState;
                    entity = {'active': null, 'hoveringIndex': 4294967295, 'activeIndex': 4294967295};
                    entity = mike.bind(zulu)(entity);
 89:
                    entity = undefined;
                    return entity;
                }
            };
            entity['cancel'] = zulu;
            zulu = function() {
                _fun125913: for(var _fun125913_ip = 0; ; ) switch(_fun125913_ip) {
 0:
                    mike = _closure3_slot0;
                    zulu = mike._view;
                    mike = null;
                    if(!(mike != zulu)) { _fun125913_ip = 49; continue _fun125913 }
 19:
                    entity = _closure3_slot0;
                    zulu = entity._view;
                    mike = zulu.measure;
                    entity = function(argFoo, argBar, argBaz, argCorge, argGrault, argFred) {
                        mike = _closure3_slot0;
                        entity = {};
                        zulu = argCorge;
                        entity['frameHeight'] = zulu;
                        zulu = argFred;
                        entity['pageY'] = zulu;
                        mike['wrapperLayout'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 49:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleWrapperLayout'] = zulu;
            zulu = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                mike['listLayout'] = entity;
                entity = undefined;
                return entity;
            };
            entity['handleListLayout'] = zulu;
            zulu = function(argFoo) {
                _fun125916: for(var _fun125916_ip = 0; ; ) switch(_fun125916_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure3_slot0;
                    entity = tango.props;
                    mike = entity.onScroll;
                    entity = zulu.nativeEvent;
                    entity = entity.contentOffset;
                    entity = entity.y;
                    tango['scrollValue'] = entity;
                    entity = null;
                    if(!(entity != mike)) { _fun125916_ip = 56; continue _fun125916 }
 49:
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 56:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleScroll'] = zulu;
            zulu = function(argFoo, argBar) {
                mike = _closure3_slot0;
                entity = argBar;
                mike['scrollContainerHeight'] = entity;
                entity = undefined;
                return entity;
            };
            entity['handleContentSizeChange'] = zulu;
            zulu = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                mike['_list'] = entity;
                entity = undefined;
                return entity;
            };
            entity['setListRef'] = zulu;
            zulu = function() {
                _fun125919: for(var _fun125919_ip = 0; ; ) switch(_fun125919_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike.state;
                    verify = mike.active;
                    tango = null;
                    if(!(tango != verify)) { _fun125919_ip = 380; continue _fun125919 }
 27:
                    mike = _closure3_slot0;
                    mike = mike.moveY;
                    if(!(tango == mike)) { _fun125919_ip = 71; continue _fun125919 }
 41:
                    mike = global;
                    report = mike.requestAnimationFrame;
                    mike = _closure3_slot0;
                    zulu = mike.scrollAnimation;
                    mike = undefined;
                    mike = report.bind(mike)(zulu);
                    _fun125919_ip = 380; continue _fun125919;
 71:
                    golf = _closure3_slot0;
                    mike = golf.wrapperLayout;
                    oscar = mike.pageY;
                    mike = global;
                    options = mike.Math;
                    report = options.max;
                    zulu = golf.moveY;
                    zulu = zulu - oscar;
                    oscar = 0;
                    options = report.bind(options)(zulu, oscar);
                    zulu = golf.listLayout;
                    zulu = zulu.height;
                    report = 100;
                    zulu = zulu - report;
                    yankee = golf.scrollContainerHeight;
                    offset = golf.listLayout;
                    offset = offset.height;
                    offset = yankee - offset;
                    verify = verify.layout;
                    verify = verify.frameHeight;
                    verify = offset + verify;
                    golf = golf.scrollValue;
                    if(!(options < report)) { _fun125919_ip = 187; continue _fun125919 }
 183:
                    if(!(!(golf > oscar))) { _fun125919_ip = 258; continue _fun125919 }
 187:
                    offset = options > zulu;
                    zulu = null;
                    if(!offset) { _fun125919_ip = 289; continue _fun125919 }
 196:
                    offset = golf < verify;
                    zulu = null;
                    if(!offset) { _fun125919_ip = 289; continue _fun125919 }
 205:
                    offset = _closure3_slot0;
                    offset = offset.listLayout;
                    offset = offset.height;
                    offset = offset - options;
                    romeo = offset / report;
                    yankee = 1500;
                    offset = 1;
                    offset = offset - romeo;
                    offset = yankee * offset;
                    zulu = golf + offset;
                    if(!(zulu > verify)) { _fun125919_ip = 289; continue _fun125919 }
 253:
                    zulu = verify;
                    _fun125919_ip = 289; continue _fun125919;
 258:
                    verify = options / report;
                    options = 1500;
                    report = 1;
                    report = report - verify;
                    report = options * report;
                    zulu = golf - report;
                    if(!(zulu < oscar)) { _fun125919_ip = 289; continue _fun125919 }
 287:
                    zulu = 0;
 289:
                    if(!(tango != zulu)) { _fun125919_ip = 330; continue _fun125919 }
 293:
                    report = _closure3_slot0;
                    report['scrollValue'] = zulu;
                    tango = report.scrollTo;
                    zulu = {};
                    golf = report.scrollValue;
                    zulu['y'] = golf;
                    zulu['x'] = oscar;
                    zulu = tango.bind(report)(zulu);
 330:
                    zulu = _closure3_slot0;
                    zulu = zulu.moved;
                    if(!zulu) { _fun125919_ip = 357; continue _fun125919 }
 343:
                    tango = _closure3_slot0;
                    zulu = tango.checkTargetElement;
                    zulu = zulu.bind(tango)();
 357:
                    zulu = mike.requestAnimationFrame;
                    entity = _closure3_slot0;
                    mike = entity.scrollAnimation;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 380:
                    entity = undefined;
                    return entity;
                }
            };
            entity['scrollAnimation'] = zulu;
            zulu = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                mike['_view'] = entity;
                entity = undefined;
                return entity;
            };
            entity['setWrapperRef'] = zulu;
            zulu = function() {
                _fun125921: for(var _fun125921_ip = 0; ; ) switch(_fun125921_ip) {
 0:
                    entity = _closure3_slot0;
                    mike = entity.state;
                    oscar = mike.hoveringIndex;
                    mike = entity.props;
                    zulu = mike.onHoverChange;
                    kilo = entity.scrollValue;
                    tango = entity.moveY;
                    mike = entity.wrapperLayout;
                    mike = mike.pageY;
                    backup = tango - mike;
                    entity = entity.props;
                    mike = entity.order;
                    entity = kilo + backup;
                    golf = 0;
                    entity = entity + golf;
                    tango = null;
                    yankee = 0;
                    offset = 0;
                    verify = false;
                    options = 0;
                    if(!(options < entity)) { _fun125921_ip = 151; continue _fun125921 }
 92:
                    sizing = mike[offset];
                    entity = _closure3_slot0;
                    entity = entity.layoutMap;
                    entity = entity[sizing];
                    sizing = tango == entity;
                    options = offset;
                    verify = true;
                    if(sizing) { _fun125921_ip = 151; continue _fun125921 }
 122:
                    entity = entity.height;
                    yankee = yankee + entity;
                    offset = offset + 1;
                    entity = kilo + backup;
                    entity = entity + golf;
                    options = offset;
                    verify = false;
                    if(yankee < entity) { _fun125921_ip = 92; continue _fun125921 }
 151:
                    entity = options;
                    if(verify) { _fun125921_ip = 160; continue _fun125921 }
 157:
                    entity = options - 1;
 160:
                    oscar = entity !== oscar;
                    if(!oscar) { _fun125921_ip = 171; continue _fun125921 }
 167:
                    oscar = entity >= golf;
 171:
                    if(!oscar) { _fun125921_ip = 211; continue _fun125921 }
 174:
                    golf = _closure3_slot0;
                    oscar = golf.setState;
                    report = {};
                    report['hoveringIndex'] = entity;
                    report = oscar.bind(golf)(report);
                    if(!(tango != zulu)) { _fun125921_ip = 211; continue _fun125921 }
 200:
                    mike = mike[entity];
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 211:
                    entity = undefined;
                    return entity;
                }
            };
            entity['checkTargetElement'] = zulu;
            zulu = function(argFoo) {
                _fun125922: for(var _fun125922_ip = 0; ; ) switch(_fun125922_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure3_slot0;
                    tango = mike.props;
                    mike = tango.onRowActive;
                    tango = tango.disableSorting;
                    if(tango) { _fun125922_ip = 169; continue _fun125922 }
 33:
                    oscar = _closure3_slot0;
                    entity = oscar.state;
                    report = entity.pan;
                    tango = report.setValue;
                    entity = {'x': 0, 'y': 0};
                    entity = tango.bind(report)(entity);
                    entity = zulu.layout;
                    tango = entity.pageY;
                    entity = zulu.layout;
                    report = entity.frameHeight;
                    entity = 2;
                    entity = report / entity;
                    entity = tango + entity;
                    oscar['moveY'] = entity;
                    entity = zulu.rowData;
                    entity = entity.index;
                    report = oscar.setState;
                    tango = {};
                    tango['active'] = zulu;
                    tango['activeIndex'] = entity;
                    tango['hoveringIndex'] = entity;
                    entity = oscar.scrollAnimation;
                    entity = report.bind(oscar)(tango, entity);
                    entity = null;
                    if(!(entity != mike)) { _fun125922_ip = 169; continue _fun125922 }
 162:
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 169:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleRowActive'] = zulu;
            zulu = function(argFoo) {
                _fun125923: for(var _fun125923_ip = 0; ; ) switch(_fun125923_ip) {
 0:
                    entity = _closure3_slot0;
                    mike = entity.state;
                    zulu = mike.active;
                    entity = entity.props;
                    golf = entity.renderActiveDivider;
                    entity = null;
                    if(!(entity != zulu)) { _fun125923_ip = 137; continue _fun125923 }
 35:
                    mike = zulu.layout;
                    oscar = mike.frameHeight;
                    if(!(entity == golf)) { _fun125923_ip = 84; continue _fun125923 }
 51:
                    verify = _closure1_slot12;
                    options = _closure1_slot6;
                    report = {};
                    mike = {};
                    mike['height'] = oscar;
                    report['style'] = mike;
                    mike = undefined;
                    mike = verify.bind(mike)(options, report);
                    _fun125923_ip = 135; continue _fun125923;
 84:
                    options = entity != zulu;
                    report = null;
                    if(!options) { _fun125923_ip = 123; continue _fun125923 }
 93:
                    tango = _closure3_slot0;
                    tango = tango.props;
                    tango = tango.order;
                    zulu = zulu.rowData;
                    zulu = zulu.index;
                    report = tango[zulu];
 123:
                    tango = undefined;
                    zulu = argFoo;
                    mike = golf.bind(tango)(oscar, zulu, report);
 135:
                    return mike;
 137:
                    return entity;
                }
            };
            entity['renderActiveDivider'] = zulu;
            zulu = function(argFoo, argBar) {
                _fun125924: for(var _fun125924_ip = 0; ; ) switch(_fun125924_ip) {
 0:
                    golf = argFoo;
                    romeo = argBar;
                    mike = _closure3_slot0;
                    zulu = mike.state;
                    offset = zulu.active;
                    report = zulu.hoveringIndex;
                    entity = zulu.activeIndex;
                    verify = zulu.panResponder;
                    mike = mike.props;
                    tango = mike.order;
                    zulu = tango.indexOf;
                    mike = golf.section;
                    mike = mike.category;
                    mike = mike.id;
                    zulu = zulu.bind(tango)(mike);
                    if(romeo) { _fun125924_ip = 90; continue _fun125924 }
 84:
                    tango = _closure1_slot16;
                    _fun125924_ip = 94; continue _fun125924;
 90:
                    tango = _closure1_slot17;
 94:
                    yankee = !romeo;
                    if(!yankee) { _fun125924_ip = 135; continue _fun125924 }
 100:
                    foxtrot = null;
                    kilo = foxtrot == offset;
                    options = undefined;
                    if(kilo) { _fun125924_ip = 131; continue _fun125924 }
 111:
                    offset = offset.rowData;
                    foxtrot = foxtrot == offset;
                    options = undefined;
                    if(foxtrot) { _fun125924_ip = 131; continue _fun125924 }
 126:
                    options = offset.index;
 131:
                    yankee = options === zulu;
 135:
                    options = _closure3_slot0;
                    options = options.props;
                    options = options.order;
                    options = options[report];
                    backup = null;
                    foxtrot = backup != options;
                    offset = '';
                    if(!foxtrot) { _fun125924_ip = 170; continue _fun125924 }
 167:
                    offset = options;
 170:
                    options = {};
                    options['data'] = golf;
                    options['index'] = zulu;
                    zulu = false;
                    options['isRow'] = zulu;
                    foxtrot = _closure3_slot0;
                    kilo = foxtrot.getItemLayoutProps;
                    zulu = options.index;
                    zulu = kilo.bind(foxtrot)(zulu);
                    zulu = _closure1_slot13;
                    mike = {};
                    sizing = foxtrot.props;
                    output = mike;
                    kilo = copyDataProperties(output, sizing);
                    foxtrot = foxtrot.props;
                    kilo = foxtrot.renderSectionHeader;
                    foxtrot = kilo.bind;
                    kilo = foxtrot.bind(kilo)(backup, golf);
                    foxtrot = 'renderItem';
                    mike[foxtrot] = kilo;
                    foxtrot = golf.section;
                    foxtrot = foxtrot.key;
                    backup = null;
                    if(!(offset === foxtrot)) { _fun125924_ip = 287; continue _fun125924 }
 272:
                    kilo = _closure3_slot0;
                    foxtrot = kilo.renderActiveDivider;
                    backup = foxtrot.bind(kilo)(offset);
 287:
                    foxtrot = 'activeDivider';
                    mike[foxtrot] = backup;
                    foxtrot = golf.section;
                    backup = foxtrot.key;
                    foxtrot = 'key';
                    mike[foxtrot] = backup;
                    if(romeo) { _fun125924_ip = 323; continue _fun125924 }
 320:
                    romeo = yankee;
 323:
                    yankee = 'active';
                    mike[yankee] = romeo;
                    oscar = _closure3_slot0;
                    yankee = 'list';
                    mike[yankee] = oscar;
                    yankee = oscar.props;
                    romeo = yankee.sortingEnabled;
                    yankee = 'sortingEnabled';
                    mike[yankee] = romeo;
                    golf = golf.section;
                    golf = golf.key;
                    offset = offset === golf;
                    golf = 'hovering';
                    mike[golf] = offset;
                    golf = 'panResponder';
                    mike[golf] = verify;
                    golf = 'rowData';
                    mike[golf] = options;
                    golf = oscar.handleRowActive;
                    oscar = 'onRowActive';
                    mike[oscar] = golf;
                    report = report > entity;
                    entity = 'isAfter';
                    mike[entity] = report;
                    entity = undefined;
                    entity = zulu.bind(entity)(tango, mike);
                    return entity;
                }
            };
            entity['renderSectionHeader'] = zulu;
            zulu = function(argFoo, argBar) {
                _fun125925: for(var _fun125925_ip = 0; ; ) switch(_fun125925_ip) {
 0:
                    golf = argFoo;
                    romeo = argBar;
                    entity = _closure3_slot0;
                    mike = entity.state;
                    zulu = mike.active;
                    report = mike.hoveringIndex;
                    entity = mike.activeIndex;
                    verify = mike.panResponder;
                    if(romeo) { _fun125925_ip = 54; continue _fun125925 }
 48:
                    tango = _closure1_slot16;
                    _fun125925_ip = 58; continue _fun125925;
 54:
                    tango = _closure1_slot17;
 58:
                    yankee = !romeo;
                    if(!yankee) { _fun125925_ip = 109; continue _fun125925 }
 64:
                    offset = null;
                    backup = offset == zulu;
                    options = undefined;
                    if(backup) { _fun125925_ip = 95; continue _fun125925 }
 75:
                    zulu = zulu.rowData;
                    offset = offset == zulu;
                    options = undefined;
                    if(offset) { _fun125925_ip = 95; continue _fun125925 }
 90:
                    options = zulu.index;
 95:
                    zulu = golf.item;
                    zulu = zulu.index;
                    yankee = options === zulu;
 109:
                    zulu = _closure3_slot0;
                    zulu = zulu.props;
                    zulu = zulu.order;
                    zulu = zulu[report];
                    backup = null;
                    options = backup != zulu;
                    offset = '';
                    if(!options) { _fun125925_ip = 144; continue _fun125925 }
 141:
                    offset = zulu;
 144:
                    options = {};
                    options['data'] = golf;
                    zulu = golf.item;
                    zulu = zulu.index;
                    options['index'] = zulu;
                    zulu = true;
                    options['isRow'] = zulu;
                    foxtrot = _closure3_slot0;
                    kilo = foxtrot.getItemLayoutProps;
                    zulu = options.index;
                    zulu = kilo.bind(foxtrot)(zulu);
                    zulu = _closure1_slot13;
                    mike = {};
                    sizing = foxtrot.props;
                    output = mike;
                    foxtrot = copyDataProperties(output, sizing);
                    foxtrot = golf.item;
                    foxtrot = foxtrot.key;
                    backup = null;
                    if(!(offset === foxtrot)) { _fun125925_ip = 240; continue _fun125925 }
 225:
                    kilo = _closure3_slot0;
                    foxtrot = kilo.renderActiveDivider;
                    backup = foxtrot.bind(kilo)(offset);
 240:
                    foxtrot = 'activeDivider';
                    mike[foxtrot] = backup;
                    foxtrot = golf.item;
                    backup = foxtrot.key;
                    foxtrot = 'key';
                    mike[foxtrot] = backup;
                    if(romeo) { _fun125925_ip = 276; continue _fun125925 }
 273:
                    romeo = yankee;
 276:
                    yankee = 'active';
                    mike[yankee] = romeo;
                    oscar = _closure3_slot0;
                    yankee = 'list';
                    mike[yankee] = oscar;
                    yankee = oscar.props;
                    romeo = yankee.sortingEnabled;
                    yankee = 'sortingEnabled';
                    mike[yankee] = romeo;
                    golf = golf.item;
                    golf = golf.key;
                    offset = offset === golf;
                    golf = 'hovering';
                    mike[golf] = offset;
                    golf = 'panResponder';
                    mike[golf] = verify;
                    golf = 'rowData';
                    mike[golf] = options;
                    golf = oscar.handleRowActive;
                    oscar = 'onRowActive';
                    mike[oscar] = golf;
                    report = report > entity;
                    entity = 'isAfter';
                    mike[entity] = report;
                    entity = undefined;
                    entity = zulu.bind(entity)(tango, mike);
                    return entity;
                }
            };
            entity['renderItem'] = zulu;
            zulu = function(argFoo, argBar) {
                zulu = _closure3_slot0;
                mike = zulu.getItemLayoutProps;
                entity = argBar;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['getItemLayout'] = zulu;
            zulu = function(argFoo) {
                _fun125927: for(var _fun125927_ip = 0; ; ) switch(_fun125927_ip) {
 0:
                    tango = argFoo;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    entity = entity.sortingEnabled;
                    sizing = 20;
                    if(!entity) { _fun125927_ip = 29; continue _fun125927 }
 27:
                    sizing = 0;
 29:
                    zulu = _closure1_slot18;
                    report = _closure1_slot15;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    entity = entity.sections;
                    backup = undefined;
                    entity = report.bind(backup)(entity);
                    foxtrot = zulu.bind(backup)(entity);
                    entity = foxtrot.bind(backup)();
                    golf = entity.done;
                    report = undefined;
                    zulu = undefined;
                    oscar = 0;
                    if(golf) { _fun125927_ip = 261; continue _fun125927 }
 88:
                    result = entity.value;
                    entity = result.type;
                    romeo = 'section';
                    if(!(romeo !== entity)) { _fun125927_ip = 112; continue _fun125927 }
 106:
                    echo = _closure1_slot14;
                    _fun125927_ip = 139; continue _fun125927;
 112:
                    entity = result.data;
                    options = entity.id;
                    entity = 62;
                    golf = 'null';
                    if(!(golf === options)) { _fun125927_ip = 136; continue _fun125927 }
 133:
                    entity = sizing;
 136:
                    echo = entity;
 139:
                    yankee = 62;
                    offset = 'null';
                    verify = echo;
                    options = result;
                    golf = 0;
                    entity = 0;
                    report = verify;
                    zulu = options;
                    oscar = 0;
                    if(!(oscar !== tango)) { _fun125927_ip = 261; continue _fun125927 }
 168:
                    output = golf + verify;
                    entity = entity + 1;
                    result = foxtrot.bind(backup)();
                    echo = result.done;
                    report = verify;
                    zulu = options;
                    oscar = output;
                    if(echo) { _fun125927_ip = 261; continue _fun125927 }
 196:
                    result = result.value;
                    echo = result.type;
                    if(!(romeo !== echo)) { _fun125927_ip = 216; continue _fun125927 }
 210:
                    echo = _closure1_slot14;
                    _fun125927_ip = 239; continue _fun125927;
 216:
                    update = result.data;
                    source = update.id;
                    update = yankee;
                    if(!(offset === source)) { _fun125927_ip = 236; continue _fun125927 }
 233:
                    update = sizing;
 236:
                    echo = update;
 239:
                    verify = echo;
                    options = result;
                    golf = output;
                    report = verify;
                    zulu = options;
                    oscar = golf;
                    if(entity !== tango) { _fun125927_ip = 168; continue _fun125927 }
 261:
                    entity = {};
                    entity['length'] = report;
                    entity['offset'] = oscar;
                    entity['index'] = tango;
                    tango = null;
                    if(!(tango != zulu)) { _fun125927_ip = 379; continue _fun125927 }
 282:
                    golf = zulu.data;
                    golf = golf.id;
                    if(!(tango == golf)) { _fun125927_ip = 332; continue _fun125927 }
 296:
                    golf = zulu.data;
                    golf = golf.channel;
                    golf = tango != golf;
                    tango = null;
                    if(!golf) { _fun125927_ip = 330; continue _fun125927 }
 315:
                    golf = zulu.data;
                    golf = golf.channel;
                    tango = golf.id;
 330:
                    _fun125927_ip = 342; continue _fun125927;
 332:
                    zulu = zulu.data;
                    tango = zulu.id;
 342:
                    golf = 'string';
                    zulu = typeof tango;
                    if(!(golf === zulu)) { _fun125927_ip = 377; continue _fun125927 }
 353:
                    mike = _closure3_slot0;
                    zulu = mike.layoutMap;
                    mike = {};
                    mike['y'] = oscar;
                    mike['height'] = report;
                    zulu[tango] = mike;
 377:
                    return entity;
 379:
                    return entity;
                }
            };
            entity['getItemLayoutProps'] = zulu;
            zulu = function(argFoo) {
                _fun125928: for(var _fun125928_ip = 0; ; ) switch(_fun125928_ip) {
 0:
                    options = 0;
                    tango = copyRestArgs(options);
                    mike = _closure3_slot0;
                    entity = mike.getScrollResponder;
                    zulu = entity.bind(mike)();
                    entity = null;
                    if(!(entity != zulu)) { _fun125928_ip = 64; continue _fun125928 }
 29:
                    mike = zulu.scrollTo;
                    entity = new Array(0);
                    options = entity;
                    golf = tango;
                    oscar = 0;
                    tango = arraySpread(options, golf, oscar);
                    options = mike;
                    golf = entity;
                    oscar = zulu;
                    entity = apply(options, golf, oscar);
 64:
                    entity = undefined;
                    return entity;
                }
            };
            entity['scrollTo'] = zulu;
            zulu = function() {
                _fun125929: for(var _fun125929_ip = 0; ; ) switch(_fun125929_ip) {
 0:
                    entity = _closure3_slot0;
                    tango = entity._list;
                    entity = null;
                    zulu = entity == tango;
                    mike = undefined;
                    if(zulu) { _fun125929_ip = 49; continue _fun125929 }
 24:
                    zulu = tango.getScrollResponder;
                    zulu = entity == zulu;
                    mike = undefined;
                    if(zulu) { _fun125929_ip = 49; continue _fun125929 }
 39:
                    zulu = tango.getScrollResponder;
                    mike = zulu.bind(tango)();
 49:
                    zulu = entity != mike;
                    entity = null;
                    if(!zulu) { _fun125929_ip = 61; continue _fun125929 }
 58:
                    entity = mike;
 61:
                    return entity;
                }
            };
            entity['getScrollResponder'] = zulu;
            golf = {'x': 0, 'y': 0};
            report = 0;
            zulu = _closure1_slot7;
            zulu = zulu.ValueXY;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            foxtrot = tango;
            romeo = golf;
            zulu = new foxtrot[zulu](romeo, yankee);
            zulu = zulu instanceof Object ? zulu : tango;
            tango = entity.createPanResponder;
            tango = tango.bind(entity)(options, golf, zulu);
            golf = zulu.addListener;
            oscar = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                entity = entity.y;
                mike['panY'] = entity;
                return entity;
            };
            oscar = golf.bind(zulu)(oscar);
            entity['listener'] = oscar;
            oscar = false;
            entity['moved'] = oscar;
            entity['moveY'] = report;
            entity['dy'] = report;
            oscar = 'down';
            entity['direction'] = oscar;
            entity['scrollValue'] = report;
            report = _closure1_slot10;
            mike = report.getHeight;
            report = mike.bind(report)();
            mike = 1.2;
            mike = mike * report;
            entity['scrollContainerHeight'] = mike;
            mike = {'active': null, 'activeIndex': 4294967295, 'hoveringIndex': 4294967295};
            mike['panResponder'] = tango;
            mike['pan'] = zulu;
            entity['state'] = mike;
            mike = {};
            entity['layoutMap'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'componentWillUnmount';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = this;
            mike = entity.state;
            zulu = mike.pan;
            mike = zulu.removeListener;
            entity = entity.listener;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'createPanResponder';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            zulu = argBaz;
            entity = this;
            var _closure3_slot0 = entity;
            entity = argFoo;
            var _closure3_slot1 = entity;
            entity = argBar;
            var _closure3_slot2 = entity;
            oscar = _closure1_slot7;
            report = oscar.event;
            mike = {};
            golf = zulu.x;
            mike['dx'] = golf;
            zulu = zulu.y;
            mike['dy'] = zulu;
            zulu = [null];
            zulu[1] = mike;
            mike = {};
            golf = false;
            mike['useNativeDriver'] = golf;
            mike = report.bind(oscar)(zulu, mike);
            var _closure3_slot3 = mike;
            zulu = _closure1_slot8;
            mike = zulu.create;
            entity = {};
            report = function() { // Original name: onStartShouldSetPanResponder
                entity = true;
                return entity;
            };
            entity['onStartShouldSetPanResponder'] = report;
            report = function(argFoo, argBar) { // Original name: onMoveShouldSetPanResponderCapture
                _fun125934: for(var _fun125934_ip = 0; ; ) switch(_fun125934_ip) {
 0:
                    entity = argBar;
                    zulu = global;
                    report = zulu.Math;
                    tango = report.abs;
                    mike = entity.vy;
                    mike = tango.bind(report)(mike);
                    tango = zulu.Math;
                    zulu = tango.abs;
                    entity = entity.vx;
                    entity = zulu.bind(tango)(entity);
                    entity = mike > entity;
                    if(!entity) { _fun125934_ip = 82; continue _fun125934 }
 58:
                    mike = _closure3_slot0;
                    mike = mike.state;
                    zulu = mike.active;
                    mike = null;
                    entity = mike != zulu;
 82:
                    return entity;
                }
            };
            entity['onMoveShouldSetPanResponderCapture'] = report;
            report = function(argFoo, argBar) { // Original name: onPanResponderMove
                _fun125935: for(var _fun125935_ip = 0; ; ) switch(_fun125935_ip) {
 0:
                    tango = argBar;
                    mike = _closure3_slot0;
                    mike = mike.state;
                    mike = mike.active;
                    zulu = null;
                    if(!(zulu != mike)) { _fun125935_ip = 151; continue _fun125935 }
 30:
                    zulu = 0;
                    tango['dx'] = zulu;
                    mike = mike.layout;
                    zulu = _closure3_slot0;
                    report = mike.pageY;
                    oscar = mike.frameHeight;
                    mike = 2;
                    mike = oscar / mike;
                    report = report + mike;
                    mike = tango.dy;
                    mike = report + mike;
                    zulu['moveY'] = mike;
                    report = tango.dy;
                    mike = zulu.dy;
                    report = report >= mike;
                    mike = 'up';
                    if(!report) { _fun125935_ip = 114; continue _fun125935 }
 110:
                    mike = 'down';
 114:
                    zulu['direction'] = mike;
                    zulu = _closure3_slot0;
                    mike = tango.dy;
                    zulu['dy'] = mike;
                    zulu = _closure3_slot3;
                    mike = undefined;
                    entity = argFoo;
                    entity = zulu.bind(mike)(entity, tango);
 151:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPanResponderMove'] = report;
            report = function() { // Original name: onPanResponderGrant
                _fun125936: for(var _fun125936_ip = 0; ; ) switch(_fun125936_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.state;
                    report = entity.active;
                    zulu = entity.pan;
                    entity = _closure3_slot1;
                    tango = entity.onMoveStart;
                    entity = null;
                    if(!(entity != report)) { _fun125936_ip = 106; continue _fun125936 }
 40:
                    oscar = _closure3_slot0;
                    report = true;
                    oscar['moved'] = report;
                    report = 0;
                    oscar['dy'] = report;
                    report = 'down';
                    oscar['direction'] = report;
                    if(!(entity != tango)) { _fun125936_ip = 80; continue _fun125936 }
 74:
                    entity = undefined;
                    entity = tango.bind(entity)();
 80:
                    entity = zulu.setOffset;
                    mike = _closure3_slot2;
                    entity = entity.bind(zulu)(mike);
                    entity = zulu.setValue;
                    entity = entity.bind(zulu)(mike);
 106:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPanResponderGrant'] = report;
            report = function() { // Original name: onPanResponderTerminate
                _fun125937: for(var _fun125937_ip = 0; ; ) switch(_fun125937_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike.props;
                    tango = mike.onHoverChange;
                    mike = null;
                    if(!(mike != tango)) { _fun125937_ip = 35; continue _fun125937 }
 24:
                    zulu = undefined;
                    mike = '-1';
                    mike = tango.bind(zulu)(mike);
 35:
                    zulu = _closure3_slot0;
                    mike = zulu.setState;
                    entity = {'active': null, 'hoveringIndex': 4294967295, 'activeIndex': 4294967295};
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPanResponderTerminate'] = report;
            tango = function() { // Original name: onPanResponderRelease
                _fun125938: for(var _fun125938_ip = 0; ; ) switch(_fun125938_ip) {
 0:
                    report = _closure3_slot0;
                    zulu = report.state;
                    mike = zulu.active;
                    zulu = zulu.hoveringIndex;
                    tango = report.props;
                    options = tango.onRowMoved;
                    tango = false;
                    report['moved'] = tango;
                    tango = _closure3_slot1;
                    tango = tango.onMoveEnd;
                    golf = null;
                    if(!(golf != tango)) { _fun125938_ip = 73; continue _fun125938 }
 59:
                    report = _closure3_slot1;
                    tango = report.onMoveEnd;
                    tango = tango.bind(report)();
 73:
                    if(!(golf != mike)) { _fun125938_ip = 342; continue _fun125938 }
 80:
                    tango = mike.layout;
                    report = tango.frameHeight;
                    tango = mike.rowData;
                    offset = tango.index;
                    oscar = -1;
                    verify = zulu;
                    if(!(oscar === verify)) { _fun125938_ip = 119; continue _fun125938 }
 116:
                    verify = offset;
 119:
                    if(!(verify !== offset)) { _fun125938_ip = 311; continue _fun125938 }
 126:
                    tango = {};
                    mike = mike.rowData;
                    tango['row'] = mike;
                    mike = 1;
                    offset = offset - mike;
                    tango['from'] = offset;
                    mike = verify - mike;
                    tango['to'] = mike;
                    if(!(golf != options)) { _fun125938_ip = 169; continue _fun125938 }
 162:
                    mike = undefined;
                    mike = options.bind(mike)(tango);
 169:
                    mike = _closure3_slot0;
                    options = mike.setState;
                    tango = {'active': null, 'hoveringIndex': 4294967295, 'activeIndex': 4294967295};
                    tango = options.bind(mike)(tango);
                    tango = global;
                    verify = tango.Math;
                    options = verify.max;
                    offset = mike.scrollContainerHeight;
                    tango = mike.listLayout;
                    tango = tango.height;
                    tango = offset - tango;
                    report = tango + report;
                    tango = 0;
                    verify = options.bind(verify)(tango, report);
                    mike = mike.scrollValue;
                    if(!(mike > verify)) { _fun125938_ip = 275; continue _fun125938 }
 254:
                    options = _closure3_slot0;
                    report = options.scrollTo;
                    mike = {};
                    mike['y'] = verify;
                    mike = report.bind(options)(mike);
 275:
                    mike = _closure3_slot0;
                    report = mike.state;
                    report['active'] = golf;
                    report = mike.state;
                    report['hoveringIndex'] = oscar;
                    mike['moveY'] = tango;
                    mike = undefined;
                    return mike;
 311:
                    report = _closure3_slot0;
                    tango = report.setState;
                    mike = {'active': null, 'hoveringIndex': 4294967295, 'activeIndex': 4294967295};
                    mike = tango.bind(report)(mike);
                    return mike;
 342:
                    mike = 0;
                    if(!(zulu >= mike)) { _fun125938_ip = 376; continue _fun125938 }
 348:
                    report = _closure3_slot0;
                    tango = report.setState;
                    zulu = {};
                    oscar = -1;
                    zulu['hoveringIndex'] = oscar;
                    zulu = tango.bind(report)(zulu);
 376:
                    entity = _closure3_slot0;
                    entity['moveY'] = mike;
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPanResponderRelease'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'renderActive';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun125939: for(var _fun125939_ip = 0; ; ) switch(_fun125939_ip) {
 0:
                report = this;
                entity = report.state;
                entity = entity.active;
                mike = null;
                if(!(mike == entity)) { _fun125939_ip = 24; continue _fun125939 }
 20:
                mike = undefined;
                return mike;
 24:
                entity = entity.rowData;
                tango = entity.data;
                entity = entity.isRow;
                if(entity) { _fun125939_ip = 60; continue _fun125939 }
 44:
                mike = report.renderSectionHeader;
                entity = true;
                entity = mike.bind(report)(tango, entity);
                _fun125939_ip = 74; continue _fun125939;
 60:
                zulu = report.renderItem;
                mike = true;
                entity = zulu.bind(report)(tango, mike);
 74:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'render';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun125940: for(var _fun125940_ip = 0; ; ) switch(_fun125940_ip) {
 0:
                golf = this;
                entity = golf.state;
                verify = entity.active;
                entity = entity.panResponder;
                mike = golf.props;
                offset = mike.scrollEnabled;
                tango = _closure1_slot11;
                zulu = _closure1_slot6;
                mike = {};
                oscar = {};
                options = 1;
                oscar['flex'] = options;
                mike['style'] = oscar;
                oscar = golf.handleWrapperLayout;
                mike['onLayout'] = oscar;
                oscar = golf.setWrapperRef;
                mike['ref'] = oscar;
                options = _closure1_slot12;
                oscar = _closure1_slot9;
                report = {};
                yankee = true;
                report['enableEmptySections'] = yankee;
                romeo = golf.props;
                foxtrot = report;
                yankee = copyDataProperties(foxtrot, romeo);
                romeo = entity.panHandlers;
                foxtrot = report;
                entity = copyDataProperties(foxtrot, romeo);
                yankee = golf.setListRef;
                entity = 'ref';
                report[entity] = yankee;
                yankee = golf.handleScroll;
                entity = 'onScroll';
                report[entity] = yankee;
                yankee = golf.handleContentSizeChange;
                entity = 'onContentSizeChange';
                report[entity] = yankee;
                yankee = golf.handleListLayout;
                entity = 'onLayout';
                report[entity] = yankee;
                entity = null;
                verify = entity == verify;
                if(!verify) { _fun125940_ip = 197; continue _fun125940 }
 191:
                entity = false;
                verify = entity !== offset;
 197:
                entity = 'scrollEnabled';
                report[entity] = verify;
                verify = golf.renderItem;
                entity = 'renderItem';
                report[entity] = verify;
                verify = golf.renderSectionHeader;
                entity = 'renderSectionHeader';
                report[entity] = verify;
                verify = false;
                entity = 'stickySectionHeadersEnabled';
                report[entity] = verify;
                verify = 20;
                entity = 'initialNumToRender';
                report[entity] = verify;
                verify = function(argFoo) { // Original name: keyExtractor
                    entity = argFoo;
                    entity = entity.key;
                    return entity;
                };
                entity = 'keyExtractor';
                report[entity] = verify;
                verify = golf.getItemLayout;
                entity = 'getItemLayout';
                report[entity] = verify;
                entity = undefined;
                oscar = options.bind(entity)(oscar, report);
                report = new Array(2);
                report[0] = oscar;
                oscar = golf.renderActive;
                oscar = oscar.bind(golf)();
                report[1] = oscar;
                mike['children'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'components_native/common/SortableChannels.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();