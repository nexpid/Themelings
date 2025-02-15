// app/modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = report.bind(entity)(tango);
    tango = tango.PixelRatio;
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GUILD_ITEM_SIZE;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.BADGE_PADDING;
    var _closure1_slot4 = golf;
    tango = tango.BADGE_SIZE;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: computeGuildsBarCutout
        _fun114416: for(var _fun114416_ip = 0; ; ) switch(_fun114416_ip) {
 0:
            entity = argFoo;
            golf = entity.position;
            tango = entity.containerSize;
            offset = undefined;
            if(!(tango === offset)) { _fun114416_ip = 27; continue _fun114416 }
 20:
            tango = _closure1_slot3;
 27:
            report = entity.width;
            if(!(report === offset)) { _fun114416_ip = 43; continue _fun114416 }
 36:
            report = _closure1_slot5;
 43:
            oscar = entity.height;
            if(!(oscar === offset)) { _fun114416_ip = 59; continue _fun114416 }
 52:
            oscar = _closure1_slot5;
 59:
            mike = entity.padding;
            if(!(mike === offset)) { _fun114416_ip = 75; continue _fun114416 }
 68:
            mike = _closure1_slot4;
 75:
            verify = _closure1_slot2;
            zulu = verify.roundToNearestPixel;
            yankee = 2;
            entity = yankee * mike;
            entity = report + entity;
            zulu = zulu.bind(verify)(entity);
            report = verify.roundToNearestPixel;
            entity = yankee * mike;
            entity = oscar + entity;
            report = report.bind(verify)(entity);
            oscar = verify.roundToNearestPixel;
            entity = global;
            romeo = entity.Math;
            entity = romeo.min;
            entity = entity.bind(romeo)(zulu, report);
            entity = entity / yankee;
            oscar = oscar.bind(verify)(entity);
            entity = {'shape': null, 'x': 0, 'y': 0};
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            options = 3;
            options = yankee[options];
            options = verify.bind(offset)(options);
            options = options.CutoutShape;
            options = options.RoundedRect;
            entity['shape'] = options;
            entity['width'] = zulu;
            entity['height'] = report;
            entity['cornerRadius'] = oscar;
            oscar = 'top-right';
            if(!(oscar !== golf)) { _fun114416_ip = 258; continue _fun114416 }
 228:
            oscar = tango - zulu;
            oscar = oscar + mike;
            entity['x'] = oscar;
            report = tango - report;
            report = report + mike;
            entity['y'] = report;
            _fun114416_ip = 281; continue _fun114416;
 258:
            zulu = tango - zulu;
            zulu = zulu + mike;
            entity['x'] = zulu;
            mike = -mike;
            entity['y'] = mike;
 281:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();