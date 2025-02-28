// app/modules/interaction_components/InteractionComponentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot6;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot6;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot6 = entity;
    report = function(argFoo) { // Original name: flattenComponents
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = {};
            zuuluu = _closure1_slot5;
            report = undefined;
            michal = argFoo;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.bind(report)();
            michal = zuuluu.done;
            if(michal) { _fun00008_ip = 61; continue _fun00007 }
 31:
            golfie = _closure1_slot8;
            michal = zuuluu.value;
            michal = golfie.bind(report)(entity, michal);
            golfie = tangon.bind(report)();
            michal = golfie.done;
            zuuluu = golfie;
            if(!michal) { _fun00008_ip = 31; continue _fun00007 }
 61:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    entity = function(argFoo, argBar) { // Original name: flattenComponent
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argFoo;
            zuuluu = argBar;
            var _closure2_slot0 = oscard;
            entity = zuuluu.id;
            oscard[entity] = zuuluu;
            golfie = zuuluu.type;
            option = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 2;
            report = entity[verify];
            entity = undefined;
            report = option.bind(entity)(report);
            report = report.ComponentType;
            report = report.ACTION_ROW;
            if(!(report !== golfie)) { _fun00010_ip = 198; continue _fun00009 }
 70:
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[verify];
            report = option.bind(entity)(report);
            report = report.ComponentType;
            report = report.SECTION;
            if(!(report !== golfie)) { _fun00010_ip = 159; continue _fun00009 }
 103:
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[verify];
            report = option.bind(entity)(report);
            report = report.ComponentType;
            report = report.CONTAINER;
            if(!(report === golfie)) { _fun00010_ip = 219; continue _fun00009 }
 136:
            option = zuuluu.components;
            golfie = option.forEach;
            report = function(argFoo) {
                tangon = _closure1_slot8;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            report = golfie.bind(option)(report);
            _fun00010_ip = 219; continue _fun00009;
 159:
            option = zuuluu.components;
            golfie = option.forEach;
            report = function(argFoo) {
                tangon = _closure1_slot8;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            report = golfie.bind(option)(report);
            report = _closure1_slot8;
            tangon = zuuluu.accessory;
            tangon = report.bind(entity)(oscard, tangon);
            _fun00010_ip = 219; continue _fun00009;
 198:
            tangon = zuuluu.components;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                tangon = _closure1_slot8;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 219:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    tangon = function(argFoo, argBar) { // Original name: findChildComponent
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            tangon = argBar;
            var _closure2_slot0 = tangon;
            oscard = michal.type;
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            option = 2;
            golfie = zuuluu[option];
            zuuluu = undefined;
            golfie = verify.bind(zuuluu)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.ACTION_ROW;
            if(!(golfie !== oscard)) { _fun00012_ip = 222; continue _fun00011 }
 61:
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(zuuluu)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.SECTION;
            if(!(golfie !== oscard)) { _fun00012_ip = 164; continue _fun00011 }
 94:
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            report = report[option];
            report = golfie.bind(zuuluu)(report);
            report = report.ComponentType;
            report = report.CONTAINER;
            if(!(report !== oscard)) { _fun00012_ip = 129; continue _fun00011 }
 127:
            return zuuluu;
 129:
            oscard = michal.components;
            report = oscard.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            report = report.bind(oscard)(zuuluu);
            zuuluu = null;
            oscard = zuuluu != report;
            if(!oscard) { _fun00012_ip = 162; continue _fun00011 }
 159:
            zuuluu = report;
 162:
            return zuuluu;
 164:
            zuuluu = michal.accessory;
            zuuluu = zuuluu.id;
            if(!(zuuluu !== tangon)) { _fun00012_ip = 214; continue _fun00011 }
 179:
            report = michal.components;
            tangon = report.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = null;
            report = zuuluu != tangon;
            if(!report) { _fun00012_ip = 212; continue _fun00011 }
 209:
            zuuluu = tangon;
 212:
            _fun00012_ip = 220; continue _fun00011;
 214:
            zuuluu = michal.accessory;
 220:
            return zuuluu;
 222:
            zuuluu = michal.components;
            michal = zuuluu.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            zuuluu = entity != michal;
            if(!zuuluu) { _fun00012_ip = 255; continue _fun00011 }
 252:
            entity = michal;
 255:
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = function(argFoo, argBar, argBaz) { // Original name: transformComponent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            oscard = argBar;
            report = argBaz;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = report;
            verify = function(argFoo, argBar) { // Original name: getChildComponent
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    golfie = _closure2_slot1;
                    report = new Array(1);
                    oscard = 0;
                    option = report;
                    zuuluu = arraySpread(option, golfie, oscard);
                    michal = argBar;
                    report[zuuluu] = michal;
                    michal = 1;
                    michal = zuuluu + michal;
                    tangon = _closure1_slot10;
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    entity = argFoo;
                    michal = tangon.bind(michal)(entity, zuuluu, report);
                    entity = null;
                    zuuluu = entity == michal;
                    if(zuuluu) { _fun00016_ip = 70; continue _fun00015 }
 67:
                    entity = michal;
 70:
                    return entity;
                }
            };
            var _closure2_slot3 = verify;
            option = _closure1_slot4;
            golfie = michal.type;
            tangon = undefined;
            golfie = option.bind(tangon)(golfie);
            if(golfie) { _fun00014_ip = 54; continue _fun00013 }
 50:
            golfie = null;
            return golfie;
 54:
            offset = oscard.includeEmojiSrc;
            var _closure2_slot2 = offset;
            golfie = michal.type;
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            option = 2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.ACTION_ROW;
            if(!(oscard !== golfie)) { _fun00014_ip = 2707; continue _fun00013 }
 108:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.BUTTON;
            if(!(oscard !== golfie)) { _fun00014_ip = 2561; continue _fun00013 }
 144:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.STRING_SELECT;
            if(!(oscard !== golfie)) { _fun00014_ip = 2373; continue _fun00013 }
 180:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.TEXT_INPUT;
            if(!(oscard !== golfie)) { _fun00014_ip = 2244; continue _fun00013 }
 216:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.USER_SELECT;
            if(!(oscard !== golfie)) { _fun00014_ip = 2069; continue _fun00013 }
 252:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.ROLE_SELECT;
            if(!(oscard !== golfie)) { _fun00014_ip = 1894; continue _fun00013 }
 288:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.MENTIONABLE_SELECT;
            if(!(oscard !== golfie)) { _fun00014_ip = 1719; continue _fun00013 }
 324:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.CHANNEL_SELECT;
            if(!(oscard !== golfie)) { _fun00014_ip = 1533; continue _fun00013 }
 360:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.SECTION;
            if(!(oscard !== golfie)) { _fun00014_ip = 1372; continue _fun00013 }
 396:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.TEXT_DISPLAY;
            if(!(oscard !== golfie)) { _fun00014_ip = 1313; continue _fun00013 }
 432:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.THUMBNAIL;
            if(!(oscard !== golfie)) { _fun00014_ip = 1209; continue _fun00013 }
 468:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.MEDIA_GALLERY;
            if(!(oscard !== golfie)) { _fun00014_ip = 1133; continue _fun00013 }
 504:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.FILE;
            if(!(oscard !== golfie)) { _fun00014_ip = 1020; continue _fun00013 }
 540:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.SEPARATOR;
            if(!(oscard !== golfie)) { _fun00014_ip = 905; continue _fun00013 }
 576:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.CONTENT_INVENTORY_ENTRY;
            if(!(oscard !== golfie)) { _fun00014_ip = 826; continue _fun00013 }
 612:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.CONTAINER;
            if(!(oscard !== golfie)) { _fun00014_ip = 649; continue _fun00013 }
 645:
            oscard = null;
            return oscard;
 649:
            yankee = michal.components;
            golfie = yankee.map;
            oscard = function(argFoo, argBar) {
                tangon = _closure2_slot3;
                zuuluu = undefined;
                michal = argFoo;
                entity = argBar;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            foxtra = golfie.bind(yankee)(oscard);
            golfie = foxtra.filter;
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 5;
            oscard = yankee[oscard];
            oscard = romeon.bind(tangon)(oscard);
            oscard = oscard.isNotNullish;
            golfie = golfie.bind(foxtra)(oscard);
            oscard = {};
            yankee = yankee[option];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.ComponentType;
            yankee = yankee.CONTAINER;
            oscard['type'] = yankee;
            yankee = _closure1_slot11;
            yankee = yankee.bind(tangon)(report);
            oscard['id'] = yankee;
            romeon = michal.accent_color;
            yankee = null;
            romeon = yankee != romeon;
            yankee = undefined;
            if(!romeon) { _fun00014_ip = 803; continue _fun00013 }
 763:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 8;
            romeon = backup[romeon];
            kiloes = foxtra.bind(tangon)(romeon);
            backup = kiloes.int2hsl;
            foxtra = michal.accent_color;
            romeon = false;
            yankee = backup.bind(kiloes)(foxtra, romeon);
 803:
            oscard['accentColor'] = yankee;
            yankee = michal.spoiler;
            oscard['spoiler'] = yankee;
            oscard['components'] = golfie;
            return oscard;
 826:
            golfie = michal.content_inventory_entry;
            oscard = null;
            golfie = oscard == golfie;
            if(golfie) { _fun00014_ip = 903; continue _fun00013 }
 841:
            golfie = {};
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[option];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.ComponentType;
            yankee = yankee.CONTENT_INVENTORY_ENTRY;
            golfie['type'] = yankee;
            yankee = _closure1_slot11;
            yankee = yankee.bind(tangon)(report);
            golfie['id'] = yankee;
            yankee = michal.content_inventory_entry;
            golfie['contentInventoryEntry'] = yankee;
            oscard = golfie;
 903:
            return oscard;
 905:
            oscard = {};
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.SEPARATOR;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            romeon = michal.divider;
            yankee = null;
            golfie = yankee == romeon;
            if(golfie) { _fun00014_ip = 971; continue _fun00013 }
 968:
            golfie = romeon;
 971:
            oscard['divider'] = golfie;
            golfie = michal.spacing;
            if(!(yankee == golfie)) { _fun00014_ip = 1014; continue _fun00013 }
 985:
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[option];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.SeparatorSpacingSize;
            golfie = yankee.SMALL;
 1014:
            oscard['spacing'] = golfie;
            return oscard;
 1020:
            oscard = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = romeon[option];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.FILE;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = 7;
            golfie = romeon[golfie];
            romeon = yankee.bind(tangon)(golfie);
            yankee = romeon.toUnfurledMediaItem;
            golfie = michal.file;
            golfie = yankee.bind(romeon)(golfie);
            oscard['file'] = golfie;
            golfie = michal.name;
            oscard['name'] = golfie;
            golfie = michal.size;
            oscard['size'] = golfie;
            golfie = michal.spoiler;
            oscard['spoiler'] = golfie;
            return oscard;
 1133:
            oscard = {};
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.MEDIA_GALLERY;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            romeon = michal.items;
            yankee = romeon.map;
            golfie = function(argFoo) {
                michal = argFoo;
                entity = {};
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 7;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.toUnfurledMediaItem;
                zuuluu = michal.media;
                zuuluu = tangon.bind(report)(zuuluu);
                entity['media'] = zuuluu;
                zuuluu = michal.description;
                entity['description'] = zuuluu;
                michal = michal.spoiler;
                entity['spoiler'] = michal;
                return entity;
            };
            golfie = yankee.bind(romeon)(golfie);
            oscard['items'] = golfie;
            return oscard;
 1209:
            oscard = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = romeon[option];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.THUMBNAIL;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = 7;
            golfie = romeon[golfie];
            romeon = yankee.bind(tangon)(golfie);
            yankee = romeon.toUnfurledMediaItem;
            golfie = michal.media;
            golfie = yankee.bind(romeon)(golfie);
            oscard['media'] = golfie;
            golfie = michal.description;
            oscard['description'] = golfie;
            golfie = michal.spoiler;
            oscard['spoiler'] = golfie;
            return oscard;
 1313:
            oscard = {};
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.TEXT_DISPLAY;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.content;
            oscard['content'] = golfie;
            return oscard;
 1372:
            yankee = michal.components;
            golfie = yankee.map;
            oscard = function(argFoo, argBar) {
                tangon = _closure2_slot3;
                zuuluu = undefined;
                michal = argFoo;
                entity = argBar;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            yankee = golfie.bind(yankee)(oscard);
            golfie = yankee.filter;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            oscard = 5;
            oscard = foxtra[oscard];
            oscard = romeon.bind(tangon)(oscard);
            oscard = oscard.isNotNullish;
            yankee = golfie.bind(yankee)(oscard);
            golfie = michal.accessory;
            oscard = yankee.length;
            verify = verify.bind(tangon)(golfie, oscard);
            foxtra = yankee.length;
            romeon = null;
            golfie = 0;
            oscard = null;
            if(!(golfie !== foxtra)) { _fun00014_ip = 1531; continue _fun00013 }
 1461:
            golfie = romeon == verify;
            oscard = null;
            if(golfie) { _fun00014_ip = 1531; continue _fun00013 }
 1470:
            golfie = {};
            foxtra = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[option];
            romeon = foxtra.bind(tangon)(romeon);
            romeon = romeon.ComponentType;
            romeon = romeon.SECTION;
            golfie['type'] = romeon;
            romeon = _closure1_slot11;
            romeon = romeon.bind(tangon)(report);
            golfie['id'] = romeon;
            golfie['components'] = yankee;
            golfie['accessory'] = verify;
            oscard = golfie;
 1531:
            return oscard;
 1533:
            oscard = {};
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.CHANNEL_SELECT;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.custom_id;
            oscard['customId'] = golfie;
            golfie = michal.disabled;
            oscard['disabled'] = golfie;
            golfie = michal.placeholder;
            verify = null;
            if(!(verify == golfie)) { _fun00014_ip = 1668; continue _fun00013 }
 1613:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 1;
            yankee = backup[verify];
            yankee = foxtra.bind(tangon)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            verify = backup[verify];
            verify = foxtra.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.Otr6W1;
            golfie = yankee.bind(romeon)(verify);
 1668:
            oscard['placeholder'] = golfie;
            golfie = michal.min_values;
            oscard['minValues'] = golfie;
            golfie = michal.max_values;
            oscard['maxValues'] = golfie;
            golfie = michal.channel_types;
            oscard['channelTypes'] = golfie;
            golfie = michal.default_values;
            oscard['defaultValues'] = golfie;
            return oscard;
 1719:
            oscard = {};
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.MENTIONABLE_SELECT;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.custom_id;
            oscard['customId'] = golfie;
            golfie = michal.disabled;
            oscard['disabled'] = golfie;
            golfie = michal.placeholder;
            verify = null;
            if(!(verify == golfie)) { _fun00014_ip = 1854; continue _fun00013 }
 1799:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 1;
            yankee = backup[verify];
            yankee = foxtra.bind(tangon)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            verify = backup[verify];
            verify = foxtra.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.Otr6W1;
            golfie = yankee.bind(romeon)(verify);
 1854:
            oscard['placeholder'] = golfie;
            golfie = michal.min_values;
            oscard['minValues'] = golfie;
            golfie = michal.max_values;
            oscard['maxValues'] = golfie;
            golfie = michal.default_values;
            oscard['defaultValues'] = golfie;
            return oscard;
 1894:
            oscard = {};
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.ROLE_SELECT;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.custom_id;
            oscard['customId'] = golfie;
            golfie = michal.disabled;
            oscard['disabled'] = golfie;
            golfie = michal.placeholder;
            verify = null;
            if(!(verify == golfie)) { _fun00014_ip = 2029; continue _fun00013 }
 1974:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 1;
            yankee = backup[verify];
            yankee = foxtra.bind(tangon)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            verify = backup[verify];
            verify = foxtra.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.Otr6W1;
            golfie = yankee.bind(romeon)(verify);
 2029:
            oscard['placeholder'] = golfie;
            golfie = michal.min_values;
            oscard['minValues'] = golfie;
            golfie = michal.max_values;
            oscard['maxValues'] = golfie;
            golfie = michal.default_values;
            oscard['defaultValues'] = golfie;
            return oscard;
 2069:
            oscard = {};
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.USER_SELECT;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.custom_id;
            oscard['customId'] = golfie;
            golfie = michal.disabled;
            oscard['disabled'] = golfie;
            golfie = michal.placeholder;
            verify = null;
            if(!(verify == golfie)) { _fun00014_ip = 2204; continue _fun00013 }
 2149:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 1;
            yankee = backup[verify];
            yankee = foxtra.bind(tangon)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            verify = backup[verify];
            verify = foxtra.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.Otr6W1;
            golfie = yankee.bind(romeon)(verify);
 2204:
            oscard['placeholder'] = golfie;
            golfie = michal.min_values;
            oscard['minValues'] = golfie;
            golfie = michal.max_values;
            oscard['maxValues'] = golfie;
            golfie = michal.default_values;
            oscard['defaultValues'] = golfie;
            return oscard;
 2244:
            oscard = {};
            golfie = michal.type;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.style;
            oscard['style'] = golfie;
            golfie = michal.custom_id;
            oscard['customId'] = golfie;
            golfie = michal.label;
            oscard['label'] = golfie;
            golfie = michal.value;
            oscard['value'] = golfie;
            golfie = michal.placeholder;
            oscard['placeholder'] = golfie;
            golfie = michal.disabled;
            oscard['disabled'] = golfie;
            verify = michal.required;
            golfie = null;
            golfie = golfie != verify;
            if(!golfie) { _fun00014_ip = 2344; continue _fun00013 }
 2341:
            golfie = verify;
 2344:
            oscard['required'] = golfie;
            golfie = michal.min_length;
            oscard['minLength'] = golfie;
            golfie = michal.max_length;
            oscard['maxLength'] = golfie;
            return oscard;
 2373:
            oscard = {};
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.STRING_SELECT;
            oscard['type'] = golfie;
            golfie = _closure1_slot11;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.custom_id;
            oscard['customId'] = golfie;
            golfie = michal.disabled;
            oscard['disabled'] = golfie;
            yankee = michal.options;
            verify = yankee.map;
            golfie = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = argFoo;
                    entity = {};
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 6;
                    michal = oscard[michal];
                    oscard = undefined;
                    michal = report.bind(oscard)(michal);
                    michal = michal.SelectOptionType;
                    michal = michal.STRING;
                    entity['type'] = michal;
                    michal = zuuluu.label;
                    entity['label'] = michal;
                    michal = zuuluu.value;
                    entity['value'] = michal;
                    michal = zuuluu.default;
                    entity['default'] = michal;
                    michal = zuuluu.description;
                    entity['description'] = michal;
                    report = zuuluu.emoji;
                    michal = null;
                    report = michal != report;
                    michal = undefined;
                    if(!report) { _fun00018_ip = 122; continue _fun00017 }
 99:
                    report = _closure1_slot3;
                    tangon = zuuluu.emoji;
                    zuuluu = _closure2_slot2;
                    michal = report.bind(oscard)(tangon, zuuluu);
 122:
                    entity['emoji'] = michal;
                    return entity;
                }
            };
            golfie = verify.bind(yankee)(golfie);
            oscard['options'] = golfie;
            golfie = michal.placeholder;
            verify = null;
            if(!(verify == golfie)) { _fun00014_ip = 2532; continue _fun00013 }
 2477:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 1;
            yankee = backup[verify];
            yankee = foxtra.bind(tangon)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            verify = backup[verify];
            verify = foxtra.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.Otr6W1;
            golfie = yankee.bind(romeon)(verify);
 2532:
            oscard['placeholder'] = golfie;
            golfie = michal.min_values;
            oscard['minValues'] = golfie;
            golfie = michal.max_values;
            oscard['maxValues'] = golfie;
            return oscard;
 2561:
            golfie = michal.emoji;
            oscard = null;
            oscard = oscard != golfie;
            golfie = undefined;
            if(!oscard) { _fun00014_ip = 2594; continue _fun00013 }
 2578:
            verify = _closure1_slot3;
            oscard = michal.emoji;
            golfie = verify.bind(tangon)(oscard, offset);
 2594:
            oscard = {};
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[option];
            verify = offset.bind(tangon)(verify);
            verify = verify.ComponentType;
            verify = verify.BUTTON;
            oscard['type'] = verify;
            verify = _closure1_slot11;
            verify = verify.bind(tangon)(report);
            oscard['id'] = verify;
            verify = michal.custom_id;
            oscard['customId'] = verify;
            verify = michal.style;
            oscard['style'] = verify;
            verify = michal.disabled;
            oscard['disabled'] = verify;
            verify = michal.url;
            oscard['url'] = verify;
            verify = michal.label;
            oscard['label'] = verify;
            oscard['emoji'] = golfie;
            golfie = michal.sku_id;
            oscard['skuId'] = golfie;
            return oscard;
 2707:
            oscard = michal.components;
            michal = oscard.map;
            entity = function(argFoo, argBar) {
                tangon = _closure2_slot3;
                zuuluu = undefined;
                michal = argFoo;
                entity = argBar;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            verify = michal.bind(oscard)(entity);
            michal = verify.filter;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 5;
            entity = oscard[entity];
            entity = golfie.bind(tangon)(entity);
            entity = entity.isNotNullish;
            michal = michal.bind(verify)(entity);
            entity = {};
            oscard = oscard[option];
            oscard = golfie.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.ACTION_ROW;
            entity['type'] = oscard;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.bind(tangon)(report);
            entity['id'] = zuuluu;
            entity['components'] = michal;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: indicesToId
        report = argFoo;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.asComponentId;
        tangon = report.join;
        entity = ',';
        entity = tangon.bind(report)(entity);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = function(argFoo, argBar) { // Original name: getEmoji
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscard = argFoo;
            entity = {};
            michal = oscard.id;
            entity['id'] = michal;
            michal = oscard.name;
            entity['name'] = michal;
            michal = oscard.animated;
            entity['animated'] = michal;
            report = undefined;
            zuuluu = argBar;
            michal = undefined;
            if(!zuuluu) { _fun00020_ip = 127; continue _fun00019 }
 44:
            tangon = oscard.id;
            zuuluu = null;
            zuuluu = zuuluu != tangon;
            michal = undefined;
            if(!zuuluu) { _fun00020_ip = 127; continue _fun00019 }
 60:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 0;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.getEmojiURL;
            zuuluu = {};
            golfie = oscard.id;
            zuuluu['id'] = golfie;
            oscard = oscard.animated;
            if(oscard) { _fun00020_ip = 110; continue _fun00019 }
 108:
            oscard = false;
 110:
            zuuluu['animated'] = oscard;
            oscard = 48;
            zuuluu['size'] = oscard;
            michal = tangon.bind(report)(zuuluu);
 127:
            entity['src'] = michal;
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo) { // Original name: canShowComponent
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            michal = _closure1_slot2;
            oscard = 2;
            michal = michal[oscard];
            zuuluu = undefined;
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.ACTION_ROW;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 47:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.BUTTON;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 83:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.STRING_SELECT;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 119:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.TEXT_INPUT;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 155:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.USER_SELECT;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 191:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.ROLE_SELECT;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 227:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.MENTIONABLE_SELECT;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 263:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.CHANNEL_SELECT;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 299:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.SECTION;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 335:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.TEXT_DISPLAY;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 371:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.THUMBNAIL;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 407:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.MEDIA_GALLERY;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 443:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.FILE;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 479:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.SEPARATOR;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 512:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.CONTAINER;
            if(!(michal !== tangon)) { _fun00022_ip = 619; continue _fun00021 }
 545:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.ComponentType;
            michal = michal.CONTENT_INVENTORY_ENTRY;
            if(!(michal !== tangon)) { _fun00022_ip = 580; continue _fun00021 }
 578:
            return zuuluu;
 580:
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 4;
            entity = tangon[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.isContentInventoryEmbedEnabled;
            entity = 'canShowComponent';
            entity = michal.bind(zuuluu)(entity);
            return entity;
 619:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = 9;
    oscard = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/interaction_components/InteractionComponentUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo, argBar, argBaz) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            michal = argFoo;
            report = argBar;
            tangon = null;
            entity = tangon == michal;
            golfie = undefined;
            oscard = undefined;
            if(entity) { _fun00024_ip = 30; continue _fun00023 }
 19:
            entity = michal.data;
            oscard = entity.interactionType;
 30:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            entity = option.bind(golfie)(entity);
            entity = entity.InteractionTypes;
            entity = entity.MESSAGE_COMPONENT;
            verify = null;
            if(!(oscard === entity)) { _fun00024_ip = 134; continue _fun00023 }
 71:
            entity = tangon == michal;
            oscard = undefined;
            if(entity) { _fun00024_ip = 85; continue _fun00023 }
 80:
            oscard = michal.state;
 85:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 3;
            entity = offset[entity];
            entity = option.bind(golfie)(entity);
            entity = entity.InteractionState;
            entity = entity.FAILED;
            verify = null;
            if(!(oscard === entity)) { _fun00024_ip = 134; continue _fun00023 }
 123:
            entity = michal.data;
            verify = entity.componentId;
 134:
            oscard = tangon != verify;
            entity = null;
            if(!oscard) { _fun00024_ip = 156; continue _fun00023 }
 143:
            option = _closure1_slot9;
            oscard = argBaz;
            entity = option.bind(golfie)(oscard, verify);
 156:
            if(!(tangon == entity)) { _fun00024_ip = 162; continue _fun00023 }
 160:
            return golfie;
 162:
            oscard = tangon == report;
            entity = undefined;
            if(oscard) { _fun00024_ip = 177; continue _fun00023 }
 171:
            entity = report.interactionError;
 177:
            if(!(tangon == entity)) { _fun00024_ip = 326; continue _fun00023 }
 184:
            report = tangon == michal;
            tangon = undefined;
            if(report) { _fun00024_ip = 199; continue _fun00023 }
 193:
            tangon = michal.errorCode;
 199:
            michal = 429;
            if(!(michal !== tangon)) { _fun00024_ip = 266; continue _fun00023 }
 209:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            michal = 1;
            tangon = option[michal];
            tangon = oscard.bind(golfie)(tangon);
            report = tangon.intl;
            tangon = report.string;
            michal = option[michal];
            michal = oscard.bind(golfie)(michal);
            michal = michal.t;
            michal = michal.VCsUJi;
            michal = tangon.bind(report)(michal);
            _fun00024_ip = 323; continue _fun00023;
 266:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 1;
            tangon = option[zuuluu];
            tangon = oscard.bind(golfie)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.fitPBQ;
            michal = tangon.bind(report)(zuuluu);
 323:
            entity = michal;
 326:
            return entity;
        }
    };
    zuuluu['getLayoutComponentErrorText'] = oscard;
    zuuluu['flattenComponents'] = report;
    zuuluu['findChildComponent'] = tangon;
    tangon = function(argFoo) { // Original name: getAllTextDisplayContent
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tangon = _closure1_slot7;
            zuuluu = undefined;
            michal = argFoo;
            tangon = tangon.bind(zuuluu)(michal);
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.values;
            tangon = michal.bind(zuuluu)(tangon);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 2;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.ComponentType;
                entity = entity.TEXT_DISPLAY;
                entity = michal === entity;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.content;
                return entity;
            };
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.join;
            entity = '\n';
            michal = michal.bind(zuuluu)(entity);
            zuuluu = '';
            entity = null;
            if(!(zuuluu !== michal)) { _fun00026_ip = 94; continue _fun00025 }
 91:
            entity = michal;
 94:
            return entity;
        }
    };
    zuuluu['getAllTextDisplayContent'] = tangon;
    michal = function(argFoo) { // Original name: transformComponents
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tangon = argFoo;
            michal = arguments[1];
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00028_ip = 16; continue _fun00027 }
 14:
            michal = {};
 16:
            var _closure2_slot0 = michal;
            zuuluu = tangon.map;
            michal = function(argFoo, argBar) {
                report = _closure1_slot10;
                tangon = _closure2_slot0;
                zuuluu = new Array(1);
                entity = argBar;
                zuuluu[0] = entity;
                michal = undefined;
                entity = argFoo;
                entity = report.bind(michal)(entity, tangon, zuuluu);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                michal = null;
                entity = argFoo;
                entity = michal != entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['transformComponents'] = michal;
    return entity;
})();