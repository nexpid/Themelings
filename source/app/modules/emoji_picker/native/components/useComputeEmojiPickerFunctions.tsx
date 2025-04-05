// app/modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot9;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot9;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: _computeCategories
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.categories;
            echoed = entity.rowSize;
            result = entity.isNativeEmojiPickerEnabled;
            entity = new Array(0);
            michal = _closure1_slot8;
            sizing = undefined;
            kiloes = michal.bind(sizing)(zuuluu);
            zuuluu = kiloes.bind(sizing)();
            michal = zuuluu.done;
            backup = 0;
            foxtra = 4;
            romeon = global;
            yankee = null;
            offset = 6;
            verify = 5;
            option = zuuluu;
            golfie = undefined;
            oscard = undefined;
            report = undefined;
            tangon = undefined;
            zuuluu = undefined;
            if(michal) { _fun00008_ip = 1289; continue _fun00007 }
 82:
            cntext = option.value;
            config = cntext.type;
            michal = _closure1_slot6;
            michal = michal.TOP_GUILD_EMOJI;
            if(!(michal !== config)) { _fun00008_ip = 1142; continue _fun00007 }
 109:
            michal = _closure1_slot6;
            michal = michal.FAVORITES;
            if(!(michal !== config)) { _fun00008_ip = 1037; continue _fun00007 }
 126:
            michal = _closure1_slot6;
            michal = michal.RECENT;
            if(!(michal !== config)) { _fun00008_ip = 929; continue _fun00007 }
 143:
            michal = _closure1_slot6;
            michal = michal.GUILD;
            if(!(michal !== config)) { _fun00008_ip = 548; continue _fun00007 }
 160:
            michal = _closure1_slot6;
            michal = michal.UNICODE;
            sequen = golfie;
            vacuum = oscard;
            ctrled = report;
            source = tangon;
            update = zuuluu;
            if(!(michal === config)) { _fun00008_ip = 1256; continue _fun00007 }
 192:
            config = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[verify];
            record = config.bind(sizing)(michal);
            config = record.getByCategory;
            michal = cntext.name;
            config = config.bind(record)(michal);
            if(result) { _fun00008_ip = 392; continue _fun00007 }
 231:
            record = _closure1_slot12;
            michal = {};
            michal['emojiSections'] = entity;
            papara = {};
            target = _closure1_slot7;
            target = target.EMOJI;
            papara['type'] = target;
            target = config;
            if(!(yankee == config)) { _fun00008_ip = 269; continue _fun00007 }
 265:
            target = new Array(0);
 269:
            papara['emojis'] = target;
            target = romeon.Set;
            status = target.prototype;
            status = Object.create(status, {constructor: {value: target}});
            equals = status;
            target = new equals[target](whisks);
            target = target instanceof Object ? target : status;
            papara['emojisDisabled'] = target;
            status = _closure1_slot1;
            target = _closure1_slot2;
            target = target[offset];
            sierra = status.bind(sizing)(target);
            status = sierra.capitalize;
            target = cntext.name;
            target = status.bind(sierra)(target);
            papara['label'] = target;
            target = _closure1_slot6;
            target = target.UNICODE;
            papara['footer'] = target;
            michal['renderingData'] = papara;
            michal['rowSize'] = echoed;
            michal = record.bind(sizing)(michal);
            sequen = golfie;
            vacuum = oscard;
            ctrled = report;
            source = config;
            update = zuuluu;
            _fun00008_ip = 1256; continue _fun00007;
 392:
            papara = _closure1_slot13;
            record = {};
            record['emojiSections'] = entity;
            target = {};
            michal = _closure1_slot7;
            michal = michal.NATIVE_SECTION;
            target['type'] = michal;
            status = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[offset];
            sierra = status.bind(sizing)(michal);
            status = sierra.capitalize;
            michal = cntext.name;
            michal = status.bind(sierra)(michal);
            target['label'] = michal;
            status = yankee == config;
            michal = undefined;
            if(status) { _fun00008_ip = 470; continue _fun00007 }
 465:
            michal = config.length;
 470:
            sierra = yankee != michal;
            status = 0;
            if(!sierra) { _fun00008_ip = 482; continue _fun00007 }
 479:
            status = michal;
 482:
            target['emojiCount'] = status;
            status = romeon.Set;
            sierra = status.prototype;
            sierra = Object.create(sierra, {constructor: {value: status}});
            equals = sierra;
            status = new equals[status](whisks);
            status = status instanceof Object ? status : sierra;
            target['emojisDisabled'] = status;
            record['renderingData'] = target;
            record = papara.bind(sizing)(record);
            sequen = golfie;
            vacuum = oscard;
            ctrled = report;
            source = config;
            update = michal;
            _fun00008_ip = 1256; continue _fun00007;
 548:
            record = cntext.guild;
            config = cntext.emojis;
            michal = cntext.emojisDisabled;
            if(result) { _fun00008_ip = 828; continue _fun00007 }
 571:
            target = _closure1_slot0;
            papara = _closure1_slot2;
            papara = papara[foxtra];
            status = target.bind(sizing)(papara);
            target = status.shouldNSFWGateGuild;
            papara = record.id;
            papara = target.bind(status)(papara);
            if(papara) { _fun00008_ip = 714; continue _fun00007 }
 607:
            target = _closure1_slot12;
            papara = {};
            papara['emojiSections'] = entity;
            status = {};
            sierra = _closure1_slot7;
            sierra = sierra.EMOJI;
            status['type'] = sierra;
            status['emojis'] = config;
            status['emojisDisabled'] = michal;
            sierra = record.name;
            status['label'] = sierra;
            sierra = _closure1_slot6;
            sierra = sierra.GUILD;
            status['footer'] = sierra;
            sierra = cntext.isNitroLocked;
            status['isSectionNitroLocked'] = sierra;
            papara['renderingData'] = status;
            papara['rowSize'] = echoed;
            papara = target.bind(sizing)(papara);
            sequen = record;
            vacuum = config;
            ctrled = michal;
            source = tangon;
            update = zuuluu;
            _fun00008_ip = 1256; continue _fun00007;
 714:
            papara = {};
            papara['emojiSections'] = entity;
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
            status = cntext.isNitroLocked;
            target['isSectionNitroLocked'] = status;
            papara['renderingData'] = target;
            status = papara.emojiSections;
            target = status.push;
            papara = papara.renderingData;
            papara = target.bind(status)(papara);
            sequen = record;
            vacuum = config;
            ctrled = michal;
            source = tangon;
            update = zuuluu;
            _fun00008_ip = 1256; continue _fun00007;
 828:
            target = _closure1_slot13;
            papara = {};
            papara['emojiSections'] = entity;
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
            status['emojisDisabled'] = michal;
            sierra = cntext.isNitroLocked;
            status['isSectionNitroLocked'] = sierra;
            papara['renderingData'] = status;
            papara = target.bind(sizing)(papara);
            sequen = record;
            vacuum = config;
            ctrled = michal;
            source = tangon;
            update = zuuluu;
            _fun00008_ip = 1256; continue _fun00007;
 929:
            config = _closure1_slot12;
            michal = {};
            michal['emojiSections'] = entity;
            record = {};
            papara = _closure1_slot7;
            papara = papara.EMOJI;
            record['type'] = papara;
            papara = cntext.emojisDisabled;
            record['emojisDisabled'] = papara;
            papara = cntext.emojis;
            record['emojis'] = papara;
            papara = cntext.name;
            record['label'] = papara;
            papara = _closure1_slot6;
            papara = papara.RECENT;
            record['footer'] = papara;
            michal['renderingData'] = record;
            michal['rowSize'] = echoed;
            michal = config.bind(sizing)(michal);
            sequen = golfie;
            vacuum = oscard;
            ctrled = report;
            source = tangon;
            update = zuuluu;
            _fun00008_ip = 1256; continue _fun00007;
 1037:
            config = _closure1_slot12;
            michal = {};
            michal['emojiSections'] = entity;
            record = {};
            papara = _closure1_slot7;
            papara = papara.EMOJI;
            record['type'] = papara;
            papara = cntext.emojis;
            record['emojis'] = papara;
            papara = cntext.emojisDisabled;
            record['emojisDisabled'] = papara;
            papara = cntext.name;
            record['label'] = papara;
            papara = _closure1_slot6;
            papara = papara.FAVORITES;
            record['footer'] = papara;
            michal['renderingData'] = record;
            michal['rowSize'] = echoed;
            michal = config.bind(sizing)(michal);
            sequen = golfie;
            vacuum = oscard;
            ctrled = report;
            source = tangon;
            update = zuuluu;
            _fun00008_ip = 1256; continue _fun00007;
 1142:
            config = cntext.emojis;
            michal = config.slice;
            papara = michal.bind(config)(backup, echoed);
            config = _closure1_slot12;
            michal = {};
            michal['emojiSections'] = entity;
            record = {};
            target = _closure1_slot7;
            target = target.EMOJI;
            record['type'] = target;
            record['emojis'] = papara;
            papara = cntext.emojisDisabled;
            record['emojisDisabled'] = papara;
            cntext = cntext.name;
            record['label'] = cntext;
            cntext = _closure1_slot6;
            cntext = cntext.TOP_GUILD_EMOJI;
            record['footer'] = cntext;
            michal['renderingData'] = record;
            michal['rowSize'] = echoed;
            michal = config.bind(sizing)(michal);
            sequen = golfie;
            vacuum = oscard;
            ctrled = report;
            source = tangon;
            update = zuuluu;
 1256:
            config = kiloes.bind(sizing)();
            michal = config.done;
            golfie = sequen;
            oscard = vacuum;
            report = ctrled;
            tangon = source;
            zuuluu = update;
            option = config;
            if(!michal) { _fun00008_ip = 82; continue _fun00007 }
 1289:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: _computeSearchResults
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = entity.emojis;
            zuuluu = michal.locked;
            foxtra = michal.unlocked;
            report = entity.rowSize;
            offset = entity.limit;
            tangon = undefined;
            if(!(offset === tangon)) { _fun00010_ip = 53; continue _fun00009 }
 39:
            entity = global;
            entity = entity.Number;
            offset = entity.MAX_SAFE_INTEGER;
 53:
            entity = new Array(0);
            option = _closure1_slot12;
            oscard = {};
            oscard['emojiSections'] = entity;
            verify = {};
            michal = _closure1_slot7;
            michal = michal.EMOJI;
            verify['type'] = michal;
            yankee = foxtra.length;
            michal = foxtra;
            if(!(yankee > offset)) { _fun00010_ip = 112; continue _fun00009 }
 99:
            romeon = foxtra.slice;
            yankee = 0;
            michal = romeon.bind(foxtra)(yankee, offset);
 112:
            verify['emojis'] = michal;
            michal = global;
            yankee = michal.Set;
            romeon = yankee.prototype;
            romeon = Object.create(romeon, {constructor: {value: yankee}});
            sizing = romeon;
            yankee = new sizing[yankee](kiloes);
            yankee = yankee instanceof Object ? yankee : romeon;
            verify['emojisDisabled'] = yankee;
            yankee = '';
            verify['label'] = yankee;
            yankee = _closure1_slot6;
            yankee = yankee.SEARCH_RESULTS;
            verify['footer'] = yankee;
            oscard['renderingData'] = verify;
            oscard['rowSize'] = report;
            oscard = option.bind(tangon)(oscard);
            oscard = zuuluu.length;
            verify = zuuluu;
            if(!(oscard > offset)) { _fun00010_ip = 213; continue _fun00009 }
 200:
            option = zuuluu.slice;
            oscard = 0;
            verify = option.bind(zuuluu)(oscard, offset);
 213:
            michal = michal.Set;
            oscard = michal.prototype;
            oscard = Object.create(oscard, {constructor: {value: michal}});
            sizing = oscard;
            michal = new sizing[michal](kiloes);
            option = michal instanceof Object ? michal : oscard;
            michal = _closure1_slot8;
            offset = michal.bind(tangon)(zuuluu);
            zuuluu = offset.bind(tangon)();
            michal = zuuluu.done;
            oscard = null;
            if(michal) { _fun00010_ip = 306; continue _fun00009 }
 262:
            michal = zuuluu.value;
            yankee = michal.id;
            if(!(oscard != yankee)) { _fun00010_ip = 291; continue _fun00009 }
 276:
            yankee = option.add;
            michal = michal.id;
            michal = yankee.bind(option)(michal);
 291:
            yankee = offset.bind(tangon)();
            michal = yankee.done;
            zuuluu = yankee;
            if(!michal) { _fun00010_ip = 262; continue _fun00009 }
 306:
            zuuluu = _closure1_slot12;
            michal = {};
            michal['emojiSections'] = entity;
            oscard = {};
            offset = _closure1_slot7;
            offset = offset.EMOJI;
            oscard['type'] = offset;
            oscard['emojis'] = verify;
            oscard['emojisDisabled'] = option;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 7;
            option = offset[option];
            offset = verify.bind(tangon)(option);
            verify = offset.getStringForEmojiCategory;
            option = _closure1_slot5;
            option = option.PREMIUM_UPSELL;
            option = verify.bind(offset)(option);
            oscard['label'] = option;
            golfie = _closure1_slot6;
            golfie = golfie.PREMIUM_UPSELL;
            oscard['footer'] = golfie;
            michal['renderingData'] = oscard;
            michal['rowSize'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: pushCategory
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            michal = entity.renderingData;
            zuuluu = michal.emojis;
            michal = null;
            michal = michal != zuuluu;
            if(!michal) { _fun00012_ip = 35; continue _fun00011 }
 24:
            tangon = zuuluu.length;
            zuuluu = 0;
            michal = zuuluu !== tangon;
 35:
            if(!michal) { _fun00012_ip = 60; continue _fun00011 }
 38:
            zuuluu = entity.emojiSections;
            michal = zuuluu.push;
            entity = entity.renderingData;
            entity = michal.bind(zuuluu)(entity);
 60:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: pushNativeCategory
        entity = argFoo;
        zuuluu = entity.emojiSections;
        michal = zuuluu.push;
        entity = entity.renderingData;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.EmojiCategories;
    var _closure1_slot5 = golfie;
    tangon = tangon.EmojiCategoryTypes;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EmojiPickerRenderingDataType;
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useComputeEmojiPickerFunctions
        tangon = _closure1_slot4;
        zuuluu = tangon.useState;
        michal = function() {
            entity = {};
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 8;
            golfie = oscard[zuuluu];
            tangon = undefined;
            verify = report.bind(tangon)(golfie);
            option = verify.cachedFunction;
            golfie = _closure1_slot10;
            golfie = option.bind(verify)(golfie);
            entity['computeCategories'] = golfie;
            zuuluu = oscard[zuuluu];
            tangon = report.bind(tangon)(zuuluu);
            zuuluu = tangon.cachedFunction;
            michal = _closure1_slot11;
            michal = zuuluu.bind(tangon)(michal);
            entity['computeSearchResults'] = michal;
            return entity;
        };
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = 1;
        michal = zuuluu.bind(michal)(tangon, entity);
        entity = 0;
        entity = michal[entity];
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();