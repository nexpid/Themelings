// app/modules/messages/native/emoji/EmojiGrid.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'height': 40, 'width': 40};
    offset = 4;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.sm;
    verify['borderRadius'] = offset;
    tango['gridEmojiFastImage'] = verify;
    verify = {'fontSize': 18, 'lineHeight': 44};
    tango['gridEmojiText'] = verify;
    verify = {'marginTop': 16, 'flexDirection': 'row'};
    tango['emojiGridRowContainer'] = verify;
    verify = {'marginTop': 8, 'alignItems': 'center'};
    tango['emojiGridContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot5 = tango;
    tango = function(argFoo) { // Original name: Emoji
        _fun84741: for(var _fun84741_ip = 0; ; ) switch(_fun84741_ip) {
 0:
            entity = argFoo;
            entity = entity.guildEmoji;
            mike = _closure1_slot5;
            report = undefined;
            oscar = mike.bind(report)();
            tango = _closure1_slot4;
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 7;
            mike = golf[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            verify = entity.id;
            golf = null;
            if(!(golf != verify)) { _fun84741_ip = 121; continue _fun84741 }
 59:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            golf = 6;
            golf = offset[golf];
            offset = verify.bind(report)(golf);
            verify = offset.getEmojiURL;
            golf = {};
            yankee = entity.id;
            golf['id'] = yankee;
            yankee = entity.animated;
            golf['animated'] = yankee;
            yankee = 48;
            golf['size'] = yankee;
            golf = verify.bind(offset)(golf);
            _fun84741_ip = 157; continue _fun84741;
 121:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            options = 5;
            options = offset[options];
            offset = verify.bind(report)(options);
            verify = offset.getURL;
            options = entity.name;
            golf = verify.bind(offset)(options);
 157:
            mike['src'] = golf;
            golf = oscar.gridEmojiFastImage;
            mike['fastImageStyle'] = golf;
            oscar = oscar.gridEmojiText;
            mike['textEmojiStyle'] = oscar;
            oscar = entity.name;
            mike['name'] = oscar;
            entity = entity.id;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/emoji/EmojiGrid.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun84742: for(var _fun84742_ip = 0; ; ) switch(_fun84742_ip) {
 0:
            entity = argFoo;
            mike = entity.expressionSourceGuild;
            zulu = entity.doNotDisplayEmojiIds;
            tango = undefined;
            if(!(zulu === tango)) { _fun84742_ip = 27; continue _fun84742 }
 23:
            zulu = new Array(0);
 27:
            var _closure2_slot0 = zulu;
            offset = entity.numberToShow;
            if(!(offset === tango)) { _fun84742_ip = 46; continue _fun84742 }
 43:
            offset = 10;
 46:
            zulu = entity.maxPerRow;
            if(!(zulu === tango)) { _fun84742_ip = 59; continue _fun84742 }
 56:
            zulu = 5;
 59:
            var _closure2_slot1 = tango;
            oscar = {};
            verify = _closure1_slot0;
            entity = _closure1_slot2;
            options = 8;
            entity = entity[options];
            verify = verify.bind(tango)(entity);
            entity = verify.useSharedMessageEmojiStyles;
            romeo = entity.bind(verify)();
            foxtrot = oscar;
            entity = copyDataProperties(foxtrot, romeo);
            entity = _closure1_slot5;
            romeo = entity.bind(tango)();
            foxtrot = oscar;
            entity = copyDataProperties(foxtrot, romeo);
            _closure2_slot1 = oscar;
            entity = null;
            verify = entity == mike;
            yankee = undefined;
            if(verify) { _fun84742_ip = 141; continue _fun84742 }
 135:
            yankee = mike.emojis;
 141:
            if(!(entity == yankee)) { _fun84742_ip = 149; continue _fun84742 }
 145:
            yankee = new Array(0);
 149:
            mike = yankee.slice;
            entity = 1;
            entity = offset + entity;
            verify = 0;
            yankee = mike.bind(yankee)(verify, entity);
            mike = yankee.filter;
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            mike = mike.bind(yankee)(entity);
            entity = mike.slice;
            mike = entity.bind(mike)(verify, offset);
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 9;
            entity = offset[entity];
            entity = verify.bind(tango)(entity);
            verify = entity.bind(tango)(mike, zulu);
            zulu = _closure1_slot4;
            mike = _closure1_slot3;
            entity = {};
            oscar = oscar.emojiGridContainer;
            entity['style'] = oscar;
            oscar = _closure1_slot0;
            report = 10;
            report = offset[report];
            report = oscar.bind(tango)(report);
            oscar = report.GappedList;
            report = {};
            report['gap'] = options;
            options = verify.map;
            golf = function(argFoo, argBar) {
                verify = argFoo;
                report = _closure1_slot4;
                tango = _closure1_slot3;
                zulu = {};
                mike = _closure2_slot1;
                mike = mike.emojiGridRowContainer;
                zulu['style'] = mike;
                oscar = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                entity = mike[entity];
                mike = undefined;
                entity = oscar.bind(mike)(entity);
                oscar = entity.GappedList;
                entity = {};
                golf = 32;
                entity['gap'] = golf;
                options = verify.map;
                golf = function(argFoo) {
                    entity = argFoo;
                    report = _closure1_slot4;
                    tango = _closure1_slot6;
                    zulu = {};
                    zulu['guildEmoji'] = entity;
                    mike = entity.id;
                    entity = undefined;
                    entity = report.bind(entity)(tango, zulu, mike);
                    return entity;
                };
                golf = options.bind(verify)(golf);
                entity['children'] = golf;
                entity = report.bind(mike)(oscar, entity);
                zulu['children'] = entity;
                entity = argBar;
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            };
            golf = options.bind(verify)(golf);
            report['children'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['EmojiGrid'] = mike;
    return entity;
})();