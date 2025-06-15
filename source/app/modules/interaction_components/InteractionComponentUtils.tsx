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
            verify = _closure1_slot5;
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
            golfie = _closure1_slot5;
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
    var _closure1_slot4 = entity;
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
    var _closure1_slot5 = entity;
    report = function(argFoo) { // Original name: flattenComponents
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = global;
            entity = entity.Map;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            offset = michal;
            entity = new offset[entity](verify);
            entity = entity instanceof Object ? entity : michal;
            zuuluu = _closure1_slot4;
            report = undefined;
            michal = argFoo;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.bind(report)();
            michal = zuuluu.done;
            if(michal) { _fun00008_ip = 87; continue _fun00007 }
 57:
            golfie = _closure1_slot7;
            michal = zuuluu.value;
            michal = golfie.bind(report)(entity, michal);
            golfie = tangon.bind(report)();
            michal = golfie.done;
            zuuluu = golfie;
            if(!michal) { _fun00008_ip = 57; continue _fun00007 }
 87:
            return entity;
        }
    };
    var _closure1_slot6 = report;
    entity = function(argFoo, argBar) { // Original name: flattenComponent
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argFoo;
            zuuluu = argBar;
            var _closure2_slot0 = oscard;
            tangon = oscard.set;
            entity = zuuluu.id;
            entity = tangon.bind(oscard)(entity, zuuluu);
            golfie = zuuluu.type;
            option = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 2;
            report = entity[verify];
            entity = undefined;
            report = option.bind(entity)(report);
            report = report.ComponentType;
            report = report.ACTION_ROW;
            if(!(report !== golfie)) { _fun00010_ip = 205; continue _fun00009 }
 77:
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[verify];
            report = option.bind(entity)(report);
            report = report.ComponentType;
            report = report.SECTION;
            if(!(report !== golfie)) { _fun00010_ip = 166; continue _fun00009 }
 110:
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[verify];
            report = option.bind(entity)(report);
            report = report.ComponentType;
            report = report.CONTAINER;
            if(!(report === golfie)) { _fun00010_ip = 226; continue _fun00009 }
 143:
            option = zuuluu.components;
            golfie = option.forEach;
            report = function(argFoo) {
                tangon = _closure1_slot7;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            report = golfie.bind(option)(report);
            _fun00010_ip = 226; continue _fun00009;
 166:
            option = zuuluu.components;
            golfie = option.forEach;
            report = function(argFoo) {
                tangon = _closure1_slot7;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            report = golfie.bind(option)(report);
            report = _closure1_slot7;
            tangon = zuuluu.accessory;
            tangon = report.bind(entity)(oscard, tangon);
            _fun00010_ip = 226; continue _fun00009;
 205:
            tangon = zuuluu.components;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                tangon = _closure1_slot7;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 226:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
            if(!(golfie !== oscard)) { _fun00012_ip = 224; continue _fun00011 }
 61:
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(zuuluu)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.SECTION;
            if(!(golfie !== oscard)) { _fun00012_ip = 165; continue _fun00011 }
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
            if(!oscard) { _fun00012_ip = 163; continue _fun00011 }
 160:
            zuuluu = report;
 163:
            return zuuluu;
 165:
            zuuluu = michal.accessory;
            zuuluu = zuuluu.id;
            if(!(zuuluu !== tangon)) { _fun00012_ip = 216; continue _fun00011 }
 180:
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
            if(!report) { _fun00012_ip = 214; continue _fun00011 }
 211:
            zuuluu = tangon;
 214:
            _fun00012_ip = 222; continue _fun00011;
 216:
            zuuluu = michal.accessory;
 222:
            return zuuluu;
 224:
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
            if(!zuuluu) { _fun00012_ip = 258; continue _fun00011 }
 255:
            entity = michal;
 258:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
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
                    tangon = _closure1_slot9;
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
            yankee = michal.type;
            offset = _closure1_slot0;
            tangon = _closure1_slot2;
            option = 2;
            golfie = tangon[option];
            tangon = undefined;
            golfie = offset.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            offset = golfie.ACTION_ROW;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 79:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.BUTTON;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 117:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.STRING_SELECT;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 155:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.TEXT_INPUT;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 193:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.USER_SELECT;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 231:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.ROLE_SELECT;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 269:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.MENTIONABLE_SELECT;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 307:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.CHANNEL_SELECT;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 345:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.SECTION;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 383:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.TEXT_DISPLAY;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 421:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.THUMBNAIL;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 459:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.MEDIA_GALLERY;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 497:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.FILE;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 535:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.SEPARATOR;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 570:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.CONTAINER;
            golfie = true;
            if(!(offset !== yankee)) { _fun00014_ip = 677; continue _fun00013 }
 605:
            romeon = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = romeon.bind(tangon)(offset);
            offset = offset.ComponentType;
            offset = offset.CONTENT_INVENTORY_ENTRY;
            golfie = undefined;
            if(!(offset === yankee)) { _fun00014_ip = 677; continue _fun00013 }
 640:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 4;
            offset = romeon[offset];
            romeon = yankee.bind(tangon)(offset);
            yankee = romeon.isContentInventoryEmbedEnabled;
            offset = 'canShowComponent';
            golfie = yankee.bind(romeon)(offset);
 677:
            if(golfie) { _fun00014_ip = 684; continue _fun00013 }
 680:
            golfie = null;
            return golfie;
 684:
            offset = oscard.includeEmojiSrc;
            var _closure2_slot2 = offset;
            golfie = michal.type;
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.ACTION_ROW;
            if(!(oscard !== golfie)) { _fun00014_ip = 3334; continue _fun00013 }
 735:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.BUTTON;
            if(!(oscard !== golfie)) { _fun00014_ip = 3188; continue _fun00013 }
 771:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.STRING_SELECT;
            if(!(oscard !== golfie)) { _fun00014_ip = 3000; continue _fun00013 }
 807:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.TEXT_INPUT;
            if(!(oscard !== golfie)) { _fun00014_ip = 2871; continue _fun00013 }
 843:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.USER_SELECT;
            if(!(oscard !== golfie)) { _fun00014_ip = 2696; continue _fun00013 }
 879:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.ROLE_SELECT;
            if(!(oscard !== golfie)) { _fun00014_ip = 2521; continue _fun00013 }
 915:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.MENTIONABLE_SELECT;
            if(!(oscard !== golfie)) { _fun00014_ip = 2346; continue _fun00013 }
 951:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.CHANNEL_SELECT;
            if(!(oscard !== golfie)) { _fun00014_ip = 2160; continue _fun00013 }
 987:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.SECTION;
            if(!(oscard !== golfie)) { _fun00014_ip = 1999; continue _fun00013 }
 1023:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.TEXT_DISPLAY;
            if(!(oscard !== golfie)) { _fun00014_ip = 1940; continue _fun00013 }
 1059:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.THUMBNAIL;
            if(!(oscard !== golfie)) { _fun00014_ip = 1836; continue _fun00013 }
 1095:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.MEDIA_GALLERY;
            if(!(oscard !== golfie)) { _fun00014_ip = 1760; continue _fun00013 }
 1131:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.FILE;
            if(!(oscard !== golfie)) { _fun00014_ip = 1647; continue _fun00013 }
 1167:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.SEPARATOR;
            if(!(oscard !== golfie)) { _fun00014_ip = 1532; continue _fun00013 }
 1203:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.CONTENT_INVENTORY_ENTRY;
            if(!(oscard !== golfie)) { _fun00014_ip = 1453; continue _fun00013 }
 1239:
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.ComponentType;
            oscard = oscard.CONTAINER;
            if(!(oscard !== golfie)) { _fun00014_ip = 1276; continue _fun00013 }
 1272:
            oscard = null;
            return oscard;
 1276:
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
            yankee = _closure1_slot10;
            yankee = yankee.bind(tangon)(report);
            oscard['id'] = yankee;
            romeon = michal.accent_color;
            yankee = null;
            romeon = yankee != romeon;
            yankee = undefined;
            if(!romeon) { _fun00014_ip = 1430; continue _fun00013 }
 1390:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 8;
            romeon = backup[romeon];
            kiloes = foxtra.bind(tangon)(romeon);
            backup = kiloes.int2hsl;
            foxtra = michal.accent_color;
            romeon = false;
            yankee = backup.bind(kiloes)(foxtra, romeon);
 1430:
            oscard['accentColor'] = yankee;
            yankee = michal.spoiler;
            oscard['spoiler'] = yankee;
            oscard['components'] = golfie;
            return oscard;
 1453:
            golfie = michal.content_inventory_entry;
            oscard = null;
            golfie = oscard == golfie;
            if(golfie) { _fun00014_ip = 1530; continue _fun00013 }
 1468:
            golfie = {};
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[option];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.ComponentType;
            yankee = yankee.CONTENT_INVENTORY_ENTRY;
            golfie['type'] = yankee;
            yankee = _closure1_slot10;
            yankee = yankee.bind(tangon)(report);
            golfie['id'] = yankee;
            yankee = michal.content_inventory_entry;
            golfie['contentInventoryEntry'] = yankee;
            oscard = golfie;
 1530:
            return oscard;
 1532:
            oscard = {};
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.SEPARATOR;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            romeon = michal.divider;
            yankee = null;
            golfie = yankee == romeon;
            if(golfie) { _fun00014_ip = 1598; continue _fun00013 }
 1595:
            golfie = romeon;
 1598:
            oscard['divider'] = golfie;
            golfie = michal.spacing;
            if(!(yankee == golfie)) { _fun00014_ip = 1641; continue _fun00013 }
 1612:
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[option];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.SeparatorSpacingSize;
            golfie = yankee.SMALL;
 1641:
            oscard['spacing'] = golfie;
            return oscard;
 1647:
            oscard = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = romeon[option];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.FILE;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
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
 1760:
            oscard = {};
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.MEDIA_GALLERY;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
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
 1836:
            oscard = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = romeon[option];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.THUMBNAIL;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
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
 1940:
            oscard = {};
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.TEXT_DISPLAY;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.content;
            oscard['content'] = golfie;
            return oscard;
 1999:
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
            if(!(golfie !== foxtra)) { _fun00014_ip = 2158; continue _fun00013 }
 2088:
            golfie = romeon == verify;
            oscard = null;
            if(golfie) { _fun00014_ip = 2158; continue _fun00013 }
 2097:
            golfie = {};
            foxtra = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[option];
            romeon = foxtra.bind(tangon)(romeon);
            romeon = romeon.ComponentType;
            romeon = romeon.SECTION;
            golfie['type'] = romeon;
            romeon = _closure1_slot10;
            romeon = romeon.bind(tangon)(report);
            golfie['id'] = romeon;
            golfie['components'] = yankee;
            golfie['accessory'] = verify;
            oscard = golfie;
 2158:
            return oscard;
 2160:
            oscard = {};
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.CHANNEL_SELECT;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.custom_id;
            oscard['customId'] = golfie;
            golfie = michal.disabled;
            oscard['disabled'] = golfie;
            golfie = michal.placeholder;
            verify = null;
            if(!(verify == golfie)) { _fun00014_ip = 2295; continue _fun00013 }
 2240:
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
 2295:
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
 2346:
            oscard = {};
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.MENTIONABLE_SELECT;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.custom_id;
            oscard['customId'] = golfie;
            golfie = michal.disabled;
            oscard['disabled'] = golfie;
            golfie = michal.placeholder;
            verify = null;
            if(!(verify == golfie)) { _fun00014_ip = 2481; continue _fun00013 }
 2426:
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
 2481:
            oscard['placeholder'] = golfie;
            golfie = michal.min_values;
            oscard['minValues'] = golfie;
            golfie = michal.max_values;
            oscard['maxValues'] = golfie;
            golfie = michal.default_values;
            oscard['defaultValues'] = golfie;
            return oscard;
 2521:
            oscard = {};
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.ROLE_SELECT;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.custom_id;
            oscard['customId'] = golfie;
            golfie = michal.disabled;
            oscard['disabled'] = golfie;
            golfie = michal.placeholder;
            verify = null;
            if(!(verify == golfie)) { _fun00014_ip = 2656; continue _fun00013 }
 2601:
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
 2656:
            oscard['placeholder'] = golfie;
            golfie = michal.min_values;
            oscard['minValues'] = golfie;
            golfie = michal.max_values;
            oscard['maxValues'] = golfie;
            golfie = michal.default_values;
            oscard['defaultValues'] = golfie;
            return oscard;
 2696:
            oscard = {};
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.USER_SELECT;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
            golfie = golfie.bind(tangon)(report);
            oscard['id'] = golfie;
            golfie = michal.custom_id;
            oscard['customId'] = golfie;
            golfie = michal.disabled;
            oscard['disabled'] = golfie;
            golfie = michal.placeholder;
            verify = null;
            if(!(verify == golfie)) { _fun00014_ip = 2831; continue _fun00013 }
 2776:
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
 2831:
            oscard['placeholder'] = golfie;
            golfie = michal.min_values;
            oscard['minValues'] = golfie;
            golfie = michal.max_values;
            oscard['maxValues'] = golfie;
            golfie = michal.default_values;
            oscard['defaultValues'] = golfie;
            return oscard;
 2871:
            oscard = {};
            golfie = michal.type;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
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
            if(!golfie) { _fun00014_ip = 2971; continue _fun00013 }
 2968:
            golfie = verify;
 2971:
            oscard['required'] = golfie;
            golfie = michal.min_length;
            oscard['minLength'] = golfie;
            golfie = michal.max_length;
            oscard['maxLength'] = golfie;
            return oscard;
 3000:
            oscard = {};
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[option];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ComponentType;
            golfie = golfie.STRING_SELECT;
            oscard['type'] = golfie;
            golfie = _closure1_slot10;
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
            if(!(verify == golfie)) { _fun00014_ip = 3159; continue _fun00013 }
 3104:
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
 3159:
            oscard['placeholder'] = golfie;
            golfie = michal.min_values;
            oscard['minValues'] = golfie;
            golfie = michal.max_values;
            oscard['maxValues'] = golfie;
            return oscard;
 3188:
            golfie = michal.emoji;
            oscard = null;
            oscard = oscard != golfie;
            golfie = undefined;
            if(!oscard) { _fun00014_ip = 3221; continue _fun00013 }
 3205:
            verify = _closure1_slot3;
            oscard = michal.emoji;
            golfie = verify.bind(tangon)(oscard, offset);
 3221:
            oscard = {};
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[option];
            verify = offset.bind(tangon)(verify);
            verify = verify.ComponentType;
            verify = verify.BUTTON;
            oscard['type'] = verify;
            verify = _closure1_slot10;
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
 3334:
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
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.bind(tangon)(report);
            entity['id'] = zuuluu;
            entity['components'] = michal;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot10 = entity;
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
    entity = 9;
    oscard = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/interaction_components/InteractionComponentUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo, argBar, argBaz) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            report = argBar;
            tangon = null;
            entity = tangon == michal;
            golfie = undefined;
            oscard = undefined;
            if(entity) { _fun00022_ip = 30; continue _fun00021 }
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
            if(!(oscard === entity)) { _fun00022_ip = 134; continue _fun00021 }
 71:
            entity = tangon == michal;
            oscard = undefined;
            if(entity) { _fun00022_ip = 85; continue _fun00021 }
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
            if(!(oscard === entity)) { _fun00022_ip = 134; continue _fun00021 }
 123:
            entity = michal.data;
            verify = entity.componentId;
 134:
            oscard = tangon != verify;
            entity = null;
            if(!oscard) { _fun00022_ip = 156; continue _fun00021 }
 143:
            option = _closure1_slot8;
            oscard = argBaz;
            entity = option.bind(golfie)(oscard, verify);
 156:
            if(!(tangon == entity)) { _fun00022_ip = 162; continue _fun00021 }
 160:
            return golfie;
 162:
            oscard = tangon == report;
            entity = undefined;
            if(oscard) { _fun00022_ip = 177; continue _fun00021 }
 171:
            entity = report.interactionError;
 177:
            if(!(tangon == entity)) { _fun00022_ip = 326; continue _fun00021 }
 184:
            report = tangon == michal;
            tangon = undefined;
            if(report) { _fun00022_ip = 199; continue _fun00021 }
 193:
            tangon = michal.errorCode;
 199:
            michal = 429;
            if(!(michal !== tangon)) { _fun00022_ip = 266; continue _fun00021 }
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
            _fun00022_ip = 323; continue _fun00021;
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
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = _closure1_slot6;
            zuuluu = undefined;
            michal = argFoo;
            zuuluu = tangon.bind(zuuluu)(michal);
            michal = zuuluu.values;
            tangon = michal.bind(zuuluu)();
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
            michal = michal.bind(zuuluu)(entity);
            entity = michal.toArray;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.join;
            entity = '\n';
            michal = michal.bind(zuuluu)(entity);
            zuuluu = '';
            entity = null;
            if(!(zuuluu !== michal)) { _fun00024_ip = 95; continue _fun00023 }
 92:
            entity = michal;
 95:
            return entity;
        }
    };
    zuuluu['getAllTextDisplayContent'] = tangon;
    michal = function(argFoo) { // Original name: transformComponents
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tangon = argFoo;
            michal = arguments[1];
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00026_ip = 16; continue _fun00025 }
 14:
            michal = {};
 16:
            var _closure2_slot0 = michal;
            zuuluu = tangon.map;
            michal = function(argFoo, argBar) {
                report = _closure1_slot9;
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