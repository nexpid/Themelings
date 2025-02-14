// app/modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun78140: for(var _fun78140_ip = 0; ; ) switch(_fun78140_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun78140_ip = 46; continue _fun78140 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun78140_ip = 55; continue _fun78140 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun78140_ip = 345; continue _fun78140 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun78140_ip = 323; continue _fun78140 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun78140_ip = 283; continue _fun78140 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun78140_ip = 270; continue _fun78140 }
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
            if(!golf) { _fun78140_ip = 163; continue _fun78140 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun78140_ip = 179; continue _fun78140 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun78140_ip = 249; continue _fun78140 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun78140_ip = 249; continue _fun78140 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun78140_ip = 234; continue _fun78140 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun78140_ip = 247; continue _fun78140 }
 234:
            verify = _closure1_slot9;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun78140_ip = 265; continue _fun78140;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun78140_ip = 283; continue _fun78140;
 270:
            golf = _closure1_slot9;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun78140_ip = 323; continue _fun78140 }
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
            if(!tango) { _fun78140_ip = 330; continue _fun78140 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun78141: for(var _fun78141_ip = 0; ; ) switch(_fun78141_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun78141_ip = 56; continue _fun78141 }
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
                    _fun78141_ip = 67; continue _fun78141;
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
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun78142: for(var _fun78142_ip = 0; ; ) switch(_fun78142_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun78142_ip = 23; continue _fun78142 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun78142_ip = 33; continue _fun78142 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun78142_ip = 70; continue _fun78142 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun78142_ip = 55; continue _fun78142 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: _computeCategories
        _fun78143: for(var _fun78143_ip = 0; ; ) switch(_fun78143_ip) {
 0:
            entity = argFoo;
            zulu = entity.categories;
            echo = entity.rowSize;
            result = entity.isNativeEmojiPickerEnabled;
            entity = new Array(0);
            mike = _closure1_slot8;
            sizing = undefined;
            kilo = mike.bind(sizing)(zulu);
            zulu = kilo.bind(sizing)();
            mike = zulu.done;
            backup = 0;
            foxtrot = 4;
            romeo = global;
            yankee = null;
            offset = 6;
            verify = 5;
            options = zulu;
            golf = undefined;
            oscar = undefined;
            report = undefined;
            tango = undefined;
            zulu = undefined;
            if(mike) { _fun78143_ip = 1289; continue _fun78143 }
 82:
            context = options.value;
            config = context.type;
            mike = _closure1_slot6;
            mike = mike.TOP_GUILD_EMOJI;
            if(!(mike !== config)) { _fun78143_ip = 1142; continue _fun78143 }
 109:
            mike = _closure1_slot6;
            mike = mike.FAVORITES;
            if(!(mike !== config)) { _fun78143_ip = 1037; continue _fun78143 }
 126:
            mike = _closure1_slot6;
            mike = mike.RECENT;
            if(!(mike !== config)) { _fun78143_ip = 929; continue _fun78143 }
 143:
            mike = _closure1_slot6;
            mike = mike.GUILD;
            if(!(mike !== config)) { _fun78143_ip = 548; continue _fun78143 }
 160:
            mike = _closure1_slot6;
            mike = mike.UNICODE;
            sequence = golf;
            vacuum = oscar;
            control = report;
            source = tango;
            update = zulu;
            if(!(mike === config)) { _fun78143_ip = 1256; continue _fun78143 }
 192:
            config = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[verify];
            record = config.bind(sizing)(mike);
            config = record.getByCategory;
            mike = context.name;
            config = config.bind(record)(mike);
            if(result) { _fun78143_ip = 392; continue _fun78143 }
 231:
            record = _closure1_slot12;
            mike = {};
            mike['emojiSections'] = entity;
            papa = {};
            target = _closure1_slot7;
            target = target.EMOJI;
            papa['type'] = target;
            target = config;
            if(!(yankee == config)) { _fun78143_ip = 269; continue _fun78143 }
 265:
            target = new Array(0);
 269:
            papa['emojis'] = target;
            target = romeo.Set;
            status = target.prototype;
            status = Object.create(status, {constructor: {value: target}});
            equality = status;
            target = new equality[target](whiskey);
            target = target instanceof Object ? target : status;
            papa['emojisDisabled'] = target;
            status = _closure1_slot1;
            target = _closure1_slot2;
            target = target[offset];
            sierra = status.bind(sizing)(target);
            status = sierra.capitalize;
            target = context.name;
            target = status.bind(sierra)(target);
            papa['label'] = target;
            target = _closure1_slot6;
            target = target.UNICODE;
            papa['footer'] = target;
            mike['renderingData'] = papa;
            mike['rowSize'] = echo;
            mike = record.bind(sizing)(mike);
            sequence = golf;
            vacuum = oscar;
            control = report;
            source = config;
            update = zulu;
            _fun78143_ip = 1256; continue _fun78143;
 392:
            papa = _closure1_slot13;
            record = {};
            record['emojiSections'] = entity;
            target = {};
            mike = _closure1_slot7;
            mike = mike.NATIVE_SECTION;
            target['type'] = mike;
            status = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[offset];
            sierra = status.bind(sizing)(mike);
            status = sierra.capitalize;
            mike = context.name;
            mike = status.bind(sierra)(mike);
            target['label'] = mike;
            status = yankee == config;
            mike = undefined;
            if(status) { _fun78143_ip = 470; continue _fun78143 }
 465:
            mike = config.length;
 470:
            sierra = yankee != mike;
            status = 0;
            if(!sierra) { _fun78143_ip = 482; continue _fun78143 }
 479:
            status = mike;
 482:
            target['emojiCount'] = status;
            status = romeo.Set;
            sierra = status.prototype;
            sierra = Object.create(sierra, {constructor: {value: status}});
            equality = sierra;
            status = new equality[status](whiskey);
            status = status instanceof Object ? status : sierra;
            target['emojisDisabled'] = status;
            record['renderingData'] = target;
            record = papa.bind(sizing)(record);
            sequence = golf;
            vacuum = oscar;
            control = report;
            source = config;
            update = mike;
            _fun78143_ip = 1256; continue _fun78143;
 548:
            record = context.guild;
            config = context.emojis;
            mike = context.emojisDisabled;
            if(result) { _fun78143_ip = 828; continue _fun78143 }
 571:
            target = _closure1_slot0;
            papa = _closure1_slot2;
            papa = papa[foxtrot];
            status = target.bind(sizing)(papa);
            target = status.shouldNSFWGateGuild;
            papa = record.id;
            papa = target.bind(status)(papa);
            if(papa) { _fun78143_ip = 714; continue _fun78143 }
 607:
            target = _closure1_slot12;
            papa = {};
            papa['emojiSections'] = entity;
            status = {};
            sierra = _closure1_slot7;
            sierra = sierra.EMOJI;
            status['type'] = sierra;
            status['emojis'] = config;
            status['emojisDisabled'] = mike;
            sierra = record.name;
            status['label'] = sierra;
            sierra = _closure1_slot6;
            sierra = sierra.GUILD;
            status['footer'] = sierra;
            sierra = context.isNitroLocked;
            status['isSectionNitroLocked'] = sierra;
            papa['renderingData'] = status;
            papa['rowSize'] = echo;
            papa = target.bind(sizing)(papa);
            sequence = record;
            vacuum = config;
            control = mike;
            source = tango;
            update = zulu;
            _fun78143_ip = 1256; continue _fun78143;
 714:
            papa = {};
            papa['emojiSections'] = entity;
            target = {};
            status = _closure1_slot7;
            status = status.NSFW;
            target['type'] = status;
            status = record.name;
            target['label'] = status;
            status = _closure1_slot6;
            status = status.GUILD;
            target['footer'] = status;
            status = new Array(0);
            target['emojis'] = status;
            status = context.isNitroLocked;
            target['isSectionNitroLocked'] = status;
            papa['renderingData'] = target;
            status = papa.emojiSections;
            target = status.push;
            papa = papa.renderingData;
            papa = target.bind(status)(papa);
            sequence = record;
            vacuum = config;
            control = mike;
            source = tango;
            update = zulu;
            _fun78143_ip = 1256; continue _fun78143;
 828:
            target = _closure1_slot13;
            papa = {};
            papa['emojiSections'] = entity;
            status = {};
            sierra = _closure1_slot7;
            sierra = sierra.NATIVE_SECTION;
            status['type'] = sierra;
            sierra = record.name;
            status['label'] = sierra;
            sierra = record.id;
            status['guildId'] = sierra;
            sierra = config.length;
            status['emojiCount'] = sierra;
            status['emojisDisabled'] = mike;
            sierra = context.isNitroLocked;
            status['isSectionNitroLocked'] = sierra;
            papa['renderingData'] = status;
            papa = target.bind(sizing)(papa);
            sequence = record;
            vacuum = config;
            control = mike;
            source = tango;
            update = zulu;
            _fun78143_ip = 1256; continue _fun78143;
 929:
            config = _closure1_slot12;
            mike = {};
            mike['emojiSections'] = entity;
            record = {};
            papa = _closure1_slot7;
            papa = papa.EMOJI;
            record['type'] = papa;
            papa = context.emojisDisabled;
            record['emojisDisabled'] = papa;
            papa = context.emojis;
            record['emojis'] = papa;
            papa = context.name;
            record['label'] = papa;
            papa = _closure1_slot6;
            papa = papa.RECENT;
            record['footer'] = papa;
            mike['renderingData'] = record;
            mike['rowSize'] = echo;
            mike = config.bind(sizing)(mike);
            sequence = golf;
            vacuum = oscar;
            control = report;
            source = tango;
            update = zulu;
            _fun78143_ip = 1256; continue _fun78143;
 1037:
            config = _closure1_slot12;
            mike = {};
            mike['emojiSections'] = entity;
            record = {};
            papa = _closure1_slot7;
            papa = papa.EMOJI;
            record['type'] = papa;
            papa = context.emojis;
            record['emojis'] = papa;
            papa = context.emojisDisabled;
            record['emojisDisabled'] = papa;
            papa = context.name;
            record['label'] = papa;
            papa = _closure1_slot6;
            papa = papa.FAVORITES;
            record['footer'] = papa;
            mike['renderingData'] = record;
            mike['rowSize'] = echo;
            mike = config.bind(sizing)(mike);
            sequence = golf;
            vacuum = oscar;
            control = report;
            source = tango;
            update = zulu;
            _fun78143_ip = 1256; continue _fun78143;
 1142:
            config = context.emojis;
            mike = config.slice;
            papa = mike.bind(config)(backup, echo);
            config = _closure1_slot12;
            mike = {};
            mike['emojiSections'] = entity;
            record = {};
            target = _closure1_slot7;
            target = target.EMOJI;
            record['type'] = target;
            record['emojis'] = papa;
            papa = context.emojisDisabled;
            record['emojisDisabled'] = papa;
            context = context.name;
            record['label'] = context;
            context = _closure1_slot6;
            context = context.TOP_GUILD_EMOJI;
            record['footer'] = context;
            mike['renderingData'] = record;
            mike['rowSize'] = echo;
            mike = config.bind(sizing)(mike);
            sequence = golf;
            vacuum = oscar;
            control = report;
            source = tango;
            update = zulu;
 1256:
            config = kilo.bind(sizing)();
            mike = config.done;
            golf = sequence;
            oscar = vacuum;
            report = control;
            tango = source;
            zulu = update;
            options = config;
            if(!mike) { _fun78143_ip = 82; continue _fun78143 }
 1289:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: _computeSearchResults
        _fun78144: for(var _fun78144_ip = 0; ; ) switch(_fun78144_ip) {
 0:
            entity = argFoo;
            mike = entity.emojis;
            zulu = mike.locked;
            foxtrot = mike.unlocked;
            report = entity.rowSize;
            offset = entity.limit;
            tango = undefined;
            if(!(offset === tango)) { _fun78144_ip = 53; continue _fun78144 }
 39:
            entity = global;
            entity = entity.Number;
            offset = entity.MAX_SAFE_INTEGER;
 53:
            entity = new Array(0);
            options = _closure1_slot12;
            oscar = {};
            oscar['emojiSections'] = entity;
            verify = {};
            mike = _closure1_slot7;
            mike = mike.EMOJI;
            verify['type'] = mike;
            yankee = foxtrot.length;
            mike = foxtrot;
            if(!(yankee > offset)) { _fun78144_ip = 112; continue _fun78144 }
 99:
            romeo = foxtrot.slice;
            yankee = 0;
            mike = romeo.bind(foxtrot)(yankee, offset);
 112:
            verify['emojis'] = mike;
            mike = global;
            yankee = mike.Set;
            romeo = yankee.prototype;
            romeo = Object.create(romeo, {constructor: {value: yankee}});
            sizing = romeo;
            yankee = new sizing[yankee](kilo);
            yankee = yankee instanceof Object ? yankee : romeo;
            verify['emojisDisabled'] = yankee;
            yankee = '';
            verify['label'] = yankee;
            yankee = _closure1_slot6;
            yankee = yankee.SEARCH_RESULTS;
            verify['footer'] = yankee;
            oscar['renderingData'] = verify;
            oscar['rowSize'] = report;
            oscar = options.bind(tango)(oscar);
            oscar = zulu.length;
            verify = zulu;
            if(!(oscar > offset)) { _fun78144_ip = 213; continue _fun78144 }
 200:
            options = zulu.slice;
            oscar = 0;
            verify = options.bind(zulu)(oscar, offset);
 213:
            mike = mike.Set;
            oscar = mike.prototype;
            oscar = Object.create(oscar, {constructor: {value: mike}});
            sizing = oscar;
            mike = new sizing[mike](kilo);
            options = mike instanceof Object ? mike : oscar;
            mike = _closure1_slot8;
            offset = mike.bind(tango)(zulu);
            zulu = offset.bind(tango)();
            mike = zulu.done;
            oscar = null;
            if(mike) { _fun78144_ip = 306; continue _fun78144 }
 262:
            mike = zulu.value;
            yankee = mike.id;
            if(!(oscar != yankee)) { _fun78144_ip = 291; continue _fun78144 }
 276:
            yankee = options.add;
            mike = mike.id;
            mike = yankee.bind(options)(mike);
 291:
            yankee = offset.bind(tango)();
            mike = yankee.done;
            zulu = yankee;
            if(!mike) { _fun78144_ip = 262; continue _fun78144 }
 306:
            zulu = _closure1_slot12;
            mike = {};
            mike['emojiSections'] = entity;
            oscar = {};
            offset = _closure1_slot7;
            offset = offset.EMOJI;
            oscar['type'] = offset;
            oscar['emojis'] = verify;
            oscar['emojisDisabled'] = options;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 7;
            options = offset[options];
            offset = verify.bind(tango)(options);
            verify = offset.getStringForEmojiCategory;
            options = _closure1_slot5;
            options = options.PREMIUM_UPSELL;
            options = verify.bind(offset)(options);
            oscar['label'] = options;
            golf = _closure1_slot6;
            golf = golf.PREMIUM_UPSELL;
            oscar['footer'] = golf;
            mike['renderingData'] = oscar;
            mike['rowSize'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: pushCategory
        _fun78145: for(var _fun78145_ip = 0; ; ) switch(_fun78145_ip) {
 0:
            entity = argFoo;
            mike = entity.renderingData;
            zulu = mike.emojis;
            mike = null;
            mike = mike != zulu;
            if(!mike) { _fun78145_ip = 35; continue _fun78145 }
 24:
            tango = zulu.length;
            zulu = 0;
            mike = zulu !== tango;
 35:
            if(!mike) { _fun78145_ip = 60; continue _fun78145 }
 38:
            zulu = entity.emojiSections;
            mike = zulu.push;
            entity = entity.renderingData;
            entity = mike.bind(zulu)(entity);
 60:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: pushNativeCategory
        entity = argFoo;
        zulu = entity.emojiSections;
        mike = zulu.push;
        entity = entity.renderingData;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot13 = entity;
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
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.EmojiCategories;
    var _closure1_slot5 = golf;
    tango = tango.EmojiCategoryTypes;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EmojiPickerRenderingDataType;
    var _closure1_slot7 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useComputeEmojiPickerFunctions
        tango = _closure1_slot4;
        zulu = tango.useState;
        mike = function() {
            entity = {};
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 8;
            golf = oscar[zulu];
            tango = undefined;
            verify = report.bind(tango)(golf);
            options = verify.cachedFunction;
            golf = _closure1_slot10;
            golf = options.bind(verify)(golf);
            entity['computeCategories'] = golf;
            zulu = oscar[zulu];
            tango = report.bind(tango)(zulu);
            zulu = tango.cachedFunction;
            mike = _closure1_slot11;
            mike = zulu.bind(tango)(mike);
            entity['computeSearchResults'] = mike;
            return entity;
        };
        tango = zulu.bind(tango)(mike);
        zulu = _closure1_slot3;
        mike = undefined;
        entity = 1;
        mike = zulu.bind(mike)(tango, entity);
        entity = 0;
        entity = mike[entity];
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();