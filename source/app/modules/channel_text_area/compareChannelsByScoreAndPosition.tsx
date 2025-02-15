// app/modules/channel_text_area/compareChannelsByScoreAndPosition.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo) { // Original name: getGuildChannelPosition
        _fun65444: for(var _fun65444_ip = 0; ; ) switch(_fun65444_ip) {
 0:
            mike = argFoo;
            entity = mike.parent_id;
            zulu = null;
            if(!(zulu != entity)) { _fun65444_ip = 120; continue _fun65444 }
 15:
            report = _closure1_slot0;
            tango = report.getChannel;
            entity = mike.parent_id;
            tango = tango.bind(report)(entity);
            report = zulu == tango;
            entity = undefined;
            if(report) { _fun65444_ip = 52; continue _fun65444 }
 47:
            entity = tango.position;
 52:
            tango = zulu != entity;
            zulu = 0;
            if(!tango) { _fun65444_ip = 64; continue _fun65444 }
 61:
            zulu = entity;
 64:
            entity = 1;
            report = zulu + entity;
            entity = mike.isGuildVocal;
            entity = entity.bind(mike)();
            tango = mike.position;
            zulu = 1000;
            zulu = zulu * report;
            tango = zulu + tango;
            if(entity) { _fun65444_ip = 108; continue _fun65444 }
 103:
            entity = tango;
            _fun65444_ip = 118; continue _fun65444;
 108:
            zulu = 500;
            entity = tango + zulu;
 118:
            return entity;
 120:
            zulu = mike.type;
            entity = _closure1_slot1;
            entity = entity.GUILD_CATEGORY;
            if(!(zulu !== entity)) { _fun65444_ip = 149; continue _fun65444 }
 142:
            entity = mike.position;
            _fun65444_ip = 171; continue _fun65444;
 149:
            zulu = mike.position;
            mike = 1;
            zulu = zulu + mike;
            mike = 1000;
            entity = mike * zulu;
 171:
            return entity;
        }
    };
    var _closure1_slot2 = entity;
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
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelTypes;
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_text_area/compareChannelsByScoreAndPosition.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: compareChannelsByScoreAndPosition
        _fun65445: for(var _fun65445_ip = 0; ; ) switch(_fun65445_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            tango = entity.score;
            zulu = mike.score;
            if(!(tango === zulu)) { _fun65445_ip = 204; continue _fun65445 }
 25:
            report = _closure1_slot2;
            zulu = entity.record;
            verify = undefined;
            tango = report.bind(verify)(zulu);
            zulu = mike.record;
            zulu = report.bind(verify)(zulu);
            if(!(tango === zulu)) { _fun65445_ip = 198; continue _fun65445 }
 63:
            report = entity.sortable;
            options = null;
            if(!(options == report)) { _fun65445_ip = 103; continue _fun65445 }
 75:
            offset = entity.comparator;
            golf = options == offset;
            oscar = undefined;
            if(golf) { _fun65445_ip = 100; continue _fun65445 }
 90:
            golf = offset.toLocaleLowerCase;
            oscar = golf.bind(offset)();
 100:
            report = oscar;
 103:
            offset = options != report;
            golf = '';
            oscar = golf;
            if(!offset) { _fun65445_ip = 120; continue _fun65445 }
 117:
            oscar = report;
 120:
            report = entity.sortable;
            if(!(options == report)) { _fun65445_ip = 158; continue _fun65445 }
 130:
            yankee = mike.comparator;
            offset = options == yankee;
            verify = undefined;
            if(offset) { _fun65445_ip = 155; continue _fun65445 }
 145:
            offset = yankee.toLocaleLowerCase;
            verify = offset.bind(yankee)();
 155:
            report = verify;
 158:
            options = options != report;
            if(!options) { _fun65445_ip = 168; continue _fun65445 }
 165:
            golf = report;
 168:
            options = oscar < golf;
            report = -1;
            if(options) { _fun65445_ip = 196; continue _fun65445 }
 181:
            golf = oscar > golf;
            oscar = 0;
            if(!golf) { _fun65445_ip = 193; continue _fun65445 }
 190:
            oscar = 1;
 193:
            report = oscar;
 196:
            return report;
 198:
            zulu = tango - zulu;
            return zulu;
 204:
            mike = mike.score;
            entity = entity.score;
            entity = mike - entity;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();