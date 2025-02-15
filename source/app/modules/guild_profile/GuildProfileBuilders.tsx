// app/modules/guild_profile/GuildProfileBuilders.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot6;
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
            golf = _closure1_slot6;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot6 = entity;
    entity = function(argFoo) { // Original name: getEmoji
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            oscar = entity.emojiId;
            options = entity.emojiName;
            mike = _closure1_slot3;
            entity = mike.get;
            report = entity.bind(mike)(zulu);
            zulu = null;
            if(!(zulu == oscar)) { _fun00008_ip = 52; continue _fun00007 }
 43:
            mike = zulu == options;
            entity = null;
            if(mike) { _fun00008_ip = 126; continue _fun00007 }
 52:
            if(!(zulu == oscar)) { _fun00008_ip = 100; continue _fun00007 }
 56:
            golf = zulu != options;
            mike = null;
            if(!golf) { _fun00008_ip = 98; continue _fun00007 }
 65:
            verify = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 1;
            golf = golf[tango];
            tango = undefined;
            golf = verify.bind(tango)(golf);
            tango = golf.getByName;
            mike = tango.bind(golf)(options);
 98:
            _fun00008_ip = 123; continue _fun00007;
 100:
            tango = zulu != report;
            zulu = null;
            if(!tango) { _fun00008_ip = 120; continue _fun00007 }
 109:
            tango = report.getById;
            zulu = tango.bind(report)(oscar);
 120:
            mike = zulu;
 123:
            entity = mike;
 126:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: buildGuildProfileTraitsFromServer
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            yankee = argFoo;
            entity = global;
            zulu = entity.Array;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 2;
            entity = entity[verify];
            options = undefined;
            entity = mike.bind(options)(entity);
            output = entity.MAX_TRAITS;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            result = mike;
            entity = new result[zulu](output, sizing);
            zulu = entity instanceof Object ? entity : mike;
            mike = zulu.fill;
            entity = _closure1_slot4;
            entity = mike.bind(zulu)(entity);
            zulu = _closure1_slot5;
            mike = argBar;
            golf = zulu.bind(options)(mike);
            zulu = golf.bind(options)();
            mike = zulu.done;
            oscar = null;
            report = 0;
            tango = zulu;
            zulu = undefined;
            if(mike) { _fun00010_ip = 260; continue _fun00009 }
 113:
            kilo = tango.value;
            mike = kilo.position;
            mike = mike < report;
            if(mike) { _fun00010_ip = 162; continue _fun00009 }
 130:
            foxtrot = kilo.position;
            backup = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[verify];
            romeo = backup.bind(options)(romeo);
            romeo = romeo.MAX_TRAITS;
            mike = foxtrot >= romeo;
 162:
            if(mike) { _fun00010_ip = 242; continue _fun00009 }
 165:
            foxtrot = kilo.position;
            romeo = {};
            mike = kilo.label;
            romeo['label'] = mike;
            backup = _closure1_slot7;
            mike = {};
            mike['guildId'] = yankee;
            sizing = kilo.emoji_id;
            mike['emojiId'] = sizing;
            kilo = kilo.emoji_name;
            mike['emojiName'] = kilo;
            mike = backup.bind(options)(mike);
            kilo = oscar != mike;
            backup = undefined;
            if(!kilo) { _fun00010_ip = 230; continue _fun00009 }
 227:
            backup = mike;
 230:
            romeo['emoji'] = backup;
            entity[foxtrot] = romeo;
            zulu = mike;
 242:
            romeo = golf.bind(options)();
            mike = romeo.done;
            tango = romeo;
            if(!mike) { _fun00010_ip = 113; continue _fun00009 }
 260:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    tango = tango.EmojiDisambiguations;
    var _closure1_slot3 = tango;
    tango = {};
    golf = '';
    tango['label'] = golf;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_profile/GuildProfileBuilders.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: buildGuildProfileFromServer
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            entity = {};
            zulu = mike.id;
            entity['id'] = zulu;
            zulu = mike.name;
            entity['name'] = zulu;
            zulu = mike.description;
            entity['description'] = zulu;
            zulu = mike.icon_hash;
            entity['icon'] = zulu;
            zulu = mike.online_count;
            entity['onlineCount'] = zulu;
            zulu = mike.member_count;
            entity['memberCount'] = zulu;
            zulu = mike.brand_color_primary;
            entity['brandColorPrimary'] = zulu;
            zulu = mike.visibility;
            entity['visibility'] = zulu;
            golf = _closure1_slot8;
            oscar = mike.id;
            report = mike.traits;
            zulu = null;
            if(!(zulu == report)) { _fun00012_ip = 114; continue _fun00011 }
 110:
            report = new Array(0);
 114:
            tango = undefined;
            tango = golf.bind(tango)(oscar, report);
            entity['traits'] = tango;
            mike = mike.game_application_ids;
            if(!(zulu == mike)) { _fun00012_ip = 141; continue _fun00011 }
 137:
            mike = new Array(0);
 141:
            entity['gameApplicationIds'] = mike;
            return entity;
        }
    };
    zulu['buildGuildProfileFromServer'] = tango;
    tango = function(argFoo) { // Original name: buildGuildProfileUpdateForServer
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = argFoo;
            entity = {};
            zulu = mike.name;
            tango = null;
            if(!(tango != zulu)) { _fun00014_ip = 27; continue _fun00013 }
 16:
            zulu = mike.name;
            entity['name'] = zulu;
 27:
            zulu = mike.description;
            if(!(tango != zulu)) { _fun00014_ip = 47; continue _fun00013 }
 36:
            zulu = mike.description;
            entity['description'] = zulu;
 47:
            zulu = mike.icon;
            if(!(tango != zulu)) { _fun00014_ip = 67; continue _fun00013 }
 56:
            zulu = mike.icon;
            entity['icon'] = zulu;
 67:
            zulu = mike.visibility;
            if(!(tango != zulu)) { _fun00014_ip = 89; continue _fun00013 }
 77:
            zulu = mike.visibility;
            entity['visibility'] = zulu;
 89:
            zulu = mike.brandColorPrimary;
            if(!(tango != zulu)) { _fun00014_ip = 111; continue _fun00013 }
 99:
            zulu = mike.brandColorPrimary;
            entity['brand_color_primary'] = zulu;
 111:
            zulu = mike.traits;
            if(!(tango != zulu)) { _fun00014_ip = 191; continue _fun00013 }
 121:
            oscar = mike.traits;
            report = oscar.map;
            zulu = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = argFoo;
                    report = null;
                    mike = report == tango;
                    entity = undefined;
                    if(mike) { _fun00016_ip = 19; continue _fun00015 }
 14:
                    entity = tango.label;
 19:
                    mike = report == entity;
                    entity = null;
                    if(mike) { _fun00016_ip = 146; continue _fun00015 }
 28:
                    mike = tango.label;
                    oscar = mike.length;
                    mike = 0;
                    mike = oscar <= mike;
                    entity = null;
                    if(mike) { _fun00016_ip = 146; continue _fun00015 }
 49:
                    mike = {};
                    oscar = tango.label;
                    mike['label'] = oscar;
                    oscar = argBar;
                    mike['position'] = oscar;
                    golf = tango.emoji;
                    options = report == golf;
                    oscar = undefined;
                    if(options) { _fun00016_ip = 87; continue _fun00015 }
 82:
                    oscar = golf.id;
 87:
                    mike['emoji_id'] = oscar;
                    golf = tango.emoji;
                    options = report == golf;
                    oscar = undefined;
                    if(options) { _fun00016_ip = 112; continue _fun00015 }
 107:
                    oscar = golf.name;
 112:
                    mike['emoji_name'] = oscar;
                    tango = tango.emoji;
                    report = report == tango;
                    zulu = undefined;
                    if(report) { _fun00016_ip = 138; continue _fun00015 }
 132:
                    zulu = tango.animated;
 138:
                    mike['emoji_animated'] = zulu;
                    entity = mike;
 146:
                    return entity;
                }
            };
            oscar = report.bind(oscar)(zulu);
            report = oscar.filter;
            options = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 3;
            golf = golf[zulu];
            zulu = undefined;
            zulu = options.bind(zulu)(golf);
            zulu = zulu.isNotNullish;
            zulu = report.bind(oscar)(zulu);
            entity['traits'] = zulu;
 191:
            zulu = mike.gameApplicationIds;
            if(!(tango != zulu)) { _fun00014_ip = 213; continue _fun00013 }
 201:
            mike = mike.gameApplicationIds;
            entity['game_application_ids'] = mike;
 213:
            return entity;
        }
    };
    zulu['buildGuildProfileUpdateForServer'] = tango;
    mike = function(argFoo) { // Original name: buildTopGamesFromServer
        tango = argFoo;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            entity = argFoo;
            tango = argBar;
            zulu = tango.game_application_id;
            mike = {};
            report = tango.activity_level;
            mike['level'] = report;
            tango = tango.activity_score;
            mike['score'] = tango;
            entity[zulu] = mike;
            return entity;
        };
        entity = {};
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['buildTopGamesFromServer'] = mike;
    return entity;
})();