// app/uikit-native/Icon.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = verify;
    tango = function(argFoo) { // Original name: getIconSize
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot4;
            zulu = zulu.EXTRA_SMALL_10;
            if(!(zulu !== mike)) { _fun00002_ip = 181; continue _fun00001 }
 23:
            zulu = _closure1_slot4;
            zulu = zulu.EXTRA_SMALL;
            if(!(zulu !== mike)) { _fun00002_ip = 176; continue _fun00001 }
 40:
            zulu = _closure1_slot4;
            zulu = zulu.SMALL;
            if(!(zulu !== mike)) { _fun00002_ip = 171; continue _fun00001 }
 54:
            zulu = _closure1_slot4;
            zulu = zulu.SMALL_14;
            if(!(zulu !== mike)) { _fun00002_ip = 166; continue _fun00001 }
 68:
            zulu = _closure1_slot4;
            zulu = zulu.SMALL_20;
            if(!(zulu !== mike)) { _fun00002_ip = 161; continue _fun00001 }
 82:
            zulu = _closure1_slot4;
            zulu = zulu.MEDIUM;
            if(!(zulu !== mike)) { _fun00002_ip = 156; continue _fun00001 }
 96:
            zulu = _closure1_slot4;
            zulu = zulu.LARGE;
            if(!(zulu !== mike)) { _fun00002_ip = 151; continue _fun00001 }
 110:
            zulu = _closure1_slot4;
            zulu = zulu.REFRESH_SMALL_16;
            if(!(zulu !== mike)) { _fun00002_ip = 146; continue _fun00001 }
 124:
            entity = _closure1_slot4;
            entity = entity.CUSTOM;
            if(!(entity !== mike)) { _fun00002_ip = 142; continue _fun00001 }
 138:
            entity = undefined;
            return entity;
 142:
            entity = undefined;
            return entity;
 146:
            entity = 16;
            return entity;
 151:
            entity = 32;
            return entity;
 156:
            entity = 24;
            return entity;
 161:
            entity = 20;
            return entity;
 166:
            entity = 14;
            return entity;
 171:
            entity = 18;
            return entity;
 176:
            entity = 12;
            return entity;
 181:
            entity = 10;
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    mike = function(argFoo) { // Original name: getIconStyle
        zulu = _closure1_slot6;
        mike = undefined;
        entity = argFoo;
        mike = zulu.bind(mike)(entity);
        entity = {};
        entity['width'] = mike;
        entity['height'] = mike;
        return entity;
    };
    var _closure1_slot7 = mike;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, report);
    entity = 0;
    golf = verify[entity];
    report = argCorge;
    entity = undefined;
    offset = report.bind(entity)(golf);
    report = 1;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.Image;
    var _closure1_slot2 = report;
    report = 2;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot3 = report;
    report = {};
    golf = 'extraSmall10';
    report['EXTRA_SMALL_10'] = golf;
    golf = 'extraSmall';
    report['EXTRA_SMALL'] = golf;
    golf = 'small';
    report['SMALL'] = golf;
    golf = 'small20';
    report['SMALL_20'] = golf;
    golf = 'medium';
    report['MEDIUM'] = golf;
    golf = 'large';
    report['LARGE'] = golf;
    golf = 'custom';
    report['CUSTOM'] = golf;
    golf = 'refreshSmall16';
    report['REFRESH_SMALL_16'] = golf;
    golf = 'small14';
    report['SMALL_14'] = golf;
    var _closure1_slot4 = report;
    golf = 3;
    golf = verify[golf];
    romeo = options.bind(entity)(golf);
    yankee = romeo.createStyles;
    golf = function(argFoo) {
        entity = {};
        tango = _closure1_slot7;
        report = undefined;
        mike = argFoo;
        mike = tango.bind(report)(mike);
        entity['icon'] = mike;
        mike = {};
        tango = _closure1_slot0;
        oscar = _closure1_slot1;
        zulu = 4;
        zulu = oscar[zulu];
        zulu = tango.bind(report)(zulu);
        zulu = zulu.colors;
        zulu = zulu.INTERACTIVE_NORMAL;
        mike['tintColor'] = zulu;
        entity['iconColor'] = mike;
        return entity;
    };
    golf = yankee.bind(romeo)(golf);
    var _closure1_slot5 = golf;
    golf = offset.memo;
    yankee = offset.forwardRef;
    oscar = function(argFoo, argBar) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            yankee = entity.source;
            zulu = entity.color;
            mike = entity.disableColor;
            tango = undefined;
            if(!(mike === tango)) { _fun00004_ip = 27; continue _fun00003 }
 25:
            mike = false;
 27:
            offset = entity.size;
            if(!(offset === tango)) { _fun00004_ip = 49; continue _fun00003 }
 36:
            report = _closure1_slot4;
            offset = report.MEDIUM;
 49:
            options = entity.style;
            romeo = entity.resizeMode;
            if(!(romeo === tango)) { _fun00004_ip = 68; continue _fun00003 }
 64:
            romeo = 'cover';
 68:
            oscar = entity.accessible;
            report = entity.accessibilityLabel;
            entity = _closure1_slot5;
            entity = entity.bind(tango)(offset);
            verify = undefined;
            if(mike) { _fun00004_ip = 123; continue _fun00003 }
 96:
            mike = null;
            if(!(mike == zulu)) { _fun00004_ip = 110; continue _fun00003 }
 102:
            entity = entity.iconColor;
            _fun00004_ip = 120; continue _fun00003;
 110:
            mike = {};
            mike['tintColor'] = zulu;
            entity = mike;
 120:
            verify = entity;
 123:
            zulu = _closure1_slot3;
            mike = _closure1_slot2;
            entity = {};
            entity['resizeMode'] = romeo;
            entity['source'] = yankee;
            golf = _closure1_slot7;
            offset = golf.bind(tango)(offset);
            golf = new Array(3);
            golf[0] = offset;
            golf[1] = verify;
            golf[2] = options;
            entity['style'] = golf;
            entity['accessible'] = oscar;
            entity['accessibilityLabel'] = report;
            report = 0;
            entity['fadeDuration'] = report;
            report = argBar;
            entity['ref'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    oscar = yankee.bind(offset)(oscar);
    oscar = golf.bind(offset)(oscar);
    oscar['Sizes'] = report;
    golf = 5;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'uikit-native/Icon.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['IconSizes'] = report;
    zulu['getIconSize'] = tango;
    zulu['getIconStyle'] = mike;
    return entity;
})();