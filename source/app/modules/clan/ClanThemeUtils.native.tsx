// app/modules/clan/ClanThemeUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = options;
    report = function(argFoo) { // Original name: getAccessibleTextColor
        _fun123753: for(var _fun123753_ip = 0; ; ) switch(_fun123753_ip) {
 0:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 1;
            entity = tango[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = argFoo;
            golf = zulu.bind(tango)(entity);
            zulu = golf.get;
            entity = 'rgb.r';
            zulu = zulu.bind(golf)(entity);
            entity = 299;
            report = entity * zulu;
            zulu = golf.get;
            entity = 'rgb.g';
            zulu = zulu.bind(golf)(entity);
            entity = 587;
            entity = entity * zulu;
            oscar = golf.get;
            zulu = 'rgb.b';
            oscar = oscar.bind(golf)(zulu);
            zulu = 114;
            zulu = zulu * oscar;
            entity = report + entity;
            zulu = entity + zulu;
            entity = 1000;
            zulu = zulu / entity;
            entity = 128;
            if(!(!(zulu < entity))) { _fun123753_ip = 166; continue _fun123753 }
 133:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.unsafe_rawColors;
            entity = entity.PRIMARY_860;
            _fun123753_ip = 197; continue _fun123753;
 166:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 3;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.unsafe_rawColors;
            entity = mike.PRIMARY_130;
 197:
            return entity;
        }
    };
    var _closure1_slot5 = report;
    entity = function(argFoo) { // Original name: getColorFromChroma
        mike = argFoo;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        oscar = tango.bind(entity)(zulu);
        zulu = mike.get;
        entity = 'rgb.r';
        report = zulu.bind(mike)(entity);
        zulu = mike.get;
        entity = 'rgb.g';
        verify = zulu.bind(mike)(entity);
        zulu = mike.get;
        entity = 'rgb.b';
        options = zulu.bind(mike)(entity);
        entity = mike.alpha;
        golf = entity.bind(mike)();
        mike = oscar.prototype;
        mike = Object.create(mike, {constructor: {value: oscar}});
        yankee = mike;
        offset = report;
        entity = new yankee[oscar](offset, verify, options, golf, oscar);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    var _closure1_slot6 = entity;
    tango = function(argFoo, argBar) { // Original name: getAccessibleClanColor
        _fun123755: for(var _fun123755_ip = 0; ; ) switch(_fun123755_ip) {
 0:
            tango = argFoo;
            options = arguments[2];
            zulu = undefined;
            if(!(options === zulu)) { _fun123755_ip = 46; continue _fun123755 }
 12:
            mike = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            entity = mike.bind(zulu)(entity);
            entity = entity.WCAGContrastRatios;
            options = entity.Text;
 46:
            mike = null;
            if(!(mike != tango)) { _fun123755_ip = 197; continue _fun123755 }
 55:
            entity = function(argFoo) { // Original name: getClosestBrandPreset
                _fun123756: for(var _fun123756_ip = 0; ; ) switch(_fun123756_ip) {
 0:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 1;
                    tango = oscar[entity];
                    entity = undefined;
                    golf = report.bind(entity)(tango);
                    tango = argFoo;
                    tango = golf.bind(entity)(tango);
                    var _closure3_slot0 = tango;
                    tango = 2;
                    tango = oscar[tango];
                    tango = report.bind(entity)(tango);
                    zulu = _closure1_slot3;
                    report = tango.bind(entity)(zulu);
                    tango = report.map;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        golf = entity.primary;
                        entity = {};
                        entity['primary'] = golf;
                        options = _closure1_slot1;
                        verify = _closure1_slot2;
                        mike = 1;
                        tango = verify[mike];
                        zulu = undefined;
                        oscar = options.bind(zulu)(tango);
                        report = oscar.distance;
                        tango = _closure3_slot0;
                        mike = verify[mike];
                        mike = options.bind(zulu)(mike);
                        zulu = mike.bind(zulu)(golf);
                        mike = 'hsl';
                        mike = report.bind(oscar)(tango, zulu, mike);
                        entity['distance'] = mike;
                        return entity;
                    };
                    report = tango.bind(report)(zulu);
                    tango = report.filter;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        mike = entity.distance;
                        entity = _closure1_slot4;
                        entity = mike < entity;
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.minBy;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.distance;
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    zulu = null;
                    zulu = zulu == mike;
                    if(zulu) { _fun123756_ip = 127; continue _fun123756 }
 121:
                    entity = mike.primary;
 127:
                    return entity;
                }
            };
            entity = entity.bind(zulu)(tango);
            verify = tango;
            if(!(mike != entity)) { _fun123755_ip = 79; continue _fun123755 }
 76:
            verify = entity;
 79:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            report = 1;
            tango = golf[report];
            tango = oscar.bind(zulu)(tango);
            verify = tango.bind(zulu)(verify);
            tango = golf[report];
            oscar = oscar.bind(zulu)(tango);
            tango = argBar;
            yankee = oscar.bind(zulu)(tango);
            oscar = _closure1_slot0;
            tango = 6;
            tango = golf[tango];
            golf = oscar.bind(zulu)(tango);
            oscar = golf.getAccessibleColor;
            tango = {};
            offset = _closure1_slot6;
            romeo = offset.bind(zulu)(verify);
            verify = new Array(2);
            verify[0] = romeo;
            offset = offset.bind(zulu)(yankee);
            verify[1] = offset;
            tango['colors'] = verify;
            tango['ratio'] = options;
            tango['saturationFactor'] = report;
            tango = oscar.bind(golf)(tango);
            if(!(mike == tango)) { _fun123755_ip = 199; continue _fun123755 }
 197:
            return zulu;
 199:
            mike = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[report];
            mike = mike.bind(zulu)(entity);
            entity = tango.toHexString;
            entity = entity.bind(tango)();
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.CLAN_BRAND_PALETTE_PRESETS;
    var _closure1_slot3 = oscar;
    oscar = 15;
    var _closure1_slot4 = oscar;
    oscar = 7;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/clan/ClanThemeUtils.native.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['getAccessibleTextColor'] = report;
    zulu['getAccessibleClanColor'] = tango;
    mike = function(argFoo, argBar) { // Original name: getClanPrimaryButtonStyles
        _fun123760: for(var _fun123760_ip = 0; ; ) switch(_fun123760_ip) {
 0:
            golf = argFoo;
            entity = null;
            mike = entity != golf;
            tango = undefined;
            zulu = undefined;
            if(!mike) { _fun123760_ip = 83; continue _fun123760 }
 16:
            oscar = _closure1_slot7;
            report = _closure1_slot0;
            options = _closure1_slot2;
            mike = 5;
            mike = options[mike];
            mike = report.bind(tango)(mike);
            mike = mike.WCAGContrastRatios;
            report = mike.NonText;
            mike = argBar;
            report = oscar.bind(tango)(golf, mike, report);
            mike = entity != report;
            zulu = undefined;
            if(!mike) { _fun123760_ip = 83; continue _fun123760 }
 74:
            mike = report.hex;
            zulu = mike.bind(report)();
 83:
            if(!(entity == zulu)) { _fun123760_ip = 89; continue _fun123760 }
 87:
            return tango;
 89:
            entity = {};
            entity['backgroundColor'] = zulu;
            mike = _closure1_slot5;
            mike = mike.bind(tango)(zulu);
            entity['color'] = mike;
            return entity;
        }
    };
    zulu['getClanPrimaryButtonStyles'] = mike;
    return entity;
})();