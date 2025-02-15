// app/modules/main_tabs_v2/native/settings/screens/appearance/SettingsAppearancePickerUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ThemeTypes;
    var _closure1_slot4 = tango;
    tango = function() { // Original name: getMaxColors
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = _closure1_slot10;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 2;
            entity = tango[entity];
            verify = undefined;
            zulu = zulu.bind(verify)(entity);
            entity = zulu.getMobileThemesPresets;
            entity = entity.bind(zulu)();
            options = mike.bind(verify)(entity);
            zulu = options.bind(verify)();
            mike = zulu.done;
            golf = global;
            oscar = 1;
            report = null;
            tango = zulu;
            zulu = 0;
            entity = 0;
            if(mike) { _fun00008_ip = 151; continue _fun00007 }
 70:
            mike = tango.value;
            offset = mike.colors;
            if(!(report != offset)) { _fun00008_ip = 113; continue _fun00007 }
 84:
            yankee = golf.Math;
            offset = yankee.max;
            mike = mike.colors;
            mike = mike.length;
            offset = offset.bind(yankee)(mike, zulu);
            _fun00008_ip = 130; continue _fun00007;
 113:
            yankee = golf.Math;
            mike = yankee.max;
            offset = mike.bind(yankee)(oscar, zulu);
 130:
            yankee = options.bind(verify)();
            mike = yankee.done;
            zulu = offset;
            tango = yankee;
            entity = zulu;
            if(!mike) { _fun00008_ip = 70; continue _fun00007 }
 151:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: mix
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = 'light';
            entity = argFoo;
            entity = mike !== entity;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            yankee = 3;
            mike = mike[yankee];
            offset = undefined;
            golf = zulu.bind(offset)(mike);
            mike = golf.prototype;
            zulu = Object.create(mike, {constructor: {value: golf}});
            if(entity) { _fun00010_ip = 76; continue _fun00009 }
 48:
            tango = 255;
            romeo = argCorge;
            sizing = zulu;
            kilo = tango;
            backup = tango;
            foxtrot = tango;
            mike = new sizing[golf](kilo, backup, foxtrot, romeo, yankee);
            tango = mike instanceof Object ? mike : zulu;
            _fun00010_ip = 96; continue _fun00009;
 76:
            romeo = argBaz;
            sizing = zulu;
            kilo = 0;
            backup = 0;
            foxtrot = 0;
            mike = new sizing[golf](kilo, backup, foxtrot, romeo, yankee);
            tango = mike instanceof Object ? mike : zulu;
 96:
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 4;
            zulu = zulu[mike];
            golf = oscar.bind(offset)(zulu);
            oscar = golf.hexToRgb;
            zulu = argBar;
            zulu = oscar.bind(golf)(zulu);
            verify = zulu.r;
            options = zulu.g;
            golf = zulu.b;
            oscar = 0.2;
            if(!entity) { _fun00010_ip = 169; continue _fun00009 }
 159:
            oscar = 0.3;
 169:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            mike = entity[mike];
            zulu = zulu.bind(offset)(mike);
            mike = zulu.mixColors;
            report = _closure1_slot1;
            entity = entity[yankee];
            entity = report.bind(offset)(entity);
            report = entity.prototype;
            report = Object.create(report, {constructor: {value: entity}});
            sizing = report;
            kilo = verify;
            backup = options;
            foxtrot = golf;
            romeo = oscar;
            entity = new sizing[entity](kilo, backup, foxtrot, romeo, yankee);
            entity = entity instanceof Object ? entity : report;
            mike = mike.bind(zulu)(tango, entity);
            entity = mike.toHexString;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    tango = function(argFoo) { // Original name: padWithLast
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscar = argFoo;
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00012_ip = 15; continue _fun00011 }
 12:
            report = 5;
 15:
            entity = new Array(0);
            tango = 0;
            golf = tango < report;
            zulu = 1;
            mike = 100;
            if(!golf) { _fun00012_ip = 105; continue _fun00011 }
 34:
            golf = oscar.length;
            if(!(!(tango < golf))) { _fun00012_ip = 84; continue _fun00011 }
 43:
            golf = oscar.length;
            golf = golf - zulu;
            verify = oscar[golf];
            options = entity.push;
            golf = {};
            verify = verify.hex;
            golf['hex'] = verify;
            golf['stop'] = mike;
            golf = options.bind(entity)(golf);
            _fun00012_ip = 98; continue _fun00011;
 84:
            options = entity.push;
            golf = oscar[tango];
            golf = options.bind(entity)(golf);
 98:
            tango = tango + 1;
            if(tango < report) { _fun00012_ip = 34; continue _fun00011 }
 105:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: convertBackgroundGradientToAnimatedTheme
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            entity = argBar;
            var _closure2_slot1 = entity;
            entity = argBaz;
            var _closure2_slot2 = entity;
            entity = {};
            mike = tango.theme;
            entity['theme'] = mike;
            mike = tango.getName;
            mike = mike.bind(tango)();
            entity['name'] = mike;
            oscar = tango.midpointPercentage;
            mike = null;
            golf = mike != oscar;
            report = 50;
            if(!golf) { _fun00014_ip = 71; continue _fun00013 }
 68:
            report = oscar;
 71:
            entity['midpointPercentage'] = report;
            report = tango.angle;
            oscar = mike != report;
            mike = 0;
            if(!oscar) { _fun00014_ip = 94; continue _fun00013 }
 91:
            mike = report;
 94:
            entity['angle'] = mike;
            report = _closure1_slot7;
            oscar = tango.colors;
            tango = oscar.map;
            zulu = function(argFoo) {
                mike = argFoo;
                entity = {};
                options = _closure1_slot6;
                report = _closure2_slot0;
                golf = report.theme;
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                tango = 5;
                tango = oscar[tango];
                oscar = undefined;
                tango = report.bind(oscar)(tango);
                report = tango.ColorDetails;
                tango = mike.token;
                tango = report[tango];
                yankee = tango.hex;
                offset = _closure2_slot1;
                verify = _closure2_slot2;
                foxtrot = undefined;
                romeo = golf;
                zulu = foxtrot[options](romeo, yankee, offset, verify, options);
                entity['hex'] = zulu;
                mike = mike.stop;
                entity['stop'] = mike;
                return entity;
            };
            tango = tango.bind(oscar)(zulu);
            mike = _closure1_slot5;
            zulu = undefined;
            mike = mike.bind(zulu)();
            mike = report.bind(zulu)(tango, mike);
            entity['colors'] = mike;
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    tango = function(argFoo) { // Original name: convertStandardThemeToAnimatedTheme
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tango = argFoo;
            report = tango.theme;
            entity = _closure1_slot4;
            zulu = entity.LIGHT;
            entity = 'light';
            golf = entity;
            if(!(zulu !== report)) { _fun00016_ip = 92; continue _fun00015 }
 33:
            zulu = _closure1_slot4;
            zulu = zulu.DARK;
            oscar = 'darker';
            golf = oscar;
            if(!(zulu !== report)) { _fun00016_ip = 92; continue _fun00015 }
 54:
            zulu = _closure1_slot4;
            zulu = zulu.DARKER;
            golf = oscar;
            if(!(zulu !== report)) { _fun00016_ip = 92; continue _fun00015 }
 71:
            zulu = _closure1_slot4;
            zulu = zulu.MIDNIGHT;
            golf = 'midnight';
            if(!(zulu !== report)) { _fun00016_ip = 92; continue _fun00015 }
 89:
            golf = entity;
 92:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 6;
            zulu = verify[entity];
            report = undefined;
            zulu = options.bind(report)(zulu);
            oscar = zulu.internal;
            zulu = oscar.resolveSemanticColor;
            entity = verify[entity];
            entity = options.bind(report)(entity);
            entity = entity.colors;
            entity = entity.BG_BASE_PRIMARY;
            golf = zulu.bind(oscar)(golf, entity);
            entity = {};
            zulu = tango.theme;
            entity['theme'] = zulu;
            zulu = tango.getName;
            zulu = zulu.bind(tango)();
            entity['name'] = zulu;
            zulu = 50;
            entity['midpointPercentage'] = zulu;
            zulu = 0;
            entity['angle'] = zulu;
            tango = _closure1_slot7;
            oscar = {};
            oscar['hex'] = golf;
            zulu = 20;
            oscar['stop'] = zulu;
            zulu = new Array(5);
            zulu[0] = oscar;
            oscar = {};
            oscar['hex'] = golf;
            options = 40;
            oscar['stop'] = options;
            zulu[1] = oscar;
            oscar = {};
            oscar['hex'] = golf;
            options = 60;
            oscar['stop'] = options;
            zulu[2] = oscar;
            oscar = {};
            oscar['hex'] = golf;
            options = 80;
            oscar['stop'] = options;
            zulu[3] = oscar;
            oscar = {};
            oscar['hex'] = golf;
            golf = 100;
            oscar['stop'] = golf;
            zulu[4] = oscar;
            mike = _closure1_slot5;
            mike = mike.bind(report)();
            mike = tango.bind(report)(zulu, mike);
            entity['colors'] = mike;
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/screens/appearance/SettingsAppearancePickerUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            verify = arguments[1];
            options = arguments[2];
            golf = undefined;
            if(!(verify === golf)) { _fun00018_ip = 22; continue _fun00017 }
 12:
            verify = 0.7;
 22:
            if(!(options === golf)) { _fun00018_ip = 36; continue _fun00017 }
 26:
            options = 0.8;
 36:
            entity = new Array(0);
            zulu = _closure1_slot10;
            mike = argFoo;
            report = zulu.bind(golf)(mike);
            zulu = report.bind(golf)();
            mike = zulu.done;
            tango = null;
            if(mike) { _fun00018_ip = 140; continue _fun00017 }
 69:
            yankee = zulu.value;
            mike = yankee.colors;
            if(!(tango != mike)) { _fun00018_ip = 106; continue _fun00017 }
 83:
            offset = entity.push;
            mike = _closure1_slot8;
            mike = mike.bind(golf)(yankee, verify, options);
            mike = offset.bind(entity)(mike);
            _fun00018_ip = 125; continue _fun00017;
 106:
            offset = entity.push;
            mike = _closure1_slot9;
            mike = mike.bind(golf)(yankee);
            mike = offset.bind(entity)(mike);
 125:
            offset = report.bind(golf)();
            mike = offset.done;
            zulu = offset;
            if(!mike) { _fun00018_ip = 69; continue _fun00017 }
 140:
            return entity;
        }
    };
    zulu['convertThemesToAnimatedThemes'] = tango;
    mike = function() {
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 7;
            zulu = report[zulu];
            options = undefined;
            zulu = tango.bind(options)(zulu);
            tango = zulu.bind(options)();
            zulu = _closure1_slot4;
            zulu = zulu.LIGHT;
            if(!(tango !== zulu)) { _fun00020_ip = 57; continue _fun00019 }
 45:
            zulu = _closure1_slot4;
            oscar = zulu.DARKER;
            _fun00020_ip = 67; continue _fun00019;
 57:
            zulu = _closure1_slot4;
            oscar = zulu.LIGHT;
 67:
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 8;
            zulu = verify[zulu];
            report = tango.bind(options)(zulu);
            tango = report.useToken;
            golf = _closure1_slot1;
            zulu = 6;
            zulu = verify[zulu];
            zulu = golf.bind(options)(zulu);
            zulu = zulu.colors;
            zulu = zulu.BG_BASE_PRIMARY;
            report = tango.bind(report)(zulu, oscar);
            var _closure2_slot0 = report;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                entity = {'theme': 'system', 'name': null, 'midpointPercentage': 50, 'angle': 0};
                golf = _closure1_slot0;
                options = _closure1_slot2;
                zulu = 9;
                tango = options[zulu];
                report = undefined;
                tango = golf.bind(report)(tango);
                oscar = tango.intl;
                tango = oscar.string;
                zulu = options[zulu];
                zulu = golf.bind(report)(zulu);
                zulu = zulu.t;
                zulu = zulu.zlvNOj;
                zulu = tango.bind(oscar)(zulu);
                entity['name'] = zulu;
                tango = _closure1_slot7;
                oscar = {};
                zulu = _closure2_slot0;
                oscar['hex'] = zulu;
                zulu = 20;
                oscar['stop'] = zulu;
                zulu = new Array(5);
                zulu[0] = oscar;
                oscar = {};
                options = _closure2_slot0;
                oscar['hex'] = options;
                options = 40;
                oscar['stop'] = options;
                zulu[1] = oscar;
                oscar = {};
                options = _closure2_slot0;
                oscar['hex'] = options;
                options = 60;
                oscar['stop'] = options;
                zulu[2] = oscar;
                oscar = {};
                options = _closure2_slot0;
                oscar['hex'] = options;
                options = 80;
                oscar['stop'] = options;
                zulu[3] = oscar;
                oscar = {};
                golf = _closure2_slot0;
                oscar['hex'] = golf;
                golf = 100;
                oscar['stop'] = golf;
                zulu[4] = oscar;
                mike = _closure1_slot5;
                mike = mike.bind(report)();
                mike = tango.bind(report)(zulu, mike);
                entity['colors'] = mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useLaunchWelcomeSystemTheme'] = mike;
    return entity;
})();