// app/modules/collectibles/createUseCollectiblesShopStyles.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = function(argFoo, argBar) { // Original name: getMidpointColor
        zulu = argFoo;
        mike = argBar;
        entity = zulu.toRgb;
        tango = entity.bind(zulu)();
        entity = mike.toRgb;
        entity = entity.bind(mike)();
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        options = 2;
        report = golf[options];
        zulu = undefined;
        verify = oscar.bind(zulu)(report);
        oscar = verify.getValueInColorGradientByPercentage;
        offset = tango.r;
        report = new Array(3);
        report[0] = offset;
        offset = tango.g;
        report[1] = offset;
        tango = tango.b;
        report[2] = tango;
        offset = entity.r;
        tango = new Array(3);
        tango[0] = offset;
        offset = entity.g;
        tango[1] = offset;
        entity = entity.b;
        tango[2] = entity;
        entity = 50;
        report = oscar.bind(verify)(report, tango, entity);
        tango = _closure1_slot3;
        entity = 3;
        tango = tango.bind(zulu)(report, entity);
        report = 0;
        oscar = tango[report];
        report = 1;
        report = tango[report];
        tango = tango[options];
        mike = _closure1_slot1;
        entity = golf[entity];
        mike = mike.bind(zulu)(entity);
        entity = {};
        entity['r'] = oscar;
        entity['g'] = report;
        entity['b'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot5 = tango;
    tango = function(argFoo, argBar) { // Original name: getBackgroundColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            report = argBar;
            entity = report.length;
            zulu = 0;
            if(!(zulu === entity)) { _fun00002_ip = 21; continue _fun00001 }
 17:
            entity = undefined;
            return entity;
 21:
            entity = report.length;
            mike = 1;
            if(!(mike !== entity)) { _fun00002_ip = 149; continue _fun00001 }
 33:
            entity = {};
            oscar = report[zulu];
            entity['primary'] = oscar;
            oscar = report[mike];
            entity['secondary'] = oscar;
            options = _closure1_slot5;
            verify = report[zulu];
            oscar = report[mike];
            golf = undefined;
            offset = options.bind(golf)(verify, oscar);
            verify = offset.setAlpha;
            oscar = 0.4;
            oscar = verify.bind(offset)(oscar);
            entity['border'] = oscar;
            oscar = report[zulu];
            mike = report[mike];
            oscar = options.bind(golf)(oscar, mike);
            mike = oscar.isLight;
            mike = mike.bind(oscar)();
            if(mike) { _fun00002_ip = 137; continue _fun00001 }
 129:
            mike = tango.light;
            _fun00002_ip = 143; continue _fun00001;
 137:
            mike = tango.dark;
 143:
            entity['label'] = mike;
            _fun00002_ip = 237; continue _fun00001;
 149:
            mike = {};
            oscar = report[zulu];
            mike['primary'] = oscar;
            oscar = report[zulu];
            mike['secondary'] = oscar;
            options = report[zulu];
            golf = options.setAlpha;
            oscar = 0.4;
            oscar = golf.bind(options)(oscar);
            mike['border'] = oscar;
            report = report[zulu];
            zulu = report.isLight;
            zulu = zulu.bind(report)();
            if(zulu) { _fun00002_ip = 224; continue _fun00001 }
 216:
            zulu = tango.light;
            _fun00002_ip = 230; continue _fun00001;
 224:
            zulu = tango.dark;
 230:
            mike['label'] = zulu;
            entity = mike;
 237:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    tango = function(argFoo, argBar) { // Original name: getButtonColors
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            report = argBar;
            entity = report.length;
            zulu = 0;
            if(!(zulu === entity)) { _fun00004_ip = 21; continue _fun00003 }
 17:
            entity = undefined;
            return entity;
 21:
            entity = report.length;
            mike = 1;
            if(!(mike !== entity)) { _fun00004_ip = 109; continue _fun00003 }
 33:
            entity = {};
            oscar = report[zulu];
            entity['primary'] = oscar;
            oscar = report[mike];
            entity['secondary'] = oscar;
            options = _closure1_slot5;
            golf = report[zulu];
            oscar = report[mike];
            mike = undefined;
            oscar = options.bind(mike)(golf, oscar);
            mike = oscar.isLight;
            mike = mike.bind(oscar)();
            if(mike) { _fun00004_ip = 97; continue _fun00003 }
 89:
            mike = tango.light;
            _fun00004_ip = 103; continue _fun00003;
 97:
            mike = tango.dark;
 103:
            entity['text'] = mike;
            _fun00004_ip = 167; continue _fun00003;
 109:
            mike = {};
            oscar = report[zulu];
            mike['primary'] = oscar;
            oscar = report[zulu];
            mike['secondary'] = oscar;
            report = report[zulu];
            zulu = report.isLight;
            zulu = zulu.bind(report)();
            if(zulu) { _fun00004_ip = 154; continue _fun00003 }
 146:
            zulu = tango.light;
            _fun00004_ip = 160; continue _fun00003;
 154:
            zulu = tango.dark;
 160:
            mike['text'] = zulu;
            entity = mike;
 167:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    tango = function(argFoo, argBar) { // Original name: desaturate
        mike = argFoo;
        entity = mike.toHsl;
        entity = entity.bind(mike)();
        report = entity.h;
        oscar = entity.s;
        tango = entity.l;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 3;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = {};
        entity['h'] = report;
        report = argBar;
        report = oscar * report;
        entity['s'] = report;
        entity['l'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/createUseCollectiblesShopStyles.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        mike = argFoo;
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                tango = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 4;
                zulu = report[zulu];
                verify = undefined;
                golf = tango.bind(verify)(zulu);
                report = golf.useStateFromStores;
                zulu = _closure1_slot4;
                tango = new Array(1);
                tango[0] = zulu;
                zulu = function() {
                    entity = _closure1_slot4;
                    entity = entity.saturation;
                    return entity;
                };
                options = report.bind(golf)(tango, zulu);
                var _closure3_slot0 = options;
                report = null;
                if(!(report != entity)) { _fun00006_ip = 409; continue _fun00005 }
 73:
                zulu = {};
                golf = _closure1_slot6;
                offset = _closure2_slot0;
                tango = entity.backgroundColors;
                tango = golf.bind(verify)(offset, tango);
                zulu['backgroundColors'] = tango;
                golf = _closure1_slot7;
                tango = entity.buttonColors;
                tango = golf.bind(verify)(offset, tango);
                zulu['buttonColors'] = tango;
                entity = entity.confettiColors;
                zulu['confettiColors'] = entity;
                entity = 1;
                if(!(entity !== options)) { _fun00006_ip = 392; continue _fun00005 }
 145:
                entity = {};
                tango = zulu.backgroundColors;
                golf = report != tango;
                tango = undefined;
                if(!golf) { _fun00006_ip = 261; continue _fun00005 }
 162:
                golf = {};
                yankee = _closure1_slot8;
                offset = zulu.backgroundColors;
                offset = offset.primary;
                offset = yankee.bind(verify)(offset, options);
                golf['primary'] = offset;
                offset = zulu.backgroundColors;
                offset = offset.secondary;
                offset = yankee.bind(verify)(offset, options);
                golf['secondary'] = offset;
                offset = zulu.backgroundColors;
                offset = offset.border;
                offset = yankee.bind(verify)(offset, options);
                golf['border'] = offset;
                offset = zulu.backgroundColors;
                offset = offset.label;
                offset = yankee.bind(verify)(offset, options);
                golf['label'] = offset;
                tango = golf;
 261:
                entity['backgroundColors'] = tango;
                tango = zulu.buttonColors;
                report = report != tango;
                tango = undefined;
                if(!report) { _fun00006_ip = 357; continue _fun00005 }
 281:
                report = {};
                golf = _closure1_slot8;
                oscar = zulu.buttonColors;
                oscar = oscar.primary;
                oscar = golf.bind(verify)(oscar, options);
                report['primary'] = oscar;
                oscar = zulu.buttonColors;
                oscar = oscar.secondary;
                oscar = golf.bind(verify)(oscar, options);
                report['secondary'] = oscar;
                oscar = zulu.buttonColors;
                oscar = oscar.text;
                oscar = golf.bind(verify)(oscar, options);
                report['text'] = oscar;
                tango = report;
 357:
                entity['buttonColors'] = tango;
                report = zulu.confettiColors;
                tango = report.map;
                mike = function(argFoo) {
                    tango = _closure1_slot8;
                    zulu = _closure3_slot0;
                    mike = undefined;
                    entity = argFoo;
                    entity = tango.bind(mike)(entity, zulu);
                    return entity;
                };
                mike = tango.bind(report)(mike);
                entity['confettiColors'] = mike;
                _fun00006_ip = 407; continue _fun00005;
 392:
                mike = {};
                foxtrot = mike;
                romeo = zulu;
                zulu = copyDataProperties(foxtrot, romeo);
                entity = mike;
 407:
                return entity;
 409:
                entity = {};
                return entity;
            }
        };
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();