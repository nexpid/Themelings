// app/modules/phone/native/CountryCallingCodeSelect.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot11;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot11;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    romeo = 1;
    golf = oscar[romeo];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.getI18NCountryName;
    var _closure1_slot6 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 6;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_12;
    verify['paddingHorizontal'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_16;
    verify['paddingVertical'] = foxtrot;
    verify['flex'] = romeo;
    tango['container'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['paddingBottom'] = offset;
    tango['searchFieldContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/phone/native/CountryCallingCodeSelect.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: CountryCallingCodeSelect
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            yankee = mike.onCountrySelected;
            var _closure2_slot0 = yankee;
            backup = mike.onClose;
            var _closure2_slot1 = backup;
            mike = _closure1_slot9;
            tango = undefined;
            kilo = mike.bind(tango)();
            report = _closure1_slot4;
            mike = report.useState;
            foxtrot = '';
            oscar = mike.bind(report)(foxtrot);
            zulu = _closure1_slot3;
            mike = 2;
            zulu = zulu.bind(tango)(oscar, mike);
            golf = 0;
            options = zulu[golf];
            var _closure2_slot2 = options;
            mike = 1;
            output = zulu[mike];
            oscar = report.useMemo;
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.flatMap;
                entity = function(argFoo, argBar) {
                    mike = argFoo;
                    report = mike.alpha2;
                    var _closure4_slot0 = report;
                    zulu = mike.phoneCountryCodes;
                    mike = mike.name;
                    var _closure4_slot1 = mike;
                    mike = argBar;
                    var _closure4_slot2 = mike;
                    tango = _closure1_slot6;
                    mike = undefined;
                    mike = tango.bind(mike)(report);
                    var _closure4_slot3 = mike;
                    mike = zulu.map;
                    entity = function(argFoo) {
                        tango = argFoo;
                        entity = {};
                        mike = _closure4_slot3;
                        entity['translatedName'] = mike;
                        golf = _closure4_slot2;
                        mike = global;
                        mike = mike.HermesInternal;
                        oscar = mike.concat;
                        report = '';
                        mike = '-';
                        mike = oscar.bind(report)(golf, mike, tango);
                        entity['key'] = mike;
                        mike = {};
                        mike['code'] = tango;
                        tango = _closure4_slot0;
                        mike['alpha2'] = tango;
                        zulu = _closure4_slot1;
                        mike['name'] = zulu;
                        entity['country'] = mike;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = new Array(0);
            mike = oscar.bind(report)(zulu, mike);
            var _closure2_slot3 = mike;
            oscar = _closure1_slot1;
            result = _closure1_slot2;
            zulu = 8;
            zulu = result[zulu];
            zulu = oscar.bind(tango)(zulu);
            verify = zulu.bind(tango)();
            oscar = report.useMemo;
            zulu = new Array(2);
            zulu[0] = mike;
            zulu[1] = options;
            mike = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = new Array(0);
                    zulu = _closure1_slot10;
                    entity = _closure2_slot3;
                    options = undefined;
                    golf = zulu.bind(options)(entity);
                    zulu = golf.bind(options)();
                    entity = zulu.done;
                    oscar = 9;
                    report = '';
                    tango = 0;
                    if(entity) { _fun00010_ip = 294; continue _fun00009 }
 49:
                    yankee = zulu.value;
                    entity = _closure2_slot2;
                    entity = entity.length;
                    entity = tango === entity;
                    if(entity) { _fun00010_ip = 146; continue _fun00009 }
 70:
                    romeo = yankee.country;
                    backup = romeo.code;
                    foxtrot = backup.replace;
                    romeo = /\+|\s/g;
                    backup = foxtrot.bind(backup)(romeo, report);
                    foxtrot = backup.startsWith;
                    sizing = _closure2_slot2;
                    kilo = sizing.replace;
                    romeo = /\+|\s/g;
                    romeo = kilo.bind(sizing)(romeo, report);
                    entity = foxtrot.bind(backup)(romeo);
 146:
                    if(entity) { _fun00010_ip = 207; continue _fun00009 }
 149:
                    foxtrot = _closure1_slot1;
                    romeo = _closure1_slot2;
                    romeo = romeo[oscar];
                    backup = foxtrot.bind(options)(romeo);
                    foxtrot = _closure2_slot2;
                    romeo = foxtrot.toLowerCase;
                    foxtrot = romeo.bind(foxtrot)();
                    romeo = yankee.country;
                    kilo = romeo.name;
                    romeo = kilo.toLowerCase;
                    romeo = romeo.bind(kilo)();
                    entity = backup.bind(options)(foxtrot, romeo);
 207:
                    if(entity) { _fun00010_ip = 263; continue _fun00009 }
 210:
                    foxtrot = _closure1_slot1;
                    romeo = _closure1_slot2;
                    romeo = romeo[oscar];
                    backup = foxtrot.bind(options)(romeo);
                    foxtrot = _closure2_slot2;
                    romeo = foxtrot.toLowerCase;
                    foxtrot = romeo.bind(foxtrot)();
                    kilo = yankee.translatedName;
                    romeo = kilo.toLowerCase;
                    romeo = romeo.bind(kilo)();
                    entity = backup.bind(options)(foxtrot, romeo);
 263:
                    if(!entity) { _fun00010_ip = 276; continue _fun00009 }
 266:
                    entity = mike.push;
                    entity = entity.bind(mike)(yankee);
 276:
                    yankee = golf.bind(options)();
                    entity = yankee.done;
                    zulu = yankee;
                    if(!entity) { _fun00010_ip = 49; continue _fun00009 }
 294:
                    entity = {};
                    entity['rows'] = mike;
                    zulu = mike.length;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity['sections'] = mike;
                    return entity;
                }
            };
            mike = oscar.bind(report)(mike, zulu);
            oscar = mike.rows;
            var _closure2_slot4 = oscar;
            romeo = mike.sections;
            zulu = report.useCallback;
            mike = new Array(3);
            mike[0] = backup;
            mike[1] = yankee;
            mike[2] = oscar;
            entity = function(argFoo, argBar) {
                yankee = argBar;
                offset = _closure2_slot4;
                entity = offset[yankee];
                oscar = entity.translatedName;
                options = entity.country;
                var _closure3_slot0 = options;
                tango = _closure1_slot7;
                golf = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 10;
                entity = verify[entity];
                zulu = undefined;
                entity = golf.bind(zulu)(entity);
                mike = entity.TableRow;
                entity = {};
                romeo = 0;
                romeo = romeo === yankee;
                entity['start'] = romeo;
                romeo = offset.length;
                offset = 1;
                offset = romeo - offset;
                offset = yankee === offset;
                entity['end'] = offset;
                entity['label'] = oscar;
                oscar = 11;
                oscar = verify[oscar];
                oscar = golf.bind(zulu)(oscar);
                golf = oscar.Text;
                oscar = {};
                verify = 'text-md/semibold';
                oscar['variant'] = verify;
                options = options.code;
                oscar['children'] = options;
                oscar = tango.bind(zulu)(golf, oscar);
                entity['trailing'] = oscar;
                report = function() { // Original name: onPress
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        tango = _closure2_slot0;
                        zulu = _closure3_slot0;
                        entity = undefined;
                        zulu = tango.bind(entity)(zulu);
                        tango = _closure2_slot1;
                        zulu = null;
                        if(!(zulu != tango)) { _fun00012_ip = 39; continue _fun00011 }
 31:
                        mike = _closure2_slot1;
                        mike = mike.bind(entity)();
 39:
                        return entity;
                    }
                };
                entity['onPress'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            yankee = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot8;
            mike = _closure1_slot5;
            entity = {};
            report = kilo.container;
            entity['style'] = report;
            backup = _closure1_slot7;
            report = {};
            kilo = kilo.searchFieldContainer;
            report['style'] = kilo;
            sizing = _closure1_slot0;
            kilo = 12;
            kilo = result[kilo];
            kilo = sizing.bind(tango)(kilo);
            sizing = kilo.SearchField;
            kilo = {};
            result = 'md';
            kilo['size'] = result;
            kilo['onChange'] = output;
            kilo = backup.bind(tango)(sizing, kilo);
            report['children'] = kilo;
            backup = backup.bind(tango)(mike, report);
            report = new Array(2);
            report[0] = backup;
            if(!(foxtrot !== options)) { _fun00008_ip = 325; continue _fun00007 }
 316:
            oscar = oscar.length;
            if(!(golf !== oscar)) { _fun00008_ip = 394; continue _fun00007 }
 325:
            options = _closure1_slot7;
            golf = _closure1_slot1;
            foxtrot = _closure1_slot2;
            oscar = 16;
            oscar = foxtrot[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar['sections'] = romeo;
            oscar['renderItem'] = yankee;
            oscar['itemSize'] = verify;
            verify = 'windowSize';
            oscar['estimatedListSize'] = verify;
            verify = 'always';
            oscar['keyboardShouldPersistTaps'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            _fun00008_ip = 499; continue _fun00007;
 394:
            verify = _closure1_slot7;
            romeo = _closure1_slot1;
            backup = _closure1_slot2;
            golf = 13;
            golf = backup[golf];
            options = romeo.bind(tango)(golf);
            golf = {};
            yankee = 14;
            yankee = backup[yankee];
            yankee = romeo.bind(tango)(yankee);
            golf['source'] = yankee;
            foxtrot = _closure1_slot0;
            offset = 15;
            yankee = backup[offset];
            yankee = foxtrot.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            offset = backup[offset];
            offset = foxtrot.bind(tango)(offset);
            offset = offset.t;
            offset = offset.wEHnxc;
            offset = yankee.bind(romeo)(offset);
            golf['text'] = offset;
            oscar = verify.bind(tango)(options, golf);
 499:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();